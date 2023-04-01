import React, { useContext } from 'react'
import StudentContext from '../context/student/StudentContext'
import SingleStudent from './SingleStudent'
const MentorStudent = (props) => {
    
    const context = useContext(StudentContext)
    const {s_student} = context
    const handleclick= async(e,hilter)=>{
        await document.getElementById("Filter1")
        if(hilter=="Filter1")
        {
           document.getElementById("Filter1").style.display="block"
            document.getElementById("Filter2").style.display="none"
            document.getElementById("Filter3").style.display="none"
        }
        if(hilter=="Filter2")
        {
            document.getElementById("Filter2").style.display="block"
            document.getElementById("Filter1").style.display="none"
            document.getElementById("Filter3").style.display="none"
        }
        if(hilter=="Filter3")
        {
            document.getElementById("Filter3").style.display="block"
            document.getElementById("Filter1").style.display="none"
            document.getElementById("Filter2").style.display="none"
        }
    }
  return (
    <>
    <div className='container'>
    <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
  <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" onClick={(e)=>{handleclick(e,"Filter1")}}/>
  <label className="btn btn-outline-primary" htmlFor="btnradio1">Your Students</label>

  <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off" onClick={(e)=>{handleclick(e,"Filter2")}}/>
  <label className="btn btn-outline-primary" htmlFor="btnradio2">Checked</label>

  <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off" onClick={(e)=>{handleclick(e,"Filter3")}}/>
  <label className="btn btn-outline-primary" htmlFor="btnradio3">Unchecked</label>
</div>
        <div id="Filter1">
        <h2>Your Students : Total</h2>
        <div className='row'>
                {s_student.map((single_student)=>{
                   return  <div className='col-md-4' key={single_student._id}>
                    <SingleStudent setAlertMessage={props.setAlertMessage} setalerttype={props.setalerttype} mentorid={props.mentorid} name={single_student.name} id={single_student.id} Ideation={single_student.Ideation} Execution={single_student.Execution} Viva={single_student.Viva} isChecked={single_student.isChecked} />
                   </div>
                })}
           </div> 
        </div>
        <div id="Filter2" style={{"display":"none"}}> 
        <h2>Your Students : Checked</h2>
        <div className='row'>
                {s_student.map((single_student)=>{
                    if(single_student.Execution!=="" && single_student.Ideation!=="" && single_student.Viva!=="")
                    {
                        return  <div className='col-md-4' key={single_student._id}>
                    <SingleStudent setAlertMessage={props.setAlertMessage} setalerttype={props.setalerttype} mentorid={props.mentorid} name={single_student.name} id={single_student.id} Ideation={single_student.Ideation} Execution={single_student.Execution} Viva={single_student.Viva} isChecked={single_student.isChecked} />
                   </div>
                    }
                })}  
        </div>
        </div>
        <div id="Filter3" style={{"display":"none"}}> 
        <h2>Your Students : Unchecked</h2>
        <div className='row'>
                {s_student.map((single_student)=>{
                    if(single_student.Execution=="" || single_student.Ideation=="" || single_student.Viva=="")
                    {
                        return  <div className='col-md-4' key={single_student._id}>
                    <SingleStudent setAlertMessage={props.setAlertMessage} setalerttype={props.setalerttype} mentorid={props.mentorid} name={single_student.name} id={single_student.id} Ideation={single_student.Ideation} Execution={single_student.Execution} Viva={single_student.Viva} isChecked={single_student.isChecked} />
                   </div>
                    }
                })}  
            </div>
        </div>
    </div>
    </>
  )
}

export default MentorStudent
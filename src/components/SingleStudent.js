import React, { useContext, useState } from 'react'
import StudentContext from '../context/student/StudentContext'
const SingleStudent = (props) => {
  const context = useContext(StudentContext)
  const {s_student,getselectedstudents,removestudent,updateMarks} = context
  const [IdeationMarks, setIdeationMarks] = useState(props.Ideation);
  const [ExecutionMarks, setExecutionMarks] = useState(props.Execution);
  const [VivaMarks, setVivaMarks] = useState(props.Viva);
//Remove Student
//Update Marks of student
const handleDelete=async (e)=>{
  // console.log(props.id)
  // console.log(props.isChecked)
  if(s_student.length>3)
        {
          await removestudent(props.id,props.mentorid);
          await getselectedstudents(props.mentorid);
          props.setAlertMessage("Student is removed successfully")
          props.setalerttype("primary")
        }
        else{
          props.setAlertMessage("Your selected students range can not be less than 3")
          props.setalerttype("danger")
        }
}
// console.log
const handleEdit=async(e)=>{
  if(props.isChecked!="yes" && s_student.length>=3)
  {
    // console.log(IdeationMarks)
    // console.log(ExecutionMarks)
    // console.log(VivaMarks)
    // console.log(props.isChecked);
    const json=await updateMarks(props.id,props.mentorid,IdeationMarks,ExecutionMarks,VivaMarks);
    if(json.message)
    {
      props.setAlertMessage(json.message)
      props.setalerttype("danger")
    }
          else{
            props.setAlertMessage("Marks updated successfully")
            props.setalerttype("primary")
          }
  }
  else{
    props.isChecked=="yes"?props.setAlertMessage("Marks of selected student is locked"):props.setAlertMessage("Minimum 3 students are required to edit marks");
      props.setalerttype("danger")
  }
}

const handleOnChange1 = (event)=>{
  // console.log(event.target.value)
setIdeationMarks(event.target.value)
}
const handleChange2=(event)=>{
  // console.log(event.target.value)
  setExecutionMarks(event.target.value)
  }
  const handleChange3=(event)=>{
    // console.log(event.target.value)
    setVivaMarks(event.target.value)
    }

  return (
    <div className="card my-3" >
  <div className="card-body">
    <h5 className="card-title">Name : {props.name}</h5>
    <p id={props.id} className="card-text">UID : {props.id}</p>
    <p className="card-text"><span style={{"width":"100px","display":"flex"}}>Ideation :</span> <input value={IdeationMarks} onChange={handleOnChange1}></input></p>
    <p className="card-text"><span style={{"width":"100px","display":"flex"}}>Execution :</span> <input type="text" value={ExecutionMarks} placeholder={props.Execution} onChange={handleChange2}/></p>
    <p className="card-text"><span style={{"width":"100px","display":"flex"}}>Viva :</span> <input type="text" value={VivaMarks} placeholder={props.Viva} onChange={handleChange3}/></p>
    <a href="#" className={`btn btn-${s_student.length>3?"primary":"secondary"}`}  onClick={handleDelete}>
    <i className="fa-solid fa-trash-can"></i>
    </a>
    <a href="#" className={`btn btn-${props.isChecked=="yes"?"secondary":"primary"} mx-3`} onClick={handleEdit}>
    <i className="fa-sharp fa-solid fa-file-pen"></i>
    </a>
  </div>
</div>
  )
}

export default SingleStudent
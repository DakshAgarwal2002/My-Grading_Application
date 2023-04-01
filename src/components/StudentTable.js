import React, { useContext, useState } from 'react'
import StudentContext from '../context/student/StudentContext'
const StudentTable = (props) => {
  const [alert, setAlert] = useState("Every thing is normal")
  const [alerttype, setAlertType] = useState("primary")
    const context = useContext(StudentContext)
    const {students,addstudent,s_student,getselectedstudents} = context

      const handleClick=async (e)=>{
        const u_id=e.target.innerText;
        if(s_student.length<4)
        {
          const json=await addstudent(u_id,props.mentorid);
          if(json.error)
          {
            props.setAlertMessage(json.error)
            props.setalerttype("danger")
          }
          else{
            props.setAlertMessage("Student is added successfully")
          props.setalerttype("primary")
          }
          await getselectedstudents(props.mentorid)
          
        }    
        else{
          props.setAlertMessage("Your selected students range can not be greater than 4 ")
          props.setalerttype("danger")
        }
      }

  return (
    <div className='container my-3'>
      <div className="table-responsive">
        <table className="table table-striped">
  <thead>
    <tr>
    <th className='text-center' scope="col">UID</th>
      <th className='text-center' scope="col">Name</th>
      <th className='text-center' scope="col">Mentor</th>
      <th className='text-center' scope="col">Ideation</th>
      <th className='text-center' scope="col">Execution</th>
      <th className='text-center' scope="col">Viva</th>
      <th className='text-center' scope="col">Total</th>
      <th className='text-center' scope="col">Locked</th>
    </tr>
  </thead>
  <tbody>
    {students.map((student)=>{

       return <tr key={student._id}>
        <td  className='text-center'  style={{"color":"red","cursor":"pointer"}} onClick={handleClick}>{student.id}</td>
        <td className='text-center'>{student.name}</td>
        <td className='text-center'>{student.mentor}</td>
        <td className='text-center'>{Number(student.Ideation)}</td>
        <td className='text-center'>{Number(student.Execution)}</td>
        <td className='text-center'>{Number(student.Viva)}</td>
        <td className='text-center'>{Number(student.Viva)+Number(student.Execution)+Number(student.Ideation)}</td>
        <td className='text-center'>{student.isChecked}</td>
      </tr>
    })}
  </tbody>
</table>
</div>
    </div>
  )
}

export default StudentTable
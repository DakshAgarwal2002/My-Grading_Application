import React, { useContext, useState } from 'react'
import StudentContext from '../context/student/StudentContext'
import exportFromJSON from 'export-from-json'
const Lock = (props) => {
    const context = useContext(StudentContext)
    const {students,s_student,lockMarks,resetstudents} = context
    const handleLock=async()=>{
        await lockMarks(props.mentorid);
        props.setAlertMessage("Marks of selected students is locked")
            props.setalerttype("primary")
    }
    const handleReset=async()=>{
      await resetstudents();
      props.setAlertMessage("Whole Student Data is deleted")
          props.setalerttype("primary")
  }
  const handleDownload=async()=>{
    const data=[students]
    const fileName = 'download'
const exportType =  exportFromJSON.types.xls
exportFromJSON({ data, fileName, exportType })

    props.setAlertMessage("Student Data CSV has been downloaded successfully")
        props.setalerttype("primary")
}
  return (
    <>
    <div className='d-flex justify-content-center'>
    <button type="button" className="btn btn-danger my-3 mx-2" onClick={handleReset}>Reset Whole Database</button>
      <button type="button" className="btn btn-success my-3 mx-2" onClick={handleLock}>Lock Marks</button>
      <button type="button" className="btn btn-primary my-3 mx-2" onClick={handleDownload}>Download Excel File</button>
      </div>
      </>
  )
}

export default Lock
import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Navbar from './components/Navbar';
import StudentTable from './components/StudentTable';
import StudentState from './context/student/StudentState';
import MentorStudent from './components/MentorStudent';
import Lock from './components/Lock';

function App() {
  const [mentorid, setMentorid] = useState("E7671");
  const [alertmessage, setAlertMessage] = useState("Everything is Normal. Keep going :)")
  const [alerttype, setalerttype] = useState("primary")
  return (
    <>
      <StudentState>
        <Navbar setMentorid={setMentorid} mentorid={mentorid} />
        <div className={`alert alert-${alerttype}`} role="alert">
          {`${mentorid} ${alertmessage} `}
        </div>
        <div className='container-fluid'>
        <h3><strong>Instructions</strong></h3>
        <p>Select Mentor Id from Dropdown in Navbar / Default is E7671 /</p>
        <p>Click on student UID to add the student</p>
        <p>Click on <a href="#" className={`btn btn-primary`}>
    <i className="fa-solid fa-trash-can"></i>
    </a> to remove student</p>
    <p>In input Fields add marks and click on <a href="#" className={`btn btn-primary`}>
    <i className="fa-sharp fa-solid fa-file-pen"></i>
    </a> to apply changes</p>
    <p>There might be some delay in apply Changes due to render slow server. Keep patience</p>
    </div>
    <h3 className='text-center'><strong>Student's Marks database</strong></h3>
        <StudentTable setAlertMessage={setAlertMessage} setalerttype={setalerttype} mentorid={mentorid} />
        <MentorStudent setAlertMessage={setAlertMessage} setalerttype={setalerttype} mentorid={mentorid} />
        <Lock setAlertMessage={setAlertMessage} setalerttype={setalerttype} mentorid={mentorid} />
      </StudentState>
    </>
  );
}

export default App;

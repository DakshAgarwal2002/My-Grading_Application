import React, { useState } from "react";
import StudentContext from "./StudentContext";

const StudentState = (props) => {
    // const host = "http://localhost:5000"
    const host = "https://mygradingapplication-backend.onrender.com"
    
  const [students, setstudents] = useState([])
  const [s_student, sets_student] = useState([])
  //Get All student on Fronend
  const getstudents = async () => {
    const response = await fetch(`${host}/api/getstudents`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
   },
    });
    const json = await response.json()
    console.log(json)
    setstudents(json);
  }

  const resetstudents = async () => {
    const response = await fetch(`${host}/api/resetstudents`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
   },
    });
    const json = await response.json()
  getstudents();
  getselectedstudents("E7671");
  return json;
  }

//Assign Student
const addstudent = async (id,mentor) => {
    const response = await fetch(`${host}/api/addStudent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
 },
      body: JSON.stringify({id,mentor}),
    });
    const json = await response.json()
    getstudents();
    return json;
  }


  const getselectedstudents = async (mentor) => {
    const response = await fetch(`${host}/api/getselectedstudents`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
 },
      body: JSON.stringify({mentor}),
    });
    const json = await response.json()
    // console.log(json)
    sets_student(json);
  }

  const removestudent = async (id,mentor) => {
    const response = await fetch(`${host}/api/removestudent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
 },
      body: JSON.stringify({id,mentor}),
    });
    getstudents();
    
  }

const updateMarks=async (id,mentor,Ideation, Execution,Viva)=>{
  const response = await fetch(`${host}/api/updatemarks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
},
    body: JSON.stringify({id,mentor,Ideation, Execution,Viva}),
  });
  const json = await response.json()
  getstudents();
  getselectedstudents(mentor);
  return json;
}

const lockMarks=async (mentor)=>{
  const response = await fetch(`${host}/api/lockstudents`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
},
    body: JSON.stringify({mentor}),
  });
  getstudents();
}


    return (
        <StudentContext.Provider value={{ students, setstudents,getstudents,addstudent,s_student, sets_student,getselectedstudents,removestudent,updateMarks,lockMarks,resetstudents}}>
          {props.children}
        </StudentContext.Provider>
      )
}

export default StudentState
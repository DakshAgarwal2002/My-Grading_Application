import React, { useContext, useEffect } from 'react'
import StudentContext from '../context/student/StudentContext'
const Navbar = (props) => {
  const context = useContext(StudentContext)
    const {getstudents,getselectedstudents} = context
    const handleSelect=(e)=>{
        e.preventDefault();
        props.setMentorid(e.target.innerText)
        getstudents();
        getselectedstudents(e.target.innerText);
    }
    useEffect(() => {
      getstudents();
      getselectedstudents(props.mentorid);
    }, [])
    
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">My_Grading_Application</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Select your Mentor ID
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/" onClick={handleSelect}>E7671</a></li>
            <li><a className="dropdown-item" href="/" onClick={handleSelect}>E7678</a></li>
            <li><a className="dropdown-item" href="/" onClick={handleSelect}>E7679</a></li>
            <li><a className="dropdown-item" href="/" onClick={handleSelect}>E7681</a></li>
            <li><a className="dropdown-item" href="/" onClick={handleSelect}>E7686</a></li>
            <li><a className="dropdown-item" href="/" onClick={handleSelect}>E7981</a></li>
            <li><a className="dropdown-item" href="/" onClick={handleSelect}>E7875</a></li>
            <li><a className="dropdown-item" href="/" onClick={handleSelect}>E7612</a></li>
            <li><a className="dropdown-item" href="/" onClick={handleSelect}>E7655</a></li>
            <li><a className="dropdown-item" href="/" onClick={handleSelect}>E7690</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav></>
  )
}

export default Navbar
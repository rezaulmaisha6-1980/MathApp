import React from "react"; 

import './App.css'

import PageRouter from "./routes/PageRouter";
import UserApp from "./components/UserApp";


import StudentInfoRouter from "./routes/StudentInfoRouter";
import LeaveApp from "./components/LeaveApp";












function App() {
  

  return (
    <>


<PageRouter/>


<UserApp />

<StudentInfoRouter />

{/* <LeaveApp /> */}


    </>
  )
}

export default App

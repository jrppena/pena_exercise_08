import { useState } from 'react';
import NavigationList from "./data";
import './assets/styles/stylesheet.css';


function App(){

    const Navigations = [
      {  title: "Home" },
      {  title: "Explore" },
      {  title: "Messages" },
      {  title: "Bookmarks" },
      {  title: "Profile" },
    ]
    const [CMSCSubjects, setCMSCSubjects] = useState([
        { code: "CMSC100", description: "Web Programming", id: 1 },
        { code: "CMSC150", description: "Scientific Computation", id: 2 },
        { code: "CMSC22", description: "Object-oriented Programming", id: 3 },
    ]);


    const [CHEMSubjects, setCHEMSubjects] = useState([
        { code: "CMSC100", description: "Web Programming", id: 1 },
        { code: "CMSC150", description: "Scientific Computation", id: 2 },
        { code: "CMSC22", description: "Object-oriented Programming", id: 3 },
    ]);




    function eventHandler(){
        var courseCode = document.getElementById("courseCode").value;
        var courseDesc = document.getElementById("courseDesc").value;
        var courseId = document.getElementById("courseId").value;
        var CScourseCategory = document.getElementById('CScourseCategory');
        var CHcourseCategory = document.getElementById('CHcourseCategory');


        var newSubjects = {
            "code": courseCode,
            "description": courseDesc,
            "id": courseId,
        }
        if(CScourseCategory.checked){
            // console.log(CScourseCategory.value);
            setCMSCSubjects([...CMSCSubjects, newSubjects]);
        }else if(CHcourseCategory.checked){
            // console.log(CHcourseCategory.value);
            setCHEMSubjects([...CHEMSubjects, newSubjects]);
        }


       
    }


    return(
        <div >
            <h1 className="title">POST IT</h1>
            {/* forms */}
           
            {/* forms */}
            <div className='flex-container'>
              <div className='flex-item'>
                <div id="container">
                  <NavigationList className="navigation" data = {Navigations} />
                </div>
              </div>
              <div className='flex-item'>
                <NavigationList className="navigation" data = {Navigations} />

              </div>
              <div className='flex-item'>
                
                <NavigationList className="navigation" data = {Navigations} />
              </div>
            </div>
           
        </div>
    );
}


export default App;

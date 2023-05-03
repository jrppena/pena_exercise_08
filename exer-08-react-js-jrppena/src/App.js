import { useState } from 'react';
import ReusableNav from "./data";
import './assets/styles/stylesheet.css';


function App(){

    const Navigations = [
      {  icons: "fa fa-home", additional: null, title: "Home" },
      {  icons: "material-icons", additional: "explore", title: "Explore" },
      {  icons: "fa fa-envelope message-icon", additional: null, title: "Messages" },
      {  icons: "fa fa-bookmark-o", additional: null, title: "Bookmarks" },
      {  icons: "fas fa-address-book", additional: null, title: "Profile" },
    ]
    
    const Posts = [
      {
        image: "", charName: "Mickey Mouse", description: "hot dog hot dog hot diggity dog"
      },
      {
        image: "", charName: "Daisy Duck", description: "Have you seen Donald?"
      },
      {
        image: "", charName: "Donald Duck", description: "Oh boy, oh boy, oh boy"
      },
      {
        image: "", charName: "Pluto the Dog", description: "Arf arf!"
      }
    ]

    const Trends = [
      {topic: "#CMSC100", numOfPosts: "100K Posts"},
      {topic: "#ReactJS", numOfPosts: "25K Posts"},
      {topic: "Functional Components", numOfPosts: "10K Posts"},
      {topic: "#JavaScript", numOfPosts: "5K Posts"},
    ]

    return(
        <div >
            <h1 className="title">POST IT</h1>
            <div className='flex-container'>
              <div className='flex-item'>
                <div id="container">
                  <ReusableNav className="navigation" icon = {Navigations[0].icons} additional = {Navigations[0].additional} data = {Navigations[0].title}/>
                  <ReusableNav className="navigation" icon = {Navigations[1].icons} additional = {Navigations[1].additional} data = {Navigations[1].title}/>
                  <ReusableNav className="navigation" icon = {Navigations[2].icons} additional = {Navigations[2].additional} data = {Navigations[2].title}/>
                  <ReusableNav className="navigation" icon = {Navigations[3].icons} additional = {Navigations[3].additional} data = {Navigations[3].title}/>
                  <ReusableNav className="navigation" icon = {Navigations[4].icons} additional = {Navigations[4].additional} data = {Navigations[4].title}/>
                </div>
              </div>
              <div className='flex-item'>
                <div className="form">
                  <label htmlFor="courseCode"></label>
                  <input type="text" placeholder="What's happening?" id="courseCode"/> <br />
                  <br />
                  <button>POST!</button>
                </div>
              </div>
              <div className='flex-item'>
                <div className="form">
                  <label htmlFor="courseCode">Course Code: </label>
                  <input type="text" placeholder="Course Code" id="courseCode"/> <br />
                  <br />
                </div>
              </div>
            </div>
        </div>
    );
}


export default App;

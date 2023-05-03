import {ReusableNav, ReusablePost, ReusableTrends}  from "./logic";
import {Navigations,Posts,Trends} from "./data";
import './assets/styles/stylesheet.css';

function App(){
   
    return(
        <div>
            <div className="title">
              <h1 id="postID" >Post it!</h1>  
            </div>
            <div className='flex-container' id = "sections">
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
                  <label htmlFor="postSomething"></label>
                  <input type="text" placeholder="What's happening?" id="postSomething"/>
                  <br />
                  <button>POST!</button><br /><br />
                  <ReusablePost className = "posts" image = {Posts[0].image} charName = {Posts[0].charName} desc = {Posts[0].description} />
                  <ReusablePost className = "posts" image = {Posts[1].image} charName = {Posts[1].charName} desc = {Posts[1].description} />
                  <ReusablePost className = "posts" image = {Posts[2].image} charName = {Posts[2].charName} desc = {Posts[2].description} />
                  <ReusablePost className = "posts" image = {Posts[3].image} charName = {Posts[3].charName} desc = {Posts[3].description} />
                </div>
              </div>
              <div className='flex-item' >
                  <ReusableTrends className = "trends" topic = {Trends[0].topic} numOfPosts = {Trends[0].numOfPosts}/>
                  <ReusableTrends className = "trends" topic = {Trends[1].topic} numOfPosts = {Trends[1].numOfPosts}/>
                  <ReusableTrends className = "trends" topic = {Trends[2].topic} numOfPosts = {Trends[2].numOfPosts}/>
                  <ReusableTrends className = "trends" topic = {Trends[3].topic} numOfPosts = {Trends[3].numOfPosts}/>
              </div>
            </div>
        </div>
    );
}


export default App;

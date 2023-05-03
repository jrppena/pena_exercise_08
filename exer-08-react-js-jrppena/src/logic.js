import React from "react";


 /* since icons are classNames I have a different kind of classname used that's why I have an additional  */
function ReusableNav(props){
    let navigation = props.data;
    let icon  = props.icon;
    let additional = props.additional;

    if(additional== null){
        return(
            <div>
                <ul>
                    <li className="nav"> <i class={icon}></i> <sub>{navigation}</sub> </li>
                </ul>
            </div>
        )
    }else{
        return(
            <div>
                <ul>
                    <li className="nav"> <i class={icon}>{additional}</i> <sub>{navigation}</sub>  </li>
                </ul>
            </div>
        )
    }
}
// reusable components for post
function ReusablePost(props){
    let img = props.image;
    let name = props.charName;
    let desc = props.desc;
    let alt1 = "This is a picture of" + name;

    return(
        <div className="flex-container" id = "posts">
            <div className="flex-item">
                <img src = {img} alt = {alt1} className="post" ></img>
            </div>
            <div className="flex-item" id = "nameDesc">
                <div>
                    <h4 id>{name}</h4>
                </div>
                <div >
                    <p1>{desc}</p1>
                </div>
            </div>
        </div>
    )
}

// reusable components for trends
function ReusableTrends(props){
    let topic = props.topic;
    let numOfPosts = props.numOfPosts;
    return(
        <div className = "virals">
            <div>
                <h1>
                    {topic}
                </h1>
            </div>
            <div>
                <h4>
                    {numOfPosts} 
                </h4>
                   
            </div>
        </div>
    )
}

export { ReusableNav, ReusablePost,ReusableTrends};


import React from "react";


function ReusableNav(props){
    let navigation = props.data;
    let icon  = props.icon;
    let additional = props.additional;

    if(additional== null){
        return(
            <div>
                <ul>
                    <li className="nav"> <i class={icon}></i> - {navigation} </li>
                </ul>
            </div>
        )
    }else{
        return(
            <div>
                <ul>
                    <li className="nav"> <i class={icon}>{additional}</i> - {navigation} </li>
                </ul>
            </div>
        )
    }
}

function ReusablePost(props){

}

function ReusableTrends(props){

}

export default ReusableNav;

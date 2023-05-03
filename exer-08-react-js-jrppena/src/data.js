import React from "react";


function NavigationList(props){
    let navigation = props.data;

    return(
        <div>
            <div>
                <div> <i class="fa fa-home"></i> - {navigation[0].title} </div>
                <div> <i class="material-icons">explore</i>- {navigation[1].title} </div>
                <div> <i class="fa fa-envelope message-icon"></i> - {navigation[2].title} </div>
                <div> <i class="fa fa-bookmark-o"></i> - {navigation[3].title} </div>
                <div> <i class='fas fa-address-book'></i> - {navigation[4].title} </div>
            </div>
        </div>
    )
}


export default NavigationList;

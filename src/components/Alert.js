import React from 'react'
// import {Link} from 'react-router-dom';
function Alert(props) {
    const capitalize = (word)=>{
        const low = word.toLowerCase();
        return low.charAt(0).toUpperCase() + low.slice(1);
    }
    return (
        <div style={{height:'50px'}}>

       { props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>}
        </div>
    )
}

export default Alert


// props.alert && ------(any condition or data) ----> this means if first condition get failed
// then second and other condititons will not be executed.
/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */

/*we can use setInterval for the title if we have to pass info to users like install the app now, register to the contest
etc etc
setIntervals (() =>{
    document.title = 'install now'
} , 1500)
*/
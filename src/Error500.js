import React from 'react';
import './Error500.css';

const NoMatch = ({history}) =>{
    return(
        <div style={{marginLeft: '10px'}}>
            <h2>500Page</h2>
            <p>Redirecting to <span style={{color: 'dodgerblue', cursor: 'pointer'}} onClick={{} => history.push('/')}>Gistory</span></p>
        </div>
    )
}

/*
function Error500() {
    return(
        <div class="mainbox">
            <div class="err">5</div>
            <i class="far fa-question-circle fa-spin">0</i>
            <i class="far fa-question-circle fa-spin">0</i>

            
            <div className='msg'><p>The server is not responding, please contact your administrator.</p>
            <p>Let's go <a href = "https://mail.gistory.me/">gistory</a> and try from there.</p></div>
            
           
            

        </div>       
    );
}

export default Error500;
export default Nomatch
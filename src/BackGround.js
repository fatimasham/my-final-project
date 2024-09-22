
import React from 'react';
import body from './body.jpg';



const Background = () => {
    return <div>
        <div className="bg">
            <img className='body' src={body} alt="beauty" width="100%"/>
            <h1><span>THE NEW COLLECTION </span></h1>
            <h5>Your autumn chapter starts here.</h5>
        </div>
    </div>
}
export default Background;
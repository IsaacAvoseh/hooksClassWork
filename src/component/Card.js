import React from 'react'

export default function Card() {
    return (
        <div className='container' >
             
                <div className="card card2">
                   <div className='card1' >

                <div className='first1' >
                       
             <h4 > <span>  <input type="checkbox" /> </span> </h4>
                        <h4 className="moveN">Name</h4>
                </div>
                    <div className="move" ><h4>Email</h4></div>
                    <div className="move" ><h4>Location</h4></div>
                    <div className="move" ><h4>Phone</h4></div>
                    <div className="move" > <span><i className="far fa-trash-alt"></i></span></div>
                </div>
                </div>
            
        </div>
    )
}

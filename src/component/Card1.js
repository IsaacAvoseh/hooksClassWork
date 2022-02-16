import React from 'react'

export default function Card1(props) {
    const setUser = props.setUser


    const showModal = (user) => {
        console.log('user', user)
        // document.getElementById('myModal').style.display = "block";
        setUser({
            name: props.name,
            email: props.email,
            occupation: props.occupation,
            phone: props.phone,
            location: props.location,
            id: props.id
            // image: props.image
        });
    }

    return (
        <div className='container' >
            <div className="space" >

            <div className="card card2">
                <div className='card1' >

                    <div className='first1' >

                        <p> <span>  <input type="checkbox" /> </span> </p>
                        <div className="profile">
                        <img src={ props.image } alt="" />
                        <div className="name" >
                            <p>{ props.name }</p>
                            <p>{ props.occupation }</p>
                        </div>
                        </div>
                    </div>
                    <div className="moved" ><p>{ props.email }</p></div>
                    <div className="moved1" ><p>{ props.location }</p></div>
                    <div className="moved2" ><p>{ props.phone }</p></div>
                    <div className="move" >
                            <span> <i onClick={showModal} type="button" className=" fas fa-pen" data-bs-toggle="modal" data-bs-target="#exampleModal">

                            </i></span>
                         <span><i onClick={
                                () => props.deleteUser(props.id)
                                
                         } className="fas fa-user-minus"></i></span>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

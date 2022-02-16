import React from 'react'
import { useEffect } from 'react/cjs/react.development'

export default function Modal(props) {
    //handle multiple input with name, email, occupation, ,phone, location, image
    const user = props.user
    console.log('IUIIUIUIBN',user)
    const setUser = props.setUser
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }
    


    const handleSubmit = (e) => {

        console.log('Saving user new data');
        
        e.preventDefault();
        setUser({
            name: '',
            email: '',
            occupation: '',
            phone: '',
            location: '',
            image: ''
        });

       //send image and data to the server with form data
        const formData = new FormData();
        const image = document.querySelector('#image').files[0];
        formData.append('image', image);
        formData.append('name', user.name);
        formData.append('email', user.email);
        formData.append('occupation', user.occupation);
        formData.append('phone', user.phone);
        formData.append('location', user.location);
        // props.addUser(formData);

console.log('formData',formData);
console.log('user',user);

        fetch('http://127.0.0.1:8000/api/members', {
            method: 'POST',
            headers: {
               
                 Accept : 'application/json',
            },
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                props.setUsers([...props.users, data]);
                console.table('Table View', data)
                console.log('response', data);
            }

            )
           
            .catch(err => console.log(err) 
             
            );

        props.closeModal()

    }

    

    //edit user information
    const handleEdit = (e) => {
        console.log('Editing user data');
        e.preventDefault();
        // props.addUser(user);
        setUser({
            name: '',
            email: '',
            occupation: '',
            phone: '',
            location: '',
            image: '',
            id: ''
        });

        //send image and data to the server with form data
        const formData = new FormData();
        const image = document.querySelector('#image').files[0];
        formData.append('image', image);
        formData.append('name', user.name);
        formData.append('email', user.email);
        formData.append('occupation', user.occupation);
        formData.append('phone', user.phone);
        formData.append('location', user.location);
        formData.append('id', user.id);
        // props.addUser(formData);

        console.table('formData', ...formData);
        console.log('user', user);

        fetch('http://127.0.0.1:8000/api/members/' + user.id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('response', data);
                console.log('Table View', data)
            }

            )

            .catch(err => console.log(err)

            );

        props.closeModal()

    }


 

   
    // const [user, setUser] = React.useState({
    //     name: '',
    //     email: '',
    //     occupation: '',
    //     phone: '',
    //     location: '',
    //     image: ''
    // });

// React.useEffect(() => {
//     if (props.users) {
//         setUser({
//             name: props.users.name,
//             email: props.users.email,
//             occupation: props.users.occupation,
//             phone: props.users.phone,
//             location: props.users.location,
//             image: props.users.image
//         });
//     }
// }, []);
//     console.log(user.name)
   



    return (
        <div>
        
        

           <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form encType='multipart/form-data'>

                        <div className="modal-header">
                            {/* <h5 className="modal-title" id="exampleModalLabel">Modal title</h5> */}
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                        <div className="flexModal" >
                               <div className="firstItem" >
                                    <input name='name' type="text" onChange={ handleChange } value={user.name} placeholder='Name' />
                                    <input name='email' type="text" placeholder='Email' onChange={handleChange} value={user.email} />
                               </div>
                                <div className="secondItem" >
                                    <input name='occupation' type="text" placeholder='Occupation' onChange={handleChange} value={user.occupation} />
                                    <input name='phone' type="text" placeholder='Phone' onChange={ handleChange } value={user.phone} />
                                </div> 
                        </div>
                            <div className="lastItem" > <input name='location' type="text" placeholder='Location' onChange={ handleChange } value={user.location} />
                            </div>
                            <div className="lastItem" > 
                            <input name='image' type="file" id='image' placeholder='upload a file' onChange={ handleChange } value={user.image} />
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" >Discard</button>
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={
                             handleSubmit
                        } > {
                                user.id ? 'Update' : 'Save'

                        } </button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

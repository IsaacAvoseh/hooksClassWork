import React from 'react'
import { useContext } from 'react/cjs/react.development'
import Card from '../component/Card'
import Card1 from '../component/Card1'
import Card2 from '../component/Card2'
import Modal from '../component/Modal'
import { NotificationContext } from '../context/NotificationContext'


export default function Contact(props) {
    const [ display, setDislay] = React.useState('list')
    const baseUrl = 'http://127.0.0.1:8000/images/'

    //toastify notification context
   const { notification, setNotification } = useContext(NotificationContext)


  
    const closeModal = () => {
        

    }

    const handleDisplay = () =>{
        setDislay(!display)
    }

    //fetch data from the server
    const [users, setUsers] = React.useState([]);
    // const [message, setMessage] = React.useState('');

    const [user, setUser] = React.useState({
        name: '',
        email: '',
        occupation: '',
        phone: '',
        location: '',
        image: '',
        id: ''
    });

    
    const fetchData = () => {
        fetch('http://127.0.0.1:8000/api/members')
            .then(res => res.json())
            .then(data => {
                setUsers(data);
                setNotification('Welcome to the contact page');
            })
            .catch(err => setNotification('Something went wrong',err.message, console.log(err)));
    }

    React.useEffect(() => {
        // setNotification({
        //     message: 'Welcome to the contact page',
        //     type: 'success',
        //     display: true
        // })

        fetchData();
    }, [user]);

const addNew = () =>{
    console.log('Adding new detzils')
    setUser({
        name: '',
        email: '',
        occupation: '',
        phone: '',
        location: '',
        image: '',
        id: ''
    })
}


//delete data from the server
const deleteUser = (id) => {
    console.log('deleting user', id);
    fetch(`http://127.0.0.1:8000/api/delete/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
        },
    })
        .then(res => res.json())
        .then(data => {
            console.log('response', data);
            fetchData();
        })
        .catch(err => console.log(err));
}

    return (
        <div className="" >


           <div>
               <div className="container" >
                   <div className='topFlex' >
                        <div className='miniFlex' >
                            <h3>Contacts</h3> <p>App.Contacts</p>
                        </div>
                        <div>
                            <h3 onClick={ handleDisplay } >Dark icon</h3>
                        </div>
                   </div>

                   <div className='mainFlex' >
                        <form className="example" >
                            <input type="text" placeholder="Search contacts" name="search"/>
                                <button type="submit"><i class="fa fa-search"></i></button>
                        </form>
                        <div className='iconFlex' >
                            <div>
                                <span> <i onClick={addNew} type="button" className=" fas fa-user-plus" data-bs-toggle="modal" data-bs-target="#exampleModal"></i></span>
                            </div>
                            <div>
                                <span><i class="fas fa-list"></i></span>
                            </div>
                            <div>
                                <span><i class="fas fa-th-large"></i></span>
                            </div>
                        </div>
                   </div>
               </div>
              
            {/* {notification} */}

                {
                    display? <Card />: ''
                }
            {
                    display ? (
                        users.map(user => (
                            <Card1 key={user.id}
                                name={user.name}
                                id={user.id}
                                email={user.email}
                                occupation={user.occupation}
                                location={user.location}
                                phone={user.phone}
                                image={baseUrl + user.image}
                                setUser={setUser}
                                deleteUser={deleteUser}
                            />
                        ))
                    )
            
                        : (
                            <div className=" col-lg-12 flex" >



                                {
                                    users.map(user => (
                                        <Card2 key={user.id}
                                            id={user.id}
                                            name={user.name}
                                            email={user.email}
                                            occupation={user.occupation}
                                            location={user.location}
                                            phone={user.phone}
                                            image={baseUrl + user.image}
                                            setUser={setUser}
                                            deleteUser={deleteUser}
                                        />
                                    ))
                                }

                            </div>
                        )
                }
               
           </div>
          
           

           <div id={'myModal'} style={{
            //    display: 'none'
           }} >
               <Modal
                    closeModal={closeModal}
                    user={user}
                    setUser={setUser}
                    setUsers={setUsers}
                    users={users}
                   
        
               />
           </div>
        </div>
    )
}

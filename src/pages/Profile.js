import { nanoid } from 'nanoid';
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../component/Header';

export default function Profile() {
    const { state } = useLocation()
    const navigate = useNavigate()
    const [ user, setUser ] = React.useState({
        id: nanoid(),
        name: '',
        dob: '',
        profession: '',
        about: '',
        platform:[
            {
                id: nanoid(),
                platformTitle: '',
                description: '',
            }
        ],
        country: '',
        address: '',
        location: '',
        phone: '',
        email: '',
        website: '',
        linkedin: '',
        facebook: '',
        twitter: '',
        github: '',
        education: [
            {
                id: nanoid(),
                collegeName: '',
                start: '',
                end: '',
                collegeDescription: '',
            }
        ],
       work: [
            {
                id: nanoid(),
               companyName: '',
               jobTitle: '',
               jobLocation: '',
               jobStart: '',
               jobEnd: '',
               jobDescription: '',
            }
        ],
    } );    

    console.log('statars', state)


    const handleChange = (e, index) => {
        if(e.target.name === 'platformTitle' || e.target.name === 'description'){
            const newPlatform = [...user.platform];
            newPlatform[index][e.target.name] = e.target.value;
            setUser({
                ...user,
                platform: newPlatform
             });
            
        }else if(e.target.name === 'collegeName' || e.target.name === 'collegeDescription' || e.target.name === 'start' || e.target.name === 'end'){
            const newEducation = [...user.education];
            newEducation[index][e.target.name] = e.target.value;
            setUser({
                ...user,
                education: newEducation
             });
        }else if(e.target.name === 'companyName' || e.target.name === 'jobTitle' || e.target.name === 'jobLocation' || e.target.name === 'jobStart' || e.target.name === 'jobEnd' || e.target.name === 'jobDescription'){
            const newWork = [...user.work];
            newWork[index][e.target.name] = e.target.value;
            setUser({
                ...user,
                work: newWork
             });
        }else{
            setUser({
                ...user,
                [e.target.name]: e.target.value
            });
        }

    }
 
    
     


     const handleSubmit = (e, used) => {
        // e.preventDefault();
        console.log( 'user info' ,user);
         localStorage.setItem('user', JSON.stringify(user));

         navigate('/profile', {
             state: user,
         });
    }

    const handleAddPlatform = () => {
        setUser({
            ...user, 
            platform: [...user.platform, {
                id: nanoid(),
                platformTitle: '',
                description: '',
            }]
        });
    }

    const handleAddEducation = () => {
        setUser({
          ...user,
            education: [...user.education, {
                id: nanoid(),
                collegeName: '',
                start: '',
                end: '',
                collegeDescription: '',
            }]

            
        });
    }

    const handleAddWork = () => {
        setUser({
            ...user,
            work: [...user.work, { 
                id: nanoid(),
                companyName: '',
                jobTitle: '',
                jobLocation: '',
                jobStart: '',
                jobEnd: '',
                jobDescription: '',
            }]
        });
    }


    const Update = () =>{
        setUser( {...state||user})
    }

    useEffect(() => {
       Update()
    }, []);

  return (
      <>
<div>
       <Header />

</div>

        <div id="content" className="main-content">
            <div class="layout-px-spacing">
                
                <div class="page-header">
                    <nav class="breadcrumb-one" aria-label="breadcrumb">
                        <div class="title">
                            <h3>Account Settings</h3>
                        </div>
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="javascript:void(0);">More</a></li>
                            <li class="breadcrumb-item"><a href="javascript:void(0);">Pages</a></li>
                            <li class="breadcrumb-item active"  aria-current="page"><a href="javascript:void(0);">Account Settings</a></li>
                        </ol>
                    </nav>

                    <div class="toggle-switch">
                        <label class="switch s-icons s-outline  s-outline-secondary">
                            <input type="checkbox" checked="" class="theme-shifter"/>
                            <span class="slider round">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>

                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                            </span>
                        </label>
                    </div>

                </div>
                    

        <div className="account-settings-container layout-top-spacing">
            <div className="account-content">
                <div className="scrollspy-example" data-spy="scroll" data-target="#account-settings-scroll" data-offset={-100}>
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 layout-spacing">
                            <div id="general-info" className="section general-info">
                                <div className="info">
                                    <h6 className>General Information</h6>
                                    <div className="row">
                                        <div className="col-lg-11 mx-auto">
                                            <div className="row">
                                                <div className="col-xl-2 col-lg-12 col-md-4">
                                                    <div className="upload mt-4 pr-md-4">
                                                        <input type="file" id="input-file-max-fs" className="dropify" data-default-file="assets/img/user-profile.jpeg" data-max-file-size="2M" />
                                                        <p className="mt-2"><i className="flaticon-cloud-upload mr-1" /> Upload Picture</p>
                                                    </div>
                                                </div>
                                                <div className="col-xl-10 col-lg-12 col-md-8 mt-md-0 mt-4">
                                                    <div className="form">
                                                        <div className="row">
                                                            <div className="col-sm-6">
                                                                <div className="form-group">
                                                                    <label htmlFor="fullName">Full Name</label>
                                                                    <input type="text" name='name' onChange={handleChange} value={ user.name } className="form-control mb-4" id="fullName" placeholder="Full Name" />
                                                                </div>
                                                            </div>
                                                            <div className="col-sm-6">
                                                                <label className="dob-input">Date of Birth</label>
                                                                <input type="date" name='dob' onChange={handleChange} value={user.dob} />                                                             
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="profession">Profession</label>
                                                          <input type="text" className="form-control mb-4" id="profession" placeholder="Designer" name='profession' onChange={handleChange} value={user.profession} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 layout-spacing">
                            <div id="about" className="section about">
                                <div className="info">
                                    <h5 className>About</h5>
                                    <div className="row">
                                        <div className="col-md-11 mx-auto">
                                            <div className="form-group">
                                                <label htmlFor="aboutBio">Bio</label>
                                              <textarea className="form-control" id="aboutBio" placeholder="Tell something interesting about yourself" rows={10} name='about' onChange={handleChange} value={user.about} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 layout-spacing">
                            <div id="work-platforms" className="section work-platforms">
                                <div className="info">
                                    <h5 className>Work Platforms</h5>
                                    <div className="row">
                                        <div className="col-md-12 text-right mb-5">
                                            <button id="add-work-platforms" type='button' className="btn btn-secondary" onClick={ handleAddPlatform  } >Add</button>
                                        </div>
                                        {
                                            user.platform.map((platform, index) => {
                                                return (  
                                                    <div className="col-md-6" key={index}>
                                                        <div className="form-group">
                                                            <label htmlFor="platformTitle">Platform Title</label>
                                                            <input type="text" className="form-control mb-4" id="platformTitle" placeholder="Platform Title" name='platformTitle' onChange={(e)=>handleChange(e,index)} value={platform.platformTitle} />
                                                        </div>
                                                        <div className="form-group">
                                                            <label htmlFor="platformDescription">Platform Description</label>
                                                            <textarea className="form-control" id="platformDescription" placeholder="Platform Description" rows={3} name='description' onChange={(e)=>handleChange(e, index)} value={platform.description} />
                                                        </div>
                                                        <hr />

                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 layout-spacing">
                            <form id="contact" className="section contact">
                                <div className="info">
                                    <h5 className>Contact</h5>
                                    <div className="row">
                                        <div className="col-md-11 mx-auto">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="country">Country</label>
                                                        <select className="form-control mb-4" id="country" name='country' onChange={handleChange} value={user.country}>
                                                            <option>Select Country</option>
                                                            <option>United States</option>
                                                            <option>United Kingdom</option>
                                                            <option>India</option>
                                                            <option>Germany</option>
                                                            <option>Argentina</option>
                                                            </select>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="address">Address</label>
                                                      <input type="text" className="form-control mb-4" id="address" placeholder="Address" name='address' onChange={handleChange} value={user.address} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="location">Location</label>
                                                      <input type="text" className="form-control mb-4" id="location" placeholder="Location" name='location' onChange={handleChange} value={user.location} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="phone">Phone</label>
                                                      <input type="text" className="form-control mb-4" id="phone" placeholder="Write your phone number here"  name='phone' onChange={handleChange} value={user.phone} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="email">Email</label>
                                                      <input type="text" className="form-control mb-4" id="email" placeholder="Write your email here" name='email' onChange={handleChange} value={user.email} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <label htmlFor="website1">Website</label>
                                                      <input type="text" className="form-control mb-4" id="website1" placeholder="Write your website here" name='website' onChange={handleChange} value={user.website} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 layout-spacing">
                            <form id="social" className="section social">
                                <div className="info">
                                    <h5 className>Social</h5>
                                    <div className="row">
                                        <div className="col-md-11 mx-auto">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="input-group social-linkedin mb-3">
                                                        <div className="input-group-prepend mr-3">
                                                            <span className="input-group-text" id="linkedin"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x={2} y={9} width={4} height={12} /><circle cx={4} cy={4} r={2} /></svg></span>
                                                        </div>
                                                      <input type="text" className="form-control" placeholder="linkedin Username" aria-label="Username" aria-describedby="linkedin" name='linkedin' onChange={handleChange} value={user.linkedin} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="input-group social-tweet mb-3">
                                                        <div className="input-group-prepend mr-3">
                                                            <span className="input-group-text" id="tweet"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" /></svg></span>
                                                        </div>
                                                      <input type="text" className="form-control" placeholder="Twitter Username" aria-label="Username" aria-describedby="tweet" name='twitter' onChange={handleChange} value={user.twitter} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-11 mx-auto">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="input-group social-fb mb-3">
                                                        <div className="input-group-prepend mr-3">
                                                            <span className="input-group-text" id="fb"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></span>
                                                        </div>
                                                      <input type="text" className="form-control" placeholder="Facebook Username" aria-label="Username" aria-describedby="fb" name='facebook' onChange={handleChange} value={user.facebook} />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="input-group social-github mb-3">
                                                        <div className="input-group-prepend mr-3">
                                                            <span className="input-group-text" id="github"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg></span>
                                                        </div>
                                                      <input type="text" className="form-control" placeholder="Github Username" aria-label="Username" aria-describedby="github" name='github' onChange={handleChange} value={user.github} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                                            <div className="col-xl-12 col-lg-12 col-md-12 layout-spacing">
                            <div id="edu-experience" className="section edu-experience">
                                <div className="info">
                                    <h5 className>Education</h5>
                                    <div className="row">
                                        <div className="col-md-12 text-right mb-5">
                                            <button id="add-education" className="btn btn-secondary" onClick={
                                                handleAddEducation
                                            }  >Add</button>
                                        </div>
                                        <div className="col-md-11 mx-auto">
                                            <div className="edu-section">
                                                {
                                                    user.education.map((education, index) => {
                                                       return (
                                                           <div key={index} className="row">
                                                               <div className="col-md-12">
                                                                   <div className="form-group">
                                                                       <label htmlFor="degree1">Enter Your Collage Name</label>
                                                                       <input type="text" className="form-control mb-4" id="degree1" placeholder="Add your education here" name='collegeName' onChange={(e)=>handleChange(e,index)} value={education.collegeName} />
                                                                   </div>
                                                               </div>
                                                               <div className="col-md-12">
                                                                   <div className="row">
                                                                       <div className="col-md-6">
                                                                           <div className="form-group">
                                                                               <label>Starting From</label>
                                                                               <div className="row">
                                                                                   <div className="col-md-6">
                                                                                       <input type='date' name='start' onChange={(e) => handleChange(e, index)} value={education.start} className="form-control mb-4" id="s-from1" placeholder="From" />
                                                                                   </div>

                                                                               </div>
                                                                           </div>
                                                                       </div>
                                                                       <div className="col-md-6">
                                                                           <div className="form-group">
                                                                               <label>Starting From</label>
                                                                               <div className="row">
                                                                                   <div className="col-md-6">
                                                                                       <input type='date' name='end' onChange={(e) => handleChange(e, index)} value={education.end} className="form-control mb-4" id="s-from1" placeholder="From" />
                                                                                   </div>

                                                                               </div>
                                                                           </div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                               <div className="col-md-12">
                                                                   <textarea className="form-control" placeholder="Description" rows={10} name='collegeDescription' onChange={(e) => handleChange(e, index)} value={education.collegeDescription} />
                                                               </div>
                                                               <hr/>
                                                           </div>

                                                        
                                                        )                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-12 col-lg-12 col-md-12 layout-spacing">
                            <div id="work-experience" className="section work-experience">
                                <div className="info">
                                    <h5 className>Work Experience</h5>
                                    <div className="row">
                                        <div className="col-md-12 text-right mb-5">
                                            <button id="add-work-exp" className="btn btn-secondary" onClick={ handleAddWork } >Add</button>
                                        </div>
                                        {
                                            user.work.map((work, index) => {
                                                return (
                                                    <div key={index} className="col-md-11 mx-auto">
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <div className="form-group">
                                                                    <label htmlFor="degree2">Company Name</label>
                                                                    <input type="text" className="form-control mb-4" id="degree2" placeholder="Add your work here"  name='companyName' onChange={(e) => handleChange(e, index)} value={work.companyName} />
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <div className="row">
                                                                    <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <label htmlFor="degree3">Job Tilte</label>
                                                                            <input type="text" className="form-control mb-4" id="degree3" placeholder="Add your work here" name='jobTitle' onChange={(e) => handleChange(e, index)} value={work.jobTitle} />
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <label htmlFor="degree4">Location</label>
                                                                            <input type="text" className="form-control mb-4" id="degree4" placeholder="Add your work here" name='jobLocation' onChange={(e) => handleChange(e, index)} value={work.jobLocation} />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <div className="row">
                                                                    <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <label>Starting From</label>
                                                                            <div className="row">
                                                                                <div className="col-md-6">
                                                                                    <input type='date' className="form-control mb-4" id="wes-from1" name='jobStart' onChange={(e) => handleChange(e, index)} value={work.jobStart}

                                                                                    />
                                                                                </div>

                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-md-6">
                                                                        <div className="form-group">
                                                                            <label>Ending In</label>
                                                                            <div className="row">
                                                                                <div className="col-md-6 mb-4">
                                                                                    <input className="form-control" type='date' id="eiend-in1" name='jobEnd' onChange={(e) => handleChange(e, index)} value={work.jobEnd} />
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-12">
                                                                <textarea className="form-control" placeholder="Description" rows={10} name='jobDescription' onChange={(e) => handleChange(e, index)} value={work.jobDescription} />
                                                            </div>
                                                        </div>
                                                        <hr />

                                                    </div>
                                                
                                                )
                                            })
                                        }
                                 </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="account-settings-footer">
                <div className="as-footer-container">
                    <button id="multiple-reset" className="btn btn-primary">Reset All</button>
                    <div className="blockui-growl-message">
                        <i className="flaticon-double-check" />&nbsp; Settings Saved Successfully
                    </div>
                    <button id="multiple-messages" type="button"  onClick={()=>handleSubmit(user)} className="btn btn-success">Save Changes</button>
                </div>
            </div>
        </div>
</div>
</div>        
      </>
    );

}

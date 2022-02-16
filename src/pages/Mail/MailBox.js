import React, { useState } from 'react';
import { nanoid } from 'nanoid'


function MailBox() {
    

    // const[mail, setMail] = useState(false)
    const[watch, setWatch] = useState("table")
    const [show, setShow] = useState(false);
    const [mails, setMails] = useState(JSON.parse(localStorage.getItem('mails')) || []);
  
 
    const timeDay = new Date();
    console.log('mails',  mails);
    const [mail, setMail] = useState({
        id: nanoid(),
        toEmail: '',
        ccEmail: '',
        subject: '',
        body: '',
        time: timeDay.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }),
        date: timeDay.getDate() + '/' + (timeDay.getMonth() + 1) + '/' + timeDay.getFullYear(),
        read: false,
        checked: false,

    });

    const handleChange = (e) => {
        setMail({
            ...mail,
            [e.target.name]: e.target.value
        });
    }


    const handleNewMail = ()=>{
        // setMail(true)
    }

    const handleClose = ()=>{
        setWatch("table")
    }

const handleSave = () => {

  console.log('Testing new mail', mail)
  const payload = [ ...mails, mail ]
  setMails(payload)
  //save to local storage
  localStorage.setItem('mails', JSON.stringify(payload));
  setMail('')
}
 
const handleShow = () => {

  console.log('switching to show')
  
  setShow(!show);
};

return (


  <div id="content" className="main-content">
    <div className="layout-px-spacing">
      <div className="page-header">
        <nav className="breadcrumb-one" aria-label="breadcrumb">
          <div className="title">
            <h3>Mailbox</h3>
          </div>
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="javascript:void(0);">Apps</a></li>
            <li className="breadcrumb-item active" aria-current="page"><a href="javascript:void(0);">Mailbox</a></li>
          </ol>
        </nav>
        <div className="toggle-switch">
          <label className="switch s-icons s-outline  s-outline-secondary">
            <input type="checkbox" defaultChecked className="theme-shifter" />
            <span className="slider round">
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-sun"><circle cx={12} cy={12} r={5} /><line x1={12} y1={1} x2={12} y2={3} /><line x1={12} y1={21} x2={12} y2={23} /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1={1} y1={12} x2={3} y2={12} /><line x1={21} y1={12} x2={23} y2={12} /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></svg>
            </span>
          </label>
        </div>
      </div>
      <div className="row layout-top-spacing">
        <div className="col-xl-12 col-lg-12 col-md-12">
          <div className="row">
            <div className="col-xl-12  col-md-12">
              <div className="mail-box-container">
                <div className="mail-overlay" />
                <div className="tab-title">
                  <div className="row">
                    <div className="col-md-12 col-sm-12 col-12 text-center mail-btn-container">
                      <a id="btn-compose-mail" className="btn btn-block" href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus"><line x1={12} y1={5} x2={12} y2={19} /><line x1={5} y1={12} x2={19} y2={12} /></svg></a>
                    </div>
                    <div className="col-md-12 col-sm-12 col-12 mail-categories-container">
                      <div className="mail-sidebar-scroll ps ps--active-y">
                        <ul className="nav nav-pills d-block" id="pills-tab" role="tablist">
                          <li className="nav-item">
                            <a className="nav-link list-actions active" id="mailInbox"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-inbox"><polyline points="22 12 16 12 14 15 10 15 8 12 2 12" /><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" /></svg> <span className="nav-names">Inbox</span> <span className="mail-badge badge">4</span></a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link list-actions" id="important"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg> <span className="nav-names">Important</span></a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link list-actions" id="draft"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg> <span className="nav-names">Draft</span> <span className="mail-badge badge">2</span></a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link list-actions" id="sentmail"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-send"><line x1={22} y1={2} x2={11} y2={13} /><polygon points="22 2 15 22 11 13 2 9 22 2" /></svg> <span className="nav-names"> Sent Mail</span></a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link list-actions" id="spam"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-alert-circle"><circle cx={12} cy={12} r={10} /><line x1={12} y1={8} x2={12} y2={12} /><line x1={12} y1={16} x2={12} y2={16} /></svg> <span className="nav-names">Spam</span></a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link list-actions" id="trashed"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg> <span className="nav-names">Trash</span></a>
                          </li>
                        </ul>
                        <p className="group-section"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-tag"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" /><line x1={7} y1={7} x2={7} y2={7} /></svg> Groups</p>
                        <ul className="nav nav-pills d-block group-list" id="pills-tab2" role="tablist">
                          <li className="nav-item">
                            <a className="nav-link list-actions g-dot-primary" id="personal"><span>Personal</span></a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link list-actions g-dot-warning" id="work"><span>Work</span></a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link list-actions g-dot-success" id="social"><span>Social</span></a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link list-actions g-dot-danger" id="private"><span>Private</span></a>
                          </li>
                        </ul>
                        <div className="ps__rail-x" style={{ left: '0px', bottom: '0px' }}><div className="ps__thumb-x" tabIndex={0} style={{ left: '0px', width: '0px' }} /></div><div className="ps__rail-y" style={{ top: '0px', height: '412px', right: '-15px' }}><div className="ps__thumb-y" tabIndex={0} style={{ top: '0px', height: '263px' }} /></div></div>
                    </div>
                  </div>
                </div>
                <div id="mailbox-inbox" className="accordion mailbox-inbox">
                  <div className="search">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu mail-menu d-lg-none"><line x1={3} y1={12} x2={21} y2={12} /><line x1={3} y1={6} x2={21} y2={6} /><line x1={3} y1={18} x2={21} y2={18} /></svg>
                    <input type="text" className="form-control input-search" placeholder="Search Here..." />
                  </div>
                  <div className="action-center">
                    <div className>
                      <div className="n-chk">
                        <label className="new-control new-checkbox checkbox-primary">
                          <input type="checkbox" className="new-control-input" id="inboxAll" />
                          <span className="new-control-indicator" /><span>Check All</span>
                        </label>
                      </div>
                    </div>
                    <div className>
                      <a className="nav-link dropdown-toggle d-icon label-group" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" data-toggle="tooltip" data-placement="top" data-original-title="Label" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg></a>
                      <div className="dropdown-menu dropdown-menu-right d-icon-menu">
                        <a className="label-group-item label-personal dropdown-item position-relative g-dot-primary" href="javascript:void(0);"> Personal</a>
                        <a className="label-group-item label-work dropdown-item position-relative g-dot-warning" href="javascript:void(0);"> Work</a>
                        <a className="label-group-item label-social dropdown-item position-relative g-dot-success" href="javascript:void(0);"> Social</a>
                        <a className="label-group-item label-private dropdown-item position-relative g-dot-danger" href="javascript:void(0);"> Private</a>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" data-toggle="tooltip" data-placement="top" data-original-title="Important" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-star action-important"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" data-toggle="tooltip" data-placement="top" data-original-title="Spam" className="feather feather-alert-circle action-spam"><circle cx={12} cy={12} r={10} /><line x1={12} y1={8} x2={12} y2={12} /><line x1={12} y1={16} x2={12} y2={16} /></svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" data-toggle="tooltip" data-placement="top" data-original-title="Revive Mail" strokeLinejoin="round" className="feather feather-activity revive-mail"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" data-toggle="tooltip" data-placement="top" data-original-title="Delete Permanently" className="feather feather-trash permanent-delete"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
                      <div className="dropdown d-inline-block more-actions">
                        <a className="nav-link dropdown-toggle" id="more-actions-btns-dropdown" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-vertical"><circle cx={12} cy={12} r={1} /><circle cx={12} cy={5} r={1} /><circle cx={12} cy={19} r={1} /></svg>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="more-actions-btns-dropdown">
                          <a className="dropdown-item action-mark_as_read" href="javascript:void(0);">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg> Mark as Read
                          </a>
                          <a className="dropdown-item action-mark_as_unRead" href="javascript:void(0);">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-book"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" /><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" /></svg> Mark as Unread
                          </a>
                          <a className="dropdown-item action-delete" href="javascript:void(0);">
                            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" data-toggle="tooltip" data-placement="top" data-original-title="Delete" className="feather feather-trash-2"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /><line x1={10} y1={11} x2={10} y2={17} /><line x1={14} y1={11} x2={14} y2={17} /></svg> Trash
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="message-box">
                    <div className="message-box-scroll ps" id="ct">

                     
                      
                      
                      <div className="mail-item mailInbox" style={{ display: 'none' }}>
                        <div className="animated animatedFadeInUp fadeInUp" id="mailHeadingEighteen">
                          <div className="mb-0">
                            <div className="mail-item-heading collapsed" data-toggle="collapse" role="navigation" data-target="#mailCollapseEighteen" aria-expanded="false">
                              <div className="mail-item-inner">
                                <div className="d-flex">
                                  <div className="n-chk text-center">
                                    <label className="new-control new-checkbox checkbox-primary">
                                      <input type="checkbox" className="new-control-input inbox-chkbox" />
                                      <span className="new-control-indicator" />
                                    </label>
                                  </div>
                                  <div className="f-head">
                                    <img src="assets/img/profile-23.jpeg" className="user-profile" alt="avatar" />
                                  </div>
                                  <div className="f-body">
                                    <div className="meta-mail-time">
                                      <p className="user-email" data-mailto="liamSheldon@mail.com">Liam Sheldon</p>
                                    </div>
                                    <div className="meta-title-tag">
                                      <p className="mail-content-excerpt" data-maildescription="{&quot;ops&quot;:[{&quot;insert&quot;:&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.\n&quot;}]}"><span className="mail-title" data-mailtitle="New Offers">New Offers - </span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.</p>
                                      <div className="tags">
                                        <span className="g-dot-primary" />
                                        <span className="g-dot-warning" />
                                        <span className="g-dot-success" />
                                        <span className="g-dot-danger" />
                                      </div>
                                      <p className="meta-time align-self-center">11:45 PM</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="ps__rail-x" style={{ left: '0px', bottom: '0px', display: 'none' }}><div className="ps__thumb-x" tabIndex={0} style={{ left: '0px', width: '0px' }} /></div><div className="ps__rail-y" style={{ top: '0px', height: '393px', right: '0px', display: 'none' }}><div className="ps__thumb-y" tabIndex={0} style={{ top: '211px', height: '182px' }} /></div></div>
                  </div>
                  <div className="content-box" style={{ width: '0px', left: 'auto', right: '-46px' }}>
                    <div className="d-flex msg-close">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-left close-message"><line x1={19} y1={12} x2={5} y2={12} /><polyline points="12 19 5 12 12 5" /></svg>
                      <h2 className="mail-title" data-selectedmailtitle />
                    </div>
                    <div id="mailCollapseTwo" className="collapse ps" aria-labelledby="mailHeadingTwo" data-parent="#mailbox-inbox">
                      <div className="mail-content-container sentmail" data-mailfrom="info@mail.com" data-mailto="alan@mail.com" data-mailcc>
                        <div className="d-flex justify-content-between mb-3">
                          <div className="d-flex user-info">
                            <div className="f-body">
                              <div className="meta-mail-time">
                                <div className>
                                  <p className="user-email" data-mailto="alan@mail.com"><span>To,</span> alan@mail.com</p>
                                </div>
                                <p className="mail-content-meta-date current-recent-mail">01/27/2022 -</p>
                                <p className="meta-time align-self-center">8:45 AM</p>
                              </div>
                            </div>
                          </div>
                          <div className="action-btns">
                            <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" data-original-title="Reply">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-corner-up-left reply"><polyline points="9 14 4 9 9 4" /><path d="M20 20v-7a4 4 0 0 0-4-4H4" /></svg>
                            </a>
                            <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" data-original-title="Forward">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-corner-up-right forward"><polyline points="15 14 20 9 15 4" /><path d="M4 20v-7a4 4 0 0 1 4-4h12" /></svg>
                            </a>
                          </div>
                        </div>
                        <p className="mail-content" data-mailtitle="Mozilla Update" data-maildescription="{&quot;ops&quot;:[{&quot;insert&quot;:&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.\n&quot;}]}"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
                        <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                        <p>Best Regards,</p>
                        <p>Shaun Park</p>
                        <div className="attachments">
                          <h6 className="attachments-section-title">Attachments</h6>
                          <div className="attachment file-pdf">
                            <div className="media">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1={16} y1={13} x2={8} y2={13} /><line x1={16} y1={17} x2={8} y2={17} /><polyline points="10 9 9 9 8 9" /></svg>
                              <div className="media-body">
                                <p className="file-name">Confirm File</p>
                                <p className="file-size">450kb</p>
                              </div>
                            </div>
                          </div>
                          <div className="attachment file-folder">
                            <div className="media">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-folder"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" /></svg>
                              <div className="media-body">
                                <p className="file-name">Important Docs</p>
                                <p className="file-size">2.1MB</p>
                              </div>
                            </div>
                          </div>
                          <div className="attachment file-img">
                            <div className="media">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-image"><rect x={3} y={3} width={18} height={18} rx={2} ry={2} /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
                              <div className="media-body">
                                <p className="file-name">Photo.png</p>
                                <p className="file-size">50kb</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="ps__rail-x" style={{ left: '0px', bottom: '0px' }}><div className="ps__thumb-x" tabIndex={0} style={{ left: '0px', width: '0px' }} /></div><div className="ps__rail-y" style={{ top: '0px', right: '0px' }}><div className="ps__thumb-y" tabIndex={0} style={{ top: '0px', height: '0px' }} /></div></div>
                    <div id="mailCollapseThree" className="collapse ps" aria-labelledby="mailHeadingThree" data-parent="#mailbox-inbox">
                      <div className="mail-content-container mailInbox" data-mailfrom="info@mail.com" data-mailto="linda@mail.com" data-mailcc>
                        <div className="d-flex justify-content-between">
                          <div className="d-flex user-info">
                            <div className="f-head">
                              <img src="assets/img/profile-16.jpeg" className="user-profile" alt="avatar" />
                            </div>
                            <div className="f-body">
                              <div className="meta-title-tag">
                                <h4 className="mail-usr-name" data-mailtitle="Promotion Page">Laurie Fox</h4>
                              </div>
                              <div className="meta-mail-time">
                                <p className="user-email" data-mailto="laurieFox@mail.com">laurieFox@mail.com</p>
                                <p className="mail-content-meta-date current-recent-mail">01/27/2022 -</p>
                                <p className="meta-time align-self-center">2:00 PM</p>
                              </div>
                            </div>
                          </div>
                          <div className="action-btns">
                            <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" data-original-title="Reply">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-corner-up-left reply"><polyline points="9 14 4 9 9 4" /><path d="M20 20v-7a4 4 0 0 0-4-4H4" /></svg>
                            </a>
                            <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" data-original-title="Forward">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-corner-up-right forward"><polyline points="15 14 20 9 15 4" /><path d="M4 20v-7a4 4 0 0 1 4-4h12" /></svg>
                            </a>
                          </div>
                        </div>
                        <p className="mail-content" data-mailtitle="Promotion Page" data-maildescription="{&quot;ops&quot;:[{&quot;insert&quot;:&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.\n&quot;}]}"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
                        <div className="gallery text-center">
                          <img alt="image-gallery" src="assets/img/scroll-6.jpeg" className="img-fluid mb-4 mt-4" style={{ width: '250px', height: '180px' }} />
                          <img alt="image-gallery" src="assets/img/scroll-7.jpeg" className="img-fluid mb-4 mt-4" style={{ width: '250px', height: '180px' }} />
                          <img alt="image-gallery" src="assets/img/scroll-8.jpeg" className="img-fluid mb-4 mt-4" style={{ width: '250px', height: '180px' }} />
                        </div>
                        <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                        <p>Best Regards,</p>
                        <p>Laurie Fox</p>
                        <div className="attachments">
                          <h6 className="attachments-section-title">Attachments</h6>
                          <div className="attachment file-pdf">
                            <div className="media">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1={16} y1={13} x2={8} y2={13} /><line x1={16} y1={17} x2={8} y2={17} /><polyline points="10 9 9 9 8 9" /></svg>
                              <div className="media-body">
                                <p className="file-name">Confirm File.txt</p>
                                <p className="file-size">450kb</p>
                              </div>
                            </div>
                          </div>
                          <div className="attachment file-folder">
                            <div className="media">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1={16} y1={13} x2={8} y2={13} /><line x1={16} y1={17} x2={8} y2={17} /><polyline points="10 9 9 9 8 9" /></svg>
                              <div className="media-body">
                                <p className="file-name">Important Docs.xml</p>
                                <p className="file-size">2.1MB</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="ps__rail-x" style={{ left: '0px', bottom: '0px' }}><div className="ps__thumb-x" tabIndex={0} style={{ left: '0px', width: '0px' }} /></div><div className="ps__rail-y" style={{ top: '0px', right: '0px' }}><div className="ps__thumb-y" tabIndex={0} style={{ top: '0px', height: '0px' }} /></div></div>
                    <div id="mailCollapseFive" className="collapse ps" aria-labelledby="mailHeadingFive" data-parent="#mailbox-inbox">
                      <div className="mail-content-container mailInbox" data-mailfrom="info@mail.com" data-mailto="kingAndy@mail.com" data-mailcc>
                        <div className="d-flex justify-content-between mb-5">
                          <div className="d-flex user-info">
                            <div className="f-head">
                              <img src="assets/img/profile-19.jpeg" className="user-profile" alt="avatar" />
                            </div>
                            <div className="f-body">
                              <div className="meta-title-tag">
                                <h4 className="mail-usr-name" data-mailtitle="Hosting Payment Reminder">Andy King</h4>
                              </div>
                              <div className="meta-mail-time">
                                <p className="user-email" data-mailto="kingAndy@mail.com">kingAndy@mail.com</p>
                                <p className="mail-content-meta-date current-recent-mail">01/27/2022 -</p>
                                <p className="meta-time align-self-center">6:28 PM</p>
                              </div>
                            </div>
                          </div>
                          <div className="action-btns">
                            <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" data-original-title="Reply">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-corner-up-left reply"><polyline points="9 14 4 9 9 4" /><path d="M20 20v-7a4 4 0 0 0-4-4H4" /></svg>
                            </a>
                            <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" data-original-title="Forward">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-corner-up-right forward"><polyline points="15 14 20 9 15 4" /><path d="M4 20v-7a4 4 0 0 1 4-4h12" /></svg>
                            </a>
                          </div>
                        </div>
                        <p className="mail-content" data-mailtitle="Hosting Payment Reminder" data-maildescription="{&quot;ops&quot;:[{&quot;insert&quot;:&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.\n&quot;}]}"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
                        <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                        <p>Best Regards,</p>
                        <p>Andy King</p>
                      </div>
                      <div className="ps__rail-x" style={{ left: '0px', bottom: '0px' }}><div className="ps__thumb-x" tabIndex={0} style={{ left: '0px', width: '0px' }} /></div><div className="ps__rail-y" style={{ top: '0px', right: '0px' }}><div className="ps__thumb-y" tabIndex={0} style={{ top: '0px', height: '0px' }} /></div></div>
                    <div id="mailCollapseEleven" className="collapse ps" aria-labelledby="mailHeadingEleven" data-parent="#mailbox-inbox">
                      <div className="mail-content-container mailInbox" data-mailfrom="info@mail.com" data-mailto="kirsten.beck@mail.com" data-mailcc>
                        <div className="d-flex justify-content-between mb-5">
                          <div className="d-flex user-info">
                            <div className="f-head">
                              <div className="avatar avatar-sm">
                                <span className="avatar-title rounded-circle">KB</span>
                              </div>
                            </div>
                            <div className="f-body">
                              <div className="meta-title-tag">
                                <h4 className="mail-usr-name" data-mailtitle="Verification Link">Kirsten Beck</h4>
                              </div>
                              <div className="meta-mail-time">
                                <p className="user-email" data-mailto="kirsten.beck@mail.com">kirsten.beck@mail.com</p>
                                <p className="mail-content-meta-date">12/08/2020 -</p>
                                <p className="meta-time align-self-center">11:09 AM</p>
                              </div>
                            </div>
                          </div>
                          <div className="action-btns">
                            <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" data-original-title="Reply">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-corner-up-left reply"><polyline points="9 14 4 9 9 4" /><path d="M20 20v-7a4 4 0 0 0-4-4H4" /></svg>
                            </a>
                            <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" data-original-title="Forward">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-corner-up-right forward"><polyline points="15 14 20 9 15 4" /><path d="M4 20v-7a4 4 0 0 1 4-4h12" /></svg>
                            </a>
                          </div>
                        </div>
                        <p className="mail-content" data-mailtitle="Verification Link" data-maildescription="{&quot;ops&quot;:[{&quot;insert&quot;:&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.\n&quot;}]}"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
                        <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                        <p>Best Regards,</p>
                        <p>Kirsten Beck</p>
                      </div>
                      <div className="ps__rail-x" style={{ left: '0px', bottom: '0px' }}><div className="ps__thumb-x" tabIndex={0} style={{ left: '0px', width: '0px' }} /></div><div className="ps__rail-y" style={{ top: '0px', right: '0px' }}><div className="ps__thumb-y" tabIndex={0} style={{ top: '0px', height: '0px' }} /></div></div>
                    <div id="mailCollapseTwelve" className="collapse ps" aria-labelledby="mailHeadingTwelve" data-parent="#mailbox-inbox">
                      <div className="mail-content-container mailInbox" data-mailfrom="info@mail.com" data-mailto="christian@mail.com" data-mailcc>
                        <div className="d-flex justify-content-between mb-5">
                          <div className="d-flex user-info">
                            <div className="f-head">
                              <img src="assets/img/profile-34.jpeg" className="user-profile" alt="avatar" />
                            </div>
                            <div className="f-body">
                              <div className="meta-title-tag">
                                <h4 className="mail-usr-name" data-mailtitle="New Updates">Christian</h4>
                              </div>
                              <div className="meta-mail-time">
                                <p className="user-email" data-mailto="christian@mail.com">christian@mail.com</p>
                                <p className="mail-content-meta-date">11/30/2020 -</p>
                                <p className="meta-time align-self-center">2:00 PM</p>
                              </div>
                            </div>
                          </div>
                          <div className="action-btns">
                            <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" data-original-title="Reply">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-corner-up-left reply"><polyline points="9 14 4 9 9 4" /><path d="M20 20v-7a4 4 0 0 0-4-4H4" /></svg>
                            </a>
                            <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" data-original-title="Forward">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-corner-up-right forward"><polyline points="15 14 20 9 15 4" /><path d="M4 20v-7a4 4 0 0 1 4-4h12" /></svg>
                            </a>
                          </div>
                        </div>
                        <p className="mail-content" data-mailtitle="New Updates" data-maildescription="{&quot;ops&quot;:[{&quot;insert&quot;:&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.\n&quot;}]}"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
                        <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                        <p>Best Regards,</p>
                        <p>Christian</p>
                        <div className="attachments">
                          <h6 className="attachments-section-title">Attachments</h6>
                          <div className="attachment file-pdf">
                            <div className="media">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-package"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21" /><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1={12} y1="22.08" x2={12} y2={12} /></svg>
                              <div className="media-body">
                                <p className="file-name">update.zip</p>
                                <p className="file-size">1.3MB</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="ps__rail-x" style={{ left: '0px', bottom: '0px' }}><div className="ps__thumb-x" tabIndex={0} style={{ left: '0px', width: '0px' }} /></div><div className="ps__rail-y" style={{ top: '0px', right: '0px' }}><div className="ps__thumb-y" tabIndex={0} style={{ top: '0px', height: '0px' }} /></div></div>
                    <div id="mailCollapseThirteen" className="collapse ps" aria-labelledby="mailHeadingThirteen" data-parent="#mailbox-inbox">
                      <div className="mail-content-container mailInbox" data-mailfrom="info@mail.com" data-mailto="roxanne@mail.com" data-mailcc>
                        <div className="d-flex justify-content-between mb-5">
                          <div className="d-flex user-info">
                            <div className="f-head">
                              <img src="assets/img/profile-31.jpeg" className="user-profile" alt="avatar" />
                            </div>
                            <div className="f-body">
                              <div className="meta-title-tag">
                                <h4 className="mail-usr-name" data-mailtitle="Schedular Alert">Roxanne</h4>
                              </div>
                              <div className="meta-mail-time">
                                <p className="user-email" data-mailto="roxanne@mail.com">roxanne@mail.com</p>
                                <p className="mail-content-meta-date">11/15/2020 -</p>
                                <p className="meta-time align-self-center">2:00 PM</p>
                              </div>
                            </div>
                          </div>
                          <div className="action-btns">
                            <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" data-original-title="Reply">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-corner-up-left reply"><polyline points="9 14 4 9 9 4" /><path d="M20 20v-7a4 4 0 0 0-4-4H4" /></svg>
                            </a>
                            <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" data-original-title="Forward">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-corner-up-right forward"><polyline points="15 14 20 9 15 4" /><path d="M4 20v-7a4 4 0 0 1 4-4h12" /></svg>
                            </a>
                          </div>
                        </div>
                        <p className="mail-content" data-mailtitle="Schedular Alert" data-maildescription="{&quot;ops&quot;:[{&quot;insert&quot;:&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.\n&quot;}]}"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
                        <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                        <p>Best Regards,</p>
                        <p>Roxanne</p>
                      </div>
                      <div className="ps__rail-x" style={{ left: '0px', bottom: '0px' }}><div className="ps__thumb-x" tabIndex={0} style={{ left: '0px', width: '0px' }} /></div><div className="ps__rail-y" style={{ top: '0px', right: '0px' }}><div className="ps__thumb-y" tabIndex={0} style={{ top: '0px', height: '0px' }} /></div></div>
                    <div id="mailCollapseFourteen" className="collapse ps" aria-labelledby="mailHeadingFourteen" data-parent="#mailbox-inbox">
                      <div className="mail-content-container mailInbox" data-mailfrom="info@mail.com" data-mailto="reevesErnest@mail.com" data-mailcc>
                        <div className="d-flex justify-content-between mb-5">
                          <div className="d-flex user-info">
                            <div className="f-head">
                              <div className="avatar avatar-sm">
                                <span className="avatar-title rounded-circle">E</span>
                              </div>
                            </div>
                            <div className="f-body">
                              <div className="meta-title-tag">
                                <h4 className="mail-usr-name" data-mailtitle="Youtube">Youtube</h4>
                              </div>
                              <div className="meta-mail-time">
                                <p className="user-email" data-mailto="reevesErnest@mail.com">reevesErnest@mail.com</p>
                                <p className="mail-content-meta-date">06/02/2020 -</p>
                                <p className="meta-time align-self-center">8:25 PM</p>
                              </div>
                            </div>
                          </div>
                          <div className="action-btns">
                            <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" data-original-title="Reply">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-corner-up-left reply"><polyline points="9 14 4 9 9 4" /><path d="M20 20v-7a4 4 0 0 0-4-4H4" /></svg>
                            </a>
                            <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" data-original-title="Forward">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-corner-up-right forward"><polyline points="15 14 20 9 15 4" /><path d="M4 20v-7a4 4 0 0 1 4-4h12" /></svg>
                            </a>
                          </div>
                        </div>
                        <p className="mail-content" data-mailtitle="Youtube" data-maildescription="{&quot;ops&quot;:[{&quot;insert&quot;:&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.\n&quot;}]}"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
                        <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                        <p>Best Regards,</p>
                        <p>Ernest Reeves</p>
                      </div>
                      <div className="ps__rail-x" style={{ left: '0px', bottom: '0px' }}><div className="ps__thumb-x" tabIndex={0} style={{ left: '0px', width: '0px' }} /></div><div className="ps__rail-y" style={{ top: '0px', right: '0px' }}><div className="ps__thumb-y" tabIndex={0} style={{ top: '0px', height: '0px' }} /></div></div>
                    <div id="mailCollapseFifteen" className="collapse ps" aria-labelledby="mailHeadingFifteen" data-parent="#mailbox-inbox">
                      <div className="mail-content-container mailInbox" data-mailfrom="info@mail.com" data-mailto="infocompany@mail.com" data-mailcc>
                        <div className="d-flex justify-content-between mb-5">
                          <div className="d-flex user-info">
                            <div className="f-head">
                              <img src="assets/img/profile-15.jpeg" className="user-profile" alt="avatar" />
                            </div>
                            <div className="f-body">
                              <div className="meta-title-tag">
                                <h4 className="mail-usr-name" data-mailtitle="50% Discount">Info Company</h4>
                              </div>
                              <div className="meta-mail-time">
                                <p className="user-email" data-mailto="infocompany@mail.com">infocompany@mail.com</p>
                                <p className="mail-content-meta-date">02/10/2020 -</p>
                                <p className="meta-time align-self-center">7:00 PM</p>
                              </div>
                            </div>
                          </div>
                          <div className="action-btns">
                            <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" data-original-title="Reply">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-corner-up-left reply"><polyline points="9 14 4 9 9 4" /><path d="M20 20v-7a4 4 0 0 0-4-4H4" /></svg>
                            </a>
                            <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" data-original-title="Forward">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-corner-up-right forward"><polyline points="15 14 20 9 15 4" /><path d="M4 20v-7a4 4 0 0 1 4-4h12" /></svg>
                            </a>
                          </div>
                        </div>
                        <p className="mail-content" data-mailtitle="50% Discount" data-maildescription="{&quot;ops&quot;:[{&quot;insert&quot;:&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.\n&quot;}]}"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
                        <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                        <p>Best Regards,</p>
                        <p>Info Company</p>
                      </div>
                      <div className="ps__rail-x" style={{ left: '0px', bottom: '0px' }}><div className="ps__thumb-x" tabIndex={0} style={{ left: '0px', width: '0px' }} /></div><div className="ps__rail-y" style={{ top: '0px', right: '0px' }}><div className="ps__thumb-y" tabIndex={0} style={{ top: '0px', height: '0px' }} /></div></div>
                    <div id="mailCollapseSixteen" className="collapse ps" aria-labelledby="mailHeadingSixteen" data-parent="#mailbox-inbox">
                      <div className="mail-content-container mailInbox" data-mailfrom="info@mail.com" data-mailto="npminc@mail.com" data-mailcc>
                        <div className="d-flex justify-content-between mb-5">
                          <div className="d-flex user-info">
                            <div className="f-head">
                              <div className="avatar avatar-sm">
                                <span className="avatar-title rounded-circle">NI</span>
                              </div>
                            </div>
                            <div className="f-body">
                              <div className="meta-title-tag">
                                <h4 className="mail-usr-name" data-mailtitle="npm Inc">npm Inc</h4>
                              </div>
                              <div className="meta-mail-time">
                                <p className="user-email" data-mailto="npminc@mail.com">npminc@mail.com</p>
                                <p className="mail-content-meta-date">12/15/2018 -</p>
                                <p className="meta-time align-self-center">8:37 AM</p>
                              </div>
                            </div>
                          </div>
                          <div className="action-btns">
                            <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" data-original-title="Reply">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-corner-up-left reply"><polyline points="9 14 4 9 9 4" /><path d="M20 20v-7a4 4 0 0 0-4-4H4" /></svg>
                            </a>
                            <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" data-original-title="Forward">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-corner-up-right forward"><polyline points="15 14 20 9 15 4" /><path d="M4 20v-7a4 4 0 0 1 4-4h12" /></svg>
                            </a>
                          </div>
                        </div>
                        <p className="mail-content" data-mailtitle="npm Inc" data-maildescription="{&quot;ops&quot;:[{&quot;insert&quot;:&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.\n&quot;}]}"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
                        <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                        <p>Best Regards,</p>
                        <p>Info Company</p>
                        <div className="attachments">
                          <h6 className="attachments-section-title">Attachments</h6>
                          <div className="attachment file-pdf">
                            <div className="media">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-package"><line x1="16.5" y1="9.4" x2="7.5" y2="4.21" /><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1={12} y1="22.08" x2={12} y2={12} /></svg>
                              <div className="media-body">
                                <p className="file-name">package.zip</p>
                                <p className="file-size">450kb</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="ps__rail-x" style={{ left: '0px', bottom: '0px' }}><div className="ps__thumb-x" tabIndex={0} style={{ left: '0px', width: '0px' }} /></div><div className="ps__rail-y" style={{ top: '0px', right: '0px' }}><div className="ps__thumb-y" tabIndex={0} style={{ top: '0px', height: '0px' }} /></div></div>
                    <div id="mailCollapseSeventeen" className="collapse ps" aria-labelledby="mailHeadingSeventeen" data-parent="#mailbox-inbox">
                      <div className="mail-content-container mailInbox" data-mailfrom="info@mail.com" data-mailto="infocompany@mail.com" data-mailcc>
                        <div className="d-flex justify-content-between mb-5">
                          <div className="d-flex user-info">
                            <div className="f-head">
                              <img src="assets/img/profile-18.jpeg" className="user-profile" alt="avatar" />
                            </div>
                            <div className="f-body">
                              <div className="meta-title-tag">
                                <h4 className="mail-usr-name" data-mailtitle="eBill">eBill</h4>
                              </div>
                              <div className="meta-mail-time">
                                <p className="user-email" data-mailto="infocompany@mail.com">infocompany@mail.com</p>
                                <p className="mail-content-meta-date">11/25/2018 -</p>
                                <p className="meta-time align-self-center">1:51 PM</p>
                              </div>
                            </div>
                          </div>
                          <div className="action-btns">
                            <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" data-original-title="Reply">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-corner-up-left reply"><polyline points="9 14 4 9 9 4" /><path d="M20 20v-7a4 4 0 0 0-4-4H4" /></svg>
                            </a>
                            <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" data-original-title="Forward">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-corner-up-right forward"><polyline points="15 14 20 9 15 4" /><path d="M4 20v-7a4 4 0 0 1 4-4h12" /></svg>
                            </a>
                          </div>
                        </div>
                        <p className="mail-content" data-mailtitle="eBill" data-maildescription="{&quot;ops&quot;:[{&quot;insert&quot;:&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.\n&quot;}]}"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
                        <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                        <p>Best Regards,</p>
                        <p>Info Company</p>
                      </div>
                      <div className="ps__rail-x" style={{ left: '0px', bottom: '0px' }}><div className="ps__thumb-x" tabIndex={0} style={{ left: '0px', width: '0px' }} /></div><div className="ps__rail-y" style={{ top: '0px', right: '0px' }}><div className="ps__thumb-y" tabIndex={0} style={{ top: '0px', height: '0px' }} /></div></div>
                    <div id="mailCollapseEighteen" className="collapse ps" aria-labelledby="mailHeadingEighteen" data-parent="#mailbox-inbox">
                      <div className="mail-content-container mailInbox" data-mailfrom="info@mail.com" data-mailto="infocompany@mail.com" data-mailcc>
                        <div className="d-flex justify-content-between mb-5">
                          <div className="d-flex user-info">
                            <div className="f-head">
                              <img src="assets/img/profile-28.jpeg" className="user-profile" alt="avatar" />
                            </div>
                            <div className="f-body">
                              <div className="meta-title-tag">
                                <h4 className="mail-usr-name" data-mailtitle>Info Company</h4>
                              </div>
                              <div className="meta-mail-time">
                                <p className="user-email" data-mailto="infocompany@mail.com">infocompany@mail.com</p>
                                <p className="mail-content-meta-date current-recent-mail">01/27/2022 -</p>
                                <p className="meta-time align-self-center">11:45 PM</p>
                              </div>
                            </div>
                          </div>
                          <div className="action-btns">
                            <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" data-original-title="Reply">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-corner-up-left reply"><polyline points="9 14 4 9 9 4" /><path d="M20 20v-7a4 4 0 0 0-4-4H4" /></svg>
                            </a>
                            <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" data-original-title="Forward">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-corner-up-right forward"><polyline points="15 14 20 9 15 4" /><path d="M4 20v-7a4 4 0 0 1 4-4h12" /></svg>
                            </a>
                          </div>
                        </div>
                        <p className="mail-content" data-mailtitle="New Offers" data-maildescription="{&quot;ops&quot;:[{&quot;insert&quot;:&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.\n&quot;}]}"> Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
                        <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                        <p>Best Regards,</p>
                        <p>Info Company</p>
                        <div className="attachments">
                          <h6 className="attachments-section-title">Attachments</h6>
                          <div className="attachment file-pdf">
                            <div className="media">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1={16} y1={13} x2={8} y2={13} /><line x1={16} y1={17} x2={8} y2={17} /><polyline points="10 9 9 9 8 9" /></svg>
                              <div className="media-body">
                                <p className="file-name">Confirm File</p>
                                <p className="file-size">450kb</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="ps__rail-x" style={{ left: '0px', bottom: '0px' }}><div className="ps__thumb-x" tabIndex={0} style={{ left: '0px', width: '0px' }} /></div><div className="ps__rail-y" style={{ top: '0px', right: '0px' }}><div className="ps__thumb-y" tabIndex={0} style={{ top: '0px', height: '0px' }} /></div></div>
                    <div id="mailCollapseSix" className="collapse ps" aria-labelledby="mailHeadingSix" data-parent="#mailbox-inbox">
                      <div className="mail-content-container sentmail" data-mailfrom="info@mail.com" data-mailto="justincross@mail.com" data-mailcc>
                        <div className="d-flex justify-content-between mb-3">
                          <div className="d-flex user-info">
                            <div className="f-body">
                              <div className="meta-mail-time">
                                <div className>
                                  <p className="user-email" data-mailto="justincross@mail.com"><span>To,</span> justincross@mail.com </p>
                                </div>
                                <p className="mail-content-meta-date">12/14/219 -</p>
                                <p className="meta-time align-self-center">3:10 PM</p>
                              </div>
                            </div>
                          </div>
                          <div className="action-btns">
                            <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" data-original-title="Reply">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-corner-up-left reply"><polyline points="9 14 4 9 9 4" /><path d="M20 20v-7a4 4 0 0 0-4-4H4" /></svg>
                            </a>
                            <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" data-original-title="Forward">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-corner-up-right forward"><polyline points="15 14 20 9 15 4" /><path d="M4 20v-7a4 4 0 0 1 4-4h12" /></svg>
                            </a>
                          </div>
                        </div>
                        <p className="mail-content" data-mailtitle="App Project Checklist" data-maildescription="{&quot;ops&quot;:[{&quot;insert&quot;:&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.\n&quot;}]}"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
                        <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                        <p>Best Regards,</p>
                        <p>Shaun Park</p>
                        <div className="attachments">
                          <h6 className="attachments-section-title">Attachments</h6>
                          <div className="attachment file-folder">
                            <div className="media">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-folder"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" /></svg>
                              <div className="media-body">
                                <p className="file-name">Important Docs</p>
                                <p className="file-size">2.1MB</p>
                              </div>
                            </div>
                          </div>
                          <div className="attachment file-img">
                            <div className="media">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-image"><rect x={3} y={3} width={18} height={18} rx={2} ry={2} /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
                              <div className="media-body">
                                <p className="file-name">Photo.png</p>
                                <p className="file-size">50kb</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="ps__rail-x" style={{ left: '0px', bottom: '0px' }}><div className="ps__thumb-x" tabIndex={0} style={{ left: '0px', width: '0px' }} /></div><div className="ps__rail-y" style={{ top: '0px', right: '0px' }}><div className="ps__thumb-y" tabIndex={0} style={{ top: '0px', height: '0px' }} /></div></div>
                    <div id="mailCollapseSeven" className="collapse ps" aria-labelledby="mailHeadingSeven" data-parent="#mailbox-inbox">
                      <div className="mail-content-container important" data-mailfrom="info@mail.com" data-mailto="niahillyer@mail.com" data-mailcc>
                        <div className="d-flex justify-content-between mb-5">
                          <div className="d-flex user-info">
                            <div className="f-head">
                              <img src="assets/img/profile-17.jpeg" className="user-profile" alt="avatar" />
                            </div>
                            <div className="f-body">
                              <div className="meta-title-tag">
                                <h4 className="mail-usr-name" data-mailtitle="Motion UI Kit">Nia Hillyer</h4>
                              </div>
                              <div className="meta-mail-time">
                                <p className="user-email" data-mailto="niahillyer@mail.com">niahillyer@mail.com</p>
                                <p className="mail-content-meta-date current-recent-mail">01/27/2022 -</p>
                                <p className="meta-time align-self-center">2:22 AM</p>
                              </div>
                            </div>
                          </div>
                          <div className="action-btns">
                            <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" data-original-title="Reply">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-corner-up-left reply"><polyline points="9 14 4 9 9 4" /><path d="M20 20v-7a4 4 0 0 0-4-4H4" /></svg>
                            </a>
                            <a href="javascript:void(0);" data-toggle="tooltip" data-placement="op" data-original-title="Forward">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-corner-up-right forward"><polyline points="15 14 20 9 15 4" /><path d="M4 20v-7a4 4 0 0 1 4-4h12" /></svg>
                            </a>
                          </div>
                        </div>
                        <p className="mail-content" data-mailtitle="Motion UI Kit" data-maildescription="{&quot;ops&quot;:[{&quot;insert&quot;:&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.\n&quot;}]}"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.</p>
                        <div className="gallery text-center">
                          <img alt="image-gallery" src="assets/img/scroll-6.jpeg" className="img-fluid mb-4 mt-4" style={{ width: '250px', height: '180px' }} />
                          <img alt="image-gallery" src="assets/img/scroll-7.jpeg" className="img-fluid mb-4 mt-4" style={{ width: '250px', height: '180px' }} />
                          <img alt="image-gallery" src="assets/img/scroll-8.jpeg" className="img-fluid mb-4 mt-4" style={{ width: '250px', height: '180px' }} />
                        </div>
                        <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                        <p>Best Regards,</p>
                        <p>Nia Hillyer</p>
                      </div>
                      <div className="ps__rail-x" style={{ left: '0px', bottom: '0px' }}><div className="ps__thumb-x" tabIndex={0} style={{ left: '0px', width: '0px' }} /></div><div className="ps__rail-y" style={{ top: '0px', right: '0px' }}><div className="ps__thumb-y" tabIndex={0} style={{ top: '0px', height: '0px' }} /></div></div>
                    <div id="mailCollapseEight" className="collapse ps" aria-labelledby="mailHeadingEight" data-parent="#mailbox-inbox">
                      <div className="mail-content-container important" data-mailfrom="info@mail.com" data-mailto="irishubbard@mail.com" data-mailcc>
                        <div className="d-flex justify-content-between mb-5">
                          <div className="d-flex user-info">
                            <div className="f-head">
                              <img src="assets/img/profile-23.jpeg" className="user-profile" alt="avatar" />
                            </div>
                            <div className="f-body">
                              <div className="meta-title-tag">
                                <h4 className="mail-usr-name" data-mailtitle="Green Illustration">Iris Hubbard</h4>
                              </div>
                              <div className="meta-mail-time">
                                <p className="user-email" data-mailto="irishubbard@mail.com">irishubbard@mail.com</p>
                                <p className="mail-content-meta-date current-recent-mail">01/27/2022 -</p>
                                <p className="meta-time align-self-center">1:40 PM</p>
                              </div>
                            </div>
                          </div>
                          <div className="action-btns">
                            <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" data-original-title="Reply">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-corner-up-left reply"><polyline points="9 14 4 9 9 4" /><path d="M20 20v-7a4 4 0 0 0-4-4H4" /></svg>
                            </a>
                            <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" data-original-title="Forward">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-corner-up-right forward"><polyline points="15 14 20 9 15 4" /><path d="M4 20v-7a4 4 0 0 1 4-4h12" /></svg>
                            </a>
                          </div>
                        </div>
                        <p className="mail-content" data-mailtitle="Green Illustration" data-maildescription="{&quot;ops&quot;:[{&quot;insert&quot;:&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.\n&quot;}]}"> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
                        <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                        <p>Best Regards,</p>
                        <p>Iris Hubbard</p>
                      </div>
                      <div className="ps__rail-x" style={{ left: '0px', bottom: '0px' }}><div className="ps__thumb-x" tabIndex={0} style={{ left: '0px', width: '0px' }} /></div><div className="ps__rail-y" style={{ top: '0px', right: '0px' }}><div className="ps__thumb-y" tabIndex={0} style={{ top: '0px', height: '0px' }} /></div></div>
                    <div id="mailCollapseNine" className="collapse ps" aria-labelledby="mailHeadingNine" data-parent="#mailbox-inbox">
                      <div className="mail-content-container spam" data-mailfrom="info@mail.com" data-mailto="alexGray@mail.com" data-mailcc>
                        <div className="d-flex justify-content-between mb-5">
                          <div className="d-flex user-info">
                            <div className="f-head">
                              <img src="assets/img/profile-18.jpeg" className="user-profile" alt="avatar" />
                            </div>
                            <div className="f-body">
                              <div className="meta-title-tag">
                                <h4 className="mail-usr-name" data-mailtitle="Weekly Newsletter">Alex Gray</h4>
                              </div>
                              <div className="meta-mail-time">
                                <p className="user-email" data-mailto="alexGray@mail.com">alexGray@mail.com</p>
                                <p className="mail-content-meta-date current-recent-mail">01/27/2022 -</p>
                                <p className="meta-time align-self-center">10:18 AM</p>
                              </div>
                            </div>
                          </div>
                          <div className="action-btns">
                            <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" data-original-title="Reply">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-corner-up-left reply"><polyline points="9 14 4 9 9 4" /><path d="M20 20v-7a4 4 0 0 0-4-4H4" /></svg>
                            </a>
                            <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" data-original-title="Forward">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-corner-up-right forward"><polyline points="15 14 20 9 15 4" /><path d="M4 20v-7a4 4 0 0 1 4-4h12" /></svg>
                            </a>
                          </div>
                        </div>
                        <p className="mail-content" data-mailtitle="Weekly Newsletter" data-maildescription="{&quot;ops&quot;:[{&quot;insert&quot;:&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.\n&quot;}]}"> Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. </p>
                        <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                        <p>Best Regards,</p>
                        <p>Alexander Gray</p>
                        <div className="attachments">
                          <h6 className="attachments-section-title">Attachments</h6>
                          <div className="attachment file-pdf">
                            <div className="media">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1={16} y1={13} x2={8} y2={13} /><line x1={16} y1={17} x2={8} y2={17} /><polyline points="10 9 9 9 8 9" /></svg>
                              <div className="media-body">
                                <p className="file-name">Confirm File</p>
                                <p className="file-size">450kb</p>
                              </div>
                            </div>
                          </div>
                          <div className="attachment file-folder">
                            <div className="media">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-folder"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" /></svg>
                              <div className="media-body">
                                <p className="file-name">Important Docs</p>
                                <p className="file-size">2.1MB</p>
                              </div>
                            </div>
                          </div>
                          <div className="attachment file-img">
                            <div className="media">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-image"><rect x={3} y={3} width={18} height={18} rx={2} ry={2} /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
                              <div className="media-body">
                                <p className="file-name">Photo.png</p>
                                <p className="file-size">50kb</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="ps__rail-x" style={{ left: '0px', bottom: '0px' }}><div className="ps__thumb-x" tabIndex={0} style={{ left: '0px', width: '0px' }} /></div><div className="ps__rail-y" style={{ top: '0px', right: '0px' }}><div className="ps__thumb-y" tabIndex={0} style={{ top: '0px', height: '0px' }} /></div></div>
                    <div id="mailCollapseTen" className="collapse ps" aria-labelledby="mailHeadingTen" data-parent="#mailbox-inbox">
                      <div className="mail-content-container trashed" data-mailfrom="info@mail.com" data-mailto="ryanMCkillop@mail.com" data-mailcc>
                        <div className="d-flex justify-content-between mb-5">
                          <div className="d-flex user-info">
                            <div className="f-head">
                              <img src="assets/img/profile-13.jpeg" className="user-profile" alt="avatar" />
                            </div>
                            <div className="f-body">
                              <div className="meta-title-tag">
                                <h4 className="mail-usr-name" data-mailtitle="Make it Simple">Ryan MC Killop</h4>
                              </div>
                              <div className="meta-mail-time">
                                <p className="user-email" data-mailto="ryanMCkillop@mail.com">ryanMCkillop@mail.com</p>
                                <p className="mail-content-meta-date current-recent-mail">01/27/2022 -</p>
                                <p className="meta-time align-self-center">11:45 PM</p>
                              </div>
                            </div>
                          </div>
                          <div className="action-btns">
                            <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" data-original-title="Reply">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-corner-up-left reply"><polyline points="9 14 4 9 9 4" /><path d="M20 20v-7a4 4 0 0 0-4-4H4" /></svg>
                            </a>
                            <a href="javascript:void(0);" data-toggle="tooltip" data-placement="top" data-original-title="Forward">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-corner-up-right forward"><polyline points="15 14 20 9 15 4" /><path d="M4 20v-7a4 4 0 0 1 4-4h12" /></svg>
                            </a>
                          </div>
                        </div>
                        <p className="mail-content" data-mailtitle="Make it Simple" data-maildescription="{&quot;ops&quot;:[{&quot;insert&quot;:&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi pulvinar feugiat consequat. Duis lacus nibh, sagittis id varius vel, aliquet non augue. Vivamus sem ante, ultrices at ex a, rhoncus ullamcorper tellus. Nunc iaculis eu ligula ac consequat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum mattis urna neque, eget posuere lorem tempus non. Suspendisse ac turpis dictum, convallis est ut, posuere sem. Etiam imperdiet aliquam risus, eu commodo urna vestibulum at. Suspendisse malesuada lorem eu sodales aliquam.\n&quot;}]}"> Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. </p>
                        <div className="gallery text-center">
                          <img alt="image-gallery" src="assets/img/scroll-6.jpeg" className="img-fluid mb-4 mt-4" style={{ width: '250px', height: '180px' }} />
                          <img alt="image-gallery" src="assets/img/scroll-7.jpeg" className="img-fluid mb-4 mt-4" style={{ width: '250px', height: '180px' }} />
                          <img alt="image-gallery" src="assets/img/scroll-8.jpeg" className="img-fluid mb-4 mt-4" style={{ width: '250px', height: '180px' }} />
                        </div>
                        <p>Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</p>
                        <p>Best Regards,</p>
                        <p>Ryan McKillop</p>
                      </div>
                      <div className="ps__rail-x" style={{ left: '0px', bottom: '0px' }}><div className="ps__thumb-x" tabIndex={0} style={{ left: '0px', width: '0px' }} /></div><div className="ps__rail-y" style={{ top: '0px', right: '0px' }}><div className="ps__thumb-y" tabIndex={0} style={{ top: '0px', height: '0px' }} /></div></div>
                  </div>
                </div>
              </div>
              {/* Modal */}
              <div className="modal fade" id="composeMailModal" tabIndex={-1} role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                  <div className="modal-content">
                    <div className="modal-body">
                      <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-x close" data-dismiss="modal"><line x1={18} y1={6} x2={6} y2={18} /><line x1={6} y1={6} x2={18} y2={18} /></svg>
                      <div className="compose-box">
                        <div className="compose-content">
                          <form>
                            <div className="row">
                              <div className="col-md-12">
                                <div className="d-flex mb-4 mail-form">
                                  <p>From:</p>
                                  <select className id="m-form">
                                    <option value="info@mail.com">Info &lt;info@mail.com&gt;</option>
                                    <option value="shaun@mail.com">Shaun Park &lt;shaun@mail.com&gt;</option>
                                  </select>
                                </div>
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-md-6">
                                <div className="d-flex mb-4 mail-to">
                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx={12} cy={7} r={4} /></svg>
                                  <div className>
                                    <input type="email" id="m-to" placeholder="To" className="form-control"  name='toEmail' value={mail.toEmail} onChange={handleChange} />
                                    <span className="validation-text" />
                                  </div>
                                </div>
                              </div>
                              <div className="col-md-6">
                                <div className="d-flex mb-4 mail-cc">
                                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-list"><line x1={8} y1={6} x2={21} y2={6} /><line x1={8} y1={12} x2={21} y2={12} /><line x1={8} y1={18} x2={21} y2={18} /><line x1={3} y1={6} x2={3} y2={6} /><line x1={3} y1={12} x2={3} y2={12} /><line x1={3} y1={18} x2={3} y2={18} /></svg>
                                  <div>
                                    <input type="text" id="m-cc" placeholder="Cc" className="form-control" name='ccEmail' value={mail.ccEmail} onChange={handleChange} />
                                    <span className="validation-text" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="d-flex mb-4 mail-subject">
                              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
                              <div className="w-100">
                                <input type="text" id="m-subject" placeholder="Subject" className="form-control" name='subject' value={mail.subject} onChange={handleChange} />
                                <span className="validation-text" />
                              </div>
                            </div>
                            <div className="d-flex">
                              <input type="file" className="form-control-file" id="mail_File_attachment" multiple="multiple" />
                            </div>

                      <textarea className='mt-6' cols="69" rows="10" name='body' value={mail.body} onChange={handleChange} > </textarea>
                              </form>
                        </div>
                      </div>
                    </div>
                    <div className="modal-footer">
                      <button id="btn-save" className="btn float-left" onClick={handleSave}> Save</button>
                      <button id="btn-reply-save" className="btn float-left"> Save Reply</button>
                      <button id="btn-fwd-save" className="btn float-left"> Save Fwd</button>
                      <button className="btn" data-dismiss="modal"> <i className="flaticon-delete-1" /> Discard</button>
                      <button id="btn-reply" className="btn"> Reply</button>
                      <button id="btn-fwd" className="btn"> Forward</button>
                      <button id="btn-send" className="btn"> Send</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-wrapper">
      <div className="footer-section f-section-1">
        <p className>Copyright © 2021 <a target="_blank" href="https://designreset.com">DesignReset</a>, All rights reserved.</p>
      </div>
      <div className="footer-section f-section-2">
        <p className>Coded with <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg></p>
      </div>
    </div>
  </div>




  )
}

export default MailBox;

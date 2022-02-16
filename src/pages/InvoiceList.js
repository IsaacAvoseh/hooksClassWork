import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../component/Header';
import Invoice from '../component/Invoice';

export default function InvoiceList() {
    const [invoices, setInvoices] = React.useState([JSON.parse(localStorage.getItem('invoices'))]);
    console.log(invoices);

  return (
      <div>
    <Header/>
          {/*  BEGIN MAIN CONTAINER  */}
          <div className="main-container" id="container">
              <div className="overlay" />
              <div className="search-overlay" />
              {/*  BEGIN CONTENT AREA  */}
              <div id="content" className="main-content">
                  <div className="layout-px-spacing">
                      <div className="page-header">
                          <nav className="breadcrumb-one" aria-label="breadcrumb">
                              <div className="title">
                                  <h3>List</h3>
                              </div>
                              <ol className="breadcrumb">
                                  <li className="breadcrumb-item"><a href="javascript:void(0);">Apps</a></li>
                                  <li className="breadcrumb-item"><a href="javascript:void(0);">Invoice</a></li>
                                  <li className="breadcrumb-item active" aria-current="page"><a href="javascript:void(0);">List</a></li>
                                 <Link to="/addinvoice"> <button type="button" className="btn btn-primary">Add</button></Link>
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
                      <div className="row" id="cancel-row">
                          <div className="col-xl-12 col-lg-12 col-sm-12 layout-spacing">
                              <div className="widget-content widget-content-area br-6">
                                  <table id="invoice-list" className="table table-hover" style={{ width: '100%' }}>
                                      <thead>
                                          <tr>
                                              <th className="checkbox-column"> Record no. </th>
                                              <th>Invoice Id</th>
                                              <th>Name</th>
                                              <th>Email</th>
                                              <th>Date</th>
                                              <th>Amount</th>
                                              <th>Status</th>
                                              <th>Actions</th>
                                          </tr>
                                      </thead>
                                      <tbody>
                                          {invoices.length > 1 ? (invoices.map((invoice, index) => (
                                              
                                          <tr>
                                              <td className="checkbox-column"> 1 </td>
                                              <td><a href="apps_invoice-preview.html"><span className="inv-number">{ invoice.number }</span></a></td>
                                              <td>
                                                  <div className="d-flex">
                                                      <div className="usr-img-frame mr-2 rounded-circle">
                                                          <img alt="avatar" className="img-fluid rounded-circle" src="assets/img/profile-28.jpeg" />
                                                      </div>
                                                      <p className="align-self-center mb-0 user-name"> { invoice.fromName } </p>
                                                  </div>
                                              </td>
                                              <td><span className="inv-email"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg> { invoice.fromEmail } </span></td>
                                              <td><span className="inv-date"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-calendar"><rect x={3} y={4} width={18} height={18} rx={2} ry={2} /><line x1={16} y1={2} x2={16} y2={6} /><line x1={8} y1={2} x2={8} y2={6} /><line x1={3} y1={10} x2={21} y2={10} /></svg> { invoice.items.date } </span></td>
                                              <td><span className="inv-amount">{ invoice.items.price }</span></td>
                                              <td><span className="badge badge-success inv-status">Paid</span></td>
                                              <td>
                                                  <div className="dropdown">
                                                      <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                                          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-more-horizontal"><circle cx={12} cy={12} r={1} /><circle cx={19} cy={12} r={1} /><circle cx={5} cy={12} r={1} /></svg>
                                                      </a>
                                                      <div className="dropdown-menu" aria-labelledby="dropdownMenuLink2">
                                                          <a className="dropdown-item action-edit" href="/editinvoice/"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-edit-3"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>Edit</a>
                                                          <a className="dropdown-item action-delete" href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="feather feather-trash"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>Delete</a>
                                                      </div>
                                                  </div>
                                              </td>
                                          </tr>
                                            ))) : 'No Invoices'}
                                      </tbody>
                                  </table>
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
              {/*  END CONTENT AREA  */}
          </div>
          {/* END MAIN CONTAINER */}

      </div>
  )
}

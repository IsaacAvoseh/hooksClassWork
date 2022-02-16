import React from 'react'

export default function InvoicePreview({data}) {

    console.log("preview", data)

    return (
        <div className="col-xl-9">
        <div className="invoice-container">
            <div className="invoice-inbox">
                <div id="ct" className>
                    <div className="invoice-00001">
                        <div className="content-section">
                            <div className="inv--head-section inv--detail-section">
                                <div className="row">
                                    <div className="col-sm-6 col-12 mr-auto">
                                        <div className="d-flex">
                                            <img className="company-logo" src="assets/img/cork-logo.png" alt="company" />
                                            <h3 className="in-heading align-self-center">{data.fromName ? data.fromName :"Cork Inc."}</h3>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 text-sm-right">
                                        <p className="inv-list-number"><span className="inv-title">Invoice : </span> <span className="inv-number">{data.invoiceNumber ? data.invoiceNumber : "#0001"}</span></p>
                                    </div>
                                    <div className="col-sm-6 align-self-center mt-3">
                                        <p className="inv-street-addr">{data.fromAddress ? data.invoiceNumber : "XYZ Delta Street"}</p>
                                        <p className="inv-email-address">info@company.com</p>
                                        <p className="inv-email-address">(120) 456 789</p>
                                    </div>
                                    <div className="col-sm-6 align-self-center mt-3 text-sm-right">
                                        <p className="inv-created-date"><span className="inv-title">Invoice Date : </span> <span className="inv-date">20 Aug 2020</span></p>
                                        <p className="inv-due-date"><span className="inv-title">Due Date : </span> <span className="inv-date">26 Aug 2020</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="inv--detail-section inv--customer-detail-section">
                                <div className="row">
                                    <div className="col-xl-8 col-lg-7 col-md-6 col-sm-4 align-self-center">
                                        <p className="inv-to">Invoice To</p>
                                    </div>
                                    <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8 align-self-center order-sm-0 order-1 inv--payment-info">
                                        <h6 className=" inv-title">Payment Info:</h6>
                                    </div>
                                    <div className="col-xl-8 col-lg-7 col-md-6 col-sm-4">
                                        <p className="inv-customer-name">Jesse Cory</p>
                                        <p className="inv-street-addr">405 Mulberry Rd. Mc Grady, NC, 28649</p>
                                        <p className="inv-email-address">redq@company.com</p>
                                        <p className="inv-email-address">(128) 666 070</p>
                                    </div>
                                    <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8 col-12 order-sm-0 order-1">
                                        <div className="inv--payment-info">
                                            <p><span className=" inv-subtitle">Bank Name:</span> <span>Bank of America</span></p>
                                            <p><span className=" inv-subtitle">Account Number: </span> <span>1234567890</span></p>
                                            <p><span className=" inv-subtitle">SWIFT code:</span> <span>VS70134</span></p>
                                            <p><span className=" inv-subtitle">Country: </span> <span>United States</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="inv--product-table-section">
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead className>
                                            <tr>
                                                <th scope="col">S.No</th>
                                                <th scope="col">Items</th>
                                                <th className="text-right" scope="col">Qty</th>
                                                <th className="text-right" scope="col">Price</th>
                                                <th className="text-right" scope="col">Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                data.items.map((item, index)=>(
                                                    <tr>
                                                        <td>{index+1}</td>
                                                        <td>{item.itemDescription ? item.itemDescription : "Calendar App Customization"}</td>
                                                        <td className="text-right">{item.itemQty}</td>
                                                        <td className="text-right">${item.itemRate}</td>
                                                        <td className="text-right">${item.itemQty * item.itemRate}</td>
                                                    </tr>
                                                ))

                                            }
                                            
                                            
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="inv--total-amounts">
                                <div className="row mt-4">
                                    <div className="col-sm-5 col-12 order-sm-0 order-1">
                                    </div>
                                    <div className="col-sm-7 col-12 order-sm-1 order-0">
                                        <div className="text-sm-right">
                                            <div className="row">
                                                <div className="col-sm-8 col-7">
                                                    <p className>Sub Total: </p>
                                                </div>
                                                <div className="col-sm-4 col-5">
                                                    <p className>$3155</p>
                                                </div>
                                                <div className="col-sm-8 col-7">
                                                    <p className>Tax Amount: </p>
                                                </div>
                                                <div className="col-sm-4 col-5">
                                                    <p className>$700</p>
                                                </div>
                                                <div className="col-sm-8 col-7">
                                                    <p className=" discount-rate">Discount : <span className="discount-percentage">5%</span> </p>
                                                </div>
                                                <div className="col-sm-4 col-5">
                                                    <p className>$10</p>
                                                </div>
                                                <div className="col-sm-8 col-7 grand-total-title">
                                                    <h4 className>Grand Total : </h4>
                                                </div>
                                                <div className="col-sm-4 col-5 grand-total-amount">
                                                    <h4 className>$3845</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="inv--note">
                                <div className="row mt-4">
                                    <div className="col-sm-12 col-12 order-sm-0 order-1">
                                        <p>Note: Thank you for doing Business with us.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}

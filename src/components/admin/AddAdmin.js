import React, { useState } from 'react'
import { } from '../../api/AdminApi'
import { addAdmin } from '../../api/AdminApi'

const AddAdmin = ({ hideDetails, AdminDetails }) => {

    const [mobileNo, setMobileNo] = useState('')
    const [email, setEmail] = useState()
    const [name, setName] = useState()
    const [companyName, setCompanyName] = useState()

    const handleFormSubmit = async (event) => {
        event.stopPropagation()
        event.preventDefault()
        if (event.target.checkValidity()) {
            const adminUser = await addAdmin({
                UserName: name,
                UserEmail: email,
                MobileNo: mobileNo,
                CompanyName: companyName,
            }
            )
        }
        AdminDetails()
        hideDetails()
    }


    return (
        <>
            <div className="container">
                <div className="Asset-opportunity">
                    <a href='#l' className="invest_a" onClick={hideDetails}>
                        <i className="fas fa-long-arrow-left asset_back-icon"></i>
                    </a>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='justify-content-center row'>
                    <div className='col-xl-8 col-lg-10 col-12'>
                        <div class="align-items-center row">
                            <div class="col mt-md-5">
                                <h1 class="header-title">Admin</h1>
                            </div>
                        </div>
                        <hr class="my-1" />
                        <div className='mt-md-5'>
                            <form onSubmit={handleFormSubmit}>
                                <div class="row">
                                    <div class="col-md-6 col-12">
                                        <div class="form-group"><label class="form-label">First name</label>
                                            <input type="text" class="form-control" value={name}
                                                onChange={(e) => setName(e.target.value)} /></div>
                                    </div>
                                    <div class="col-md-6 col-12">
                                        <div class="form-group"><label class="form-label">mobile No</label>
                                            <input type="number" class="form-control" value={mobileNo} onChange={(e) => setMobileNo(e.target.value)} /></div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label class="mb-1 form-label">Email address</label><small class="small text-muted form-text">This contact will be shown to others publicly, so choose it carefully.</small>
                                            <input type="email" class="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-12">
                                        <div class="form-group"><label class="form-label">Company Name</label>
                                            <input mask="_" placeholder="" value={companyName} type="text" onChange={(e) => setCompanyName(e.target.value)} class="form-control" /></div>
                                    </div>
                                    <div class="col-12 col-md-6 col-md-6 col-12">
                                        <div class="form-group"><label class="form-label">logo</label><input type="file" class="form-control flatpickr-input" value="" readonly="readonly" /></div>
                                    </div>
                                </div>
                                <button type="submit" class="btn btn-primary">Save changes</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddAdmin

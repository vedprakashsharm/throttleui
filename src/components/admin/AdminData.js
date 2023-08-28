import React from 'react'

const AdminData = ({ showDetails, Details }) => {

    console.log(Details)
    return (
        <div className="card">
            <div className="card-header" style={{ justifyContent: "space-between" }}>
                <h4 className="card-header-title">Trasaction</h4>
                <button type="button" class="btn btn-primary" on onClick={showDetails}>Add Company</button>
            </div>
            <div className="table-responsive">
                <table className="card-table table-nowrap table table-sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Mobile No</th>
                            <th>Email</th>
                            <th>Company Name</th>
                            <th>Logo</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="fs-base">
                        {Details.map((admin) => {
                            
                            return (
                                <tr>
                                    <td className="fs-base">
                                        <a href="/invoice">{admin.userName}</a>
                                    </td>
                                    <td className="fs-base">
                                        <time datetime="2020-04-24">{admin.mobileNo}</time>
                                    </td>
                                    <td className="fs-base">{admin.userEmail}</td>
                                    <td className="fs-base">
                                        <span className="fs-base">{admin.companyName}</span>
                                    </td>
                                    <td className="invest_td-data">

                                    </td>
                                    <td className="invest_td-data">

                                    </td>
                                </tr>)
                        }
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default AdminData

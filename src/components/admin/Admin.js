import React, { useState, useEffect } from 'react'
import { handleErrorResponse } from '../../helpers/misc'
import AddAdmin from './AddAdmin'
import AdminData from './AdminData'
import Loader from '../common/Loader'
import { getAdminDetails } from '../../api/AdminApi'
import '../../style/components/adminDashboard/investorSubmitted.scss'
import '../../style/components/adminDashboard/investmentDetails.scss'

const Admin = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [Details, setDetail] = useState([])

    const AdminDetails = () => {

        getAdminDetails().then(setDetail).catch(handleErrorResponse).finally(() =>
            setIsLoading(false))
    }
    useEffect(() => {
        AdminDetails()
    }, [])

    const [isDetails, setDetails] = useState(false)
    const showDetails = () => {
        setDetails(true)
    }

    const hideDetails = () => {
        setDetails(false)
    }

    return (
        <>
            {!isDetails ? (
                isLoading ? (<Loader />) : (<AdminData showDetails={showDetails} Details={Details} />)
            ) : (
                <AddAdmin hideDetails={hideDetails} AdminDetails={AdminDetails} />
            )}
        </>
    )

}

export default Admin



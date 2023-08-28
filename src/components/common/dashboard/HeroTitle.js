import React from 'react'
import { useNavigate } from 'react-router-dom'
import classNames from 'classnames'
import logo from '../../../images/logo.png'

const HeroTitle = ({ text, isLeftNavHiddenOnMobile }) => {
  const navigate = useNavigate()
  const goBack = (event) => {
    event.preventDefault()
    navigate(-1)
  }

  return (
    <div class={classNames('', { 'd-mobile-none': isLeftNavHiddenOnMobile })}>
      <div className="admin_header">
        <div className='admin_logo'> <img src={logo} alt="logo" className='admin_img-logo'/></div>
       <div className='admin_head'><h1>Dashboard</h1></div>
      </div>
    </div>
  )
}

export default HeroTitle

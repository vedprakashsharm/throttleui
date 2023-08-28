import React from 'react'
import classNames from 'classnames'
import { useNavigate } from 'react-router-dom'


import HeroTitle from './HeroTitle'
//import Header from './Header'

const MobileHeader = ({
  isLeftNavHiddenOnMobile,
  profileImage,
  title,
  subTitle,
}) => {
  const navigate = useNavigate()
  const goBack = (event) => {
    event.preventDefault()
    navigate(-1)
  }
 
  return (
    <>
      <div
        class={classNames('ProfileMobile_headerContainer', {
          'd-mobile-none': isLeftNavHiddenOnMobile,
        })}
      >
        <a href="#" onClick={goBack} className="ProfileMobile_headerBackLink">
          <span className="hero-dynamic__back-button">
            <i className="fa-solid fa-lg fa-long-arrow-left"></i>
          </span>
        </a>
        <h2 class="ProfileMobile_headerTitle">
         My Profile'
        </h2>
      </div>
      <div
        className={classNames('mobile_main-header', {
          'd-mobile-none': isLeftNavHiddenOnMobile,
        })}
      >
        <HeroTitle
          text={ 'My Profile'}
          isLeftNavHiddenOnMobile={isLeftNavHiddenOnMobile}
        />
        {/* <Header
          profileImage={profileImage}
          title={title}
          subTitle={subTitle}
          isLeftNavHiddenOnMobile={isLeftNavHiddenOnMobile}
        /> */}
      </div>
    </>
  )
}

export default MobileHeader

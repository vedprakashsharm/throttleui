import React, { useState } from 'react'
import classNames from 'classnames'

import LeftNav from './LeftNav'
import Loader from '../Loader'
import MobileHeader from './MobileHeader'
import '../../../style/components/common/adminContainerBox.scss'

const Profile = ({
  profileImage,
  profileName,
  profileSubTitle,
  menuOptions,
  menuStatus,
  loading,
  children,
}) => {
  const [isLeftNavHiddenOnMobile, setIsMobileHidden] = useState(false)
  const toggleMobileHidden = () => setIsMobileHidden((state) => !state)

  return (
    <section className="profile">
      <MobileHeader
        profileImage={profileImage}
        title={profileName}
        subTitle={profileSubTitle}
        isLeftNavHiddenOnMobile={isLeftNavHiddenOnMobile}
      />

      <div class="">
        <div class="Profile_contentContainer__u_9Eb_admin">
          <LeftNav
            menuOptions={menuOptions}
            status={menuStatus}
            toggleMobileHidden={toggleMobileHidden}
            isLeftNavHiddenOnMobile={isLeftNavHiddenOnMobile}
          />
          <div
            className={classNames('main-contain-container-admin', {
              'd-mobile-none': !isLeftNavHiddenOnMobile,
            })}
          >
            <div class="ProfileMobile_headerContainer">
              <a
                className="ProfileMobile_headerBackLink"
                onClick={toggleMobileHidden}
              >
                <span className="hero-dynamic__back-button">
                  <i className="fa-solid fa-lg fa-long-arrow-left"></i>
                </span>
              </a>
              <h2 class="ProfileMobile_headerTitle">My Account</h2>
            </div>
            <div className="tab-content mx-mobile-4" id="pills-tabContent">
              {loading ? <Loader /> : children}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile

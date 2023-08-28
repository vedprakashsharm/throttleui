import React from 'react'
import classNames from 'classnames'

import dommy from '../../../images/dommy.png'
import '../../../style/components/common/adminContainerBox.scss'

const Header = ({ title, subTitle, profileImage, isLeftNavHiddenOnMobile }) => {
  return (
    <div
      class={classNames('', {
        'd-mobile-none': isLeftNavHiddenOnMobile,
      })}
    >
      <div class="Profile_admin" height="auto" width="100%">
        <div class="set-admin">
          <div class="Profile_imageWrapper" height="auto" width="100%">
            <div>
              <div class="Profile_image-admin" height="auto" width="100%">
                <img
                  alt="dummy"
                  loading="lazy"
                  src={profileImage || dommy}
                  class="Profile_image"
                />
              </div>
            </div>
          </div>
          <div class="Profile_details">
            <div class="Profile-set-admin">{title}</div>
            <div class="Profile_textWrap__CW8cN">
              <div class="Profile_subTitle">{subTitle}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header

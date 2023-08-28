import React from 'react'
import classNames from 'classnames'
import '../../../style/components/common/adminContainerBox.scss'

const LeftNav = ({
  menuOptions,
  status,
  toggleMobileHidden,
  isLeftNavHiddenOnMobile,
}) => {
  return (
    <div
      className={classNames('Profile_stepsContainer_sidebar', {
        'd-mobile-none': isLeftNavHiddenOnMobile,
      })}
    >
      <div className="Profile_stepsWrapper__0no_h">
        <div className="Profile_steps__pUi_0">
          <div className="sidebar-navigation" role="list">
            <ul className="nav nav-pills nav-bar" id="pills-tab" role="tablist">
              {menuOptions.map(({ text, targetId, statusKey, icon }, index) => {
                return (
                  <li
                    key={targetId}
                    className="guide-link-wrapper"
                    onClick={toggleMobileHidden}
                  >
                    <a
                      className={classNames('guide-link w-inline-block', {
                        active: index === 0,
                      })}
                      id={`${targetId}-tab`}
                      data-bs-toggle="pill"
                      data-bs-target={`#${targetId}`}
                      type="button"
                      role="tab"
                      aria-controls={`${targetId}`}
                      aria-selected="true"
                    >
                      <div className="sub-guide">
                        <div>
                          <div className="basic-guide-icon-link set-side-bar-text-admin">
                            <i
                              className={classNames(`${icon}`, 'd-desk-admin')}
                            ></i>
                            <p style={{marginLeft:"5px"}}> {text}</p>
                          </div>
                          {status && statusKey && (
                            <>
                              {status[statusKey] == null ? (
                                <p className="sub-guide_head">
                                  <i
                                    class="fa fa-check right-icon_pr"
                                    aria-hidden="true"
                                  ></i>
                                  completed
                                </p>
                              ) : (
                                <p className="sub-guide_head_pen">pending</p>
                              )}
                            </>
                          )}
                        </div>
                        {status && statusKey && (
                          <>
                            {status[statusKey] == null ? (
                              <div className="sub-guide-icon-link link-success d-mobile-none">
                                <i
                                  className="fa fa-lg fa-check-circle"
                                  aria-hidden="true"
                                ></i>
                              </div>
                            ) : (
                              <div className="sub-guide-icon-link startup-card_pedding d-mobile-none">
                                <i
                                  className="fa fa-lg fa-circle-o"
                                  aria-hidden="true"
                                ></i>
                              </div>
                            )}
                          </>
                        )}
                        <i class="fa-solid fa-angle-right d-desk-none"></i>
                      </div>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeftNav

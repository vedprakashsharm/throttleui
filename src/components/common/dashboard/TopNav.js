import React from 'react'
import Nav from 'react-bootstrap/Nav'
import { get } from 'lodash'

const TopNav = ({ menuOptions, onSelect }) => {
  return (
    <div class="align-items-center">
      <div class="mb-4">
        <Nav
          className="header-tabs nav-overflow"
          variant="tabs"
          defaultActiveKey={get(menuOptions, '[0].key')}
          onSelect={onSelect}
        >
          {menuOptions.map(({ label, key }) => (
            <Nav.Item key={key}>
              <Nav.Link eventKey={key}>
                <div className='d-flex'>
                <div className="sub-guide-icon-link link-success status_icon">
                  <i
                    className="fa fa-lg fa-check-circle"
                    aria-hidden="true"
                  ></i>
                </div>
                {label}
                </div>
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>
      </div>
    </div>
  )
}

export default TopNav

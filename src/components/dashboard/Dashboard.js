import React from 'react'
import Profile from '../../components/common/dashboard/Profile'
import Admin from '../admin/Admin'
import logo from '../../images/logo.png'


const MENU_OPTIONS = [
  {
    text: 'Dashboard',
    targetId: 'Home',
    statusKey: 'Home',
    icon: 'fa-solid fa-house',
  },
  {
    text: 'Companies',
    targetId: 'StartUps',
    statusKey: 'StartUps',
    icon: 'fa-solid fa-hourglass-start',
  },
  {
    text: 'File',
    targetId: 'Investor',
    statusKey: 'Investor',
    icon: 'fa-sharp fa-solid fa-hands-bound',
  },
  {
    text: 'Status',
    targetId: 'Investment',
    statusKey: 'Investment',
    icon: 'fa-solid fa-people-group',
  },
  {
    text: 'logs',
    targetId: 'Website',
    statusKey: 'Website',
    icon: 'fa-solid fa-globe',
  },
  {
    text: 'Logout',
    targetId: 'Logout',
    icon: 'fa-solid fa-arrow-right-from-bracket',
  },
]

const Dashboard = () => {
  return (
    <>
    
    <Profile
      profileName={'Admin'}
      profileImage={logo}
      menuOptions={MENU_OPTIONS}
    >
      <div
        class="tab-pane fade show active"
        id="Home"
        role="tabpanel"
        aria-labelledby="Home-tab"
      >
       <h1>Dashboard</h1>
      </div>

      <div
        class="tab-pane fade "
        id="StartUps"
        role="tabpanel"
        aria-labelledby="StartUps-tab"
      >
        <Admin />
      </div>

      <div
        class="tab-pane fade "
        id="Investor"
        role="tabpanel"
        aria-labelledby="Investor-tab"
      >
        <h1>File</h1>
        {/* <Investor /> */}
      </div>
      <div
        class="tab-pane fade "
        id="Investment"
        role="tabpanel"
        aria-labelledby="Investment-tab"
      >
        <h1>Status</h1>
        {/* <Investment /> */}
      </div>

      <div
        class="tab-pane fade "
        id="Website"
        role="tabpanel"
        aria-labelledby="Website-tab"
      >
        <h1>Logs</h1>
        {/* <Website /> */}
      </div>
    </Profile>
  </>
  )
}

export default Dashboard
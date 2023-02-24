import './index.css'
import {AiOutlineMenu} from 'react-icons/ai'
import {GiDolphin} from 'react-icons/gi'

const Header = () => (
  <>
    <div className="header-bg-container">
      <h3 className="header-title">Sublime Andaman</h3>
      <div className="mbl-menu">
        <AiOutlineMenu />
      </div>
      <div className="mbl-menu">
        <GiDolphin />
      </div>
      <div className="nav-container">
        <h1 className="nav-title">Explore</h1>
        <h1 className="nav-title">Stay</h1>
        <h1 className="nav-title">Fun</h1>
      </div>
      <div className="profile-container">
        <img
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          className="profile-image"
          alt="profile"
        />
      </div>
    </div>
  </>
)
export default Header

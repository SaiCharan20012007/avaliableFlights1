import './index.css'
import {MdFlight, MdDining} from 'react-icons/md'
import {FaHotel} from 'react-icons/fa'
import {GiFishingBoat} from 'react-icons/gi'
import {TbBus} from 'react-icons/tb'
import {AiFillCar} from 'react-icons/ai'
import {BsShop} from 'react-icons/bs'

const Nav = () => (
  <ul className="navitems-container">
    <li className="nav-item-selected">
      <MdFlight className="nav-icon" />
      FLIGHTS
    </li>
    <li className="nav-item">
      <FaHotel className="nav-icon" />
      HOTELS
    </li>
    <li className="nav-item">
      <GiFishingBoat className="nav-icon" />
      SHIP
    </li>
    <li className="nav-item">
      <TbBus className="nav-icon" />
      BUS
    </li>
    <li className="nav-item">
      <AiFillCar className="nav-icon" />
      CAB
    </li>
    <li className="nav-item">
      <MdDining className="nav-icon" />
      DINNING
    </li>
    <li className="nav-item">
      <BsShop className="nav-icon" />
      SHOP
    </li>
  </ul>
)

export default Nav

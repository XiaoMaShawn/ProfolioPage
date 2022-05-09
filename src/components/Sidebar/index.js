import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoXM from '../../assets/images/logo-XM.jpeg'

const Sidebar = () => {
  return (
    <div className='nav-bar'>
      <Link className='logo' to='/'>
        <img src={LogoXM} alt="logo" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">

        </NavLink>
      </nav>
    </div>
  )
}

export default Sidebar;
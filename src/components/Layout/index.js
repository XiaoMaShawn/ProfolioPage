import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar'
import './index.scss'

const Layout = () => {
  return (
    <div className='App'>
      <Sidebar />
      <div className='page'>
        <span className='tags top-tags'>top tag</span>

        <Outlet />

        <span className='tags bottom-tags'>
          bottom tag
          <br />
          <span className='bottom-tag-html'>html</span>
        </span>
      </div>
    </div>
  )
}

export default Layout;
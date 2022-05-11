import './index.scss';
import LogoXM from '../../../assets/images/logo-XM.jpeg'
import { useRef } from 'react';


const Logo = () => {

  const bgRef = useRef();
  // const outlineLogoRef = useRef();
  const solidLogoRef = useRef();

  return (
    <div className='logo-container' ref={bgRef}>
      <img
        className='solid-logo'
        ref={solidLogoRef}
        src={LogoXM}
        alt='S' />
    </div>
  );
};

export default Logo;
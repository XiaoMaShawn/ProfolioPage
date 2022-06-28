import './index.scss';
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000);
  }, []);

  return (
    <>
      <div className='container about-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p>I have passionate about coding and good at learning new things.</p>
          <p>I want to get an opportunity to work as a web developer.</p>
        </div>

        <div className='stage-cube-cont'>
          <div className='cubespinner'>
            <div className='face1'>
              <FontAwesomeIcon icon={faReact} color='#5ed4f4' />
            </div>
            <div className='face2'>
              <FontAwesomeIcon icon={faHtml5} color='#f06529' />
            </div>
            <div className='face3'>
              <FontAwesomeIcon icon={faCss3} color='#28a4d9' />
            </div>
            <div className='face4'>
              <FontAwesomeIcon icon={faJsSquare} color='#efd81d' />
            </div>
            <div className='face5'>
              <FontAwesomeIcon icon={faGitAlt} color='#ec4d28' />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
};

export default About;
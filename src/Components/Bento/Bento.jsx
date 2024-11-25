import React from 'react'
import './Bento.css'
import dairybento from '../assets/Bento/dairybento.jpg'
import frozenbento from '../assets/Bento/frozenbento.jpg'
import fruitsbento from '../assets/Bento/fruitsbento.jpg'
import milletbento from '../assets/Bento/milletbento.jpg'
import pulsesbento from '../assets/Bento/pulsesbento.jpg'
import vegiesbento from '../assets/Bento/vegiesbento.jpg'
function Bento() {
  return (
    <div className='bento-container background-image'>
    <div className='bento-main'>
        <div className='bento-large background-image' style={{ backgroundImage: `url(${milletbento})` }}>
            <button className='bento-button'><a href="#cereal" >Know More</a></button>
        </div>
        <div className="bento-small background-image"  style={{ backgroundImage: `url(${fruitsbento})` }}><button className='bento-button'><a href="#fruits">Know More</a>
          </button></div>
        <div className="bento-small background-image" style={{ backgroundImage: `url(${vegiesbento})` }}><button className='bento-button'><a href="#vegies">Know More</a></button></div>
        
    </div>
    <div className='bento-main'>
        <div className="bento-small background-image" style={{ backgroundImage: `url(${frozenbento})` }}><button className='bento-button'><a href="#frozen">Know More</a></button></div>
        <div className="bento-small background-image" style={{ backgroundImage: `url(${dairybento})` }}><button className='bento-button'><a href="#dairy">Know More</a></button></div>
        <div className='bento-large background-image' style={{ backgroundImage: `url(${pulsesbento})` }}>
            <button className='bento-button'><a href="#pulses">Know More</a></button>
        </div>
        
    </div>

    </div>
  )
}

export default Bento
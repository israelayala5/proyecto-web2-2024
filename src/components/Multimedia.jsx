import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container} from 'react-bootstrap';
export default function Multimedia() {
  return (
    
<Container>
  <div className="ratio ratio-16x9">
    <iframe 
      src="https://www.youtube.com/embed/6fhAchG-jcw?rel=0&autoplay=1&mute=1" 
      title="YouTube video" 
      allowFullScreen>
    </iframe>
  </div>
</Container>

    
  )
}



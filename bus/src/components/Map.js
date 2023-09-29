import React from 'react'
import  '../index.css';

export default function Map() {
  return (
    <div>
              {/* Start Google Map */}
      <div className="col-md-6">
        {/* Start Map */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22864.11283411948!2d-73.96468908098944!3d40.630720240038435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbg!4v1540447494452" width="100%" height={380} frameBorder={0} style={{border: 0}} allowFullScreen />
        {/* End Map */}
      </div>
      {/* End Google Map */}
      
    </div>
  )
}

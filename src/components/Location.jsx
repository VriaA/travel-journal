import React from 'react'
import pin from '../assets/pin.svg' 

export default function Location(props) {
    const {title, location, googleMapsUrl, startDate, endDate, description, imageUrl} = props
    return (
        <section className='location-section'>
            <img className='location-img' src={imageUrl} alt={title}/>

            <div className='location-body'>
                <div className='location-info-cntr'>
                    <p className='location-info'><img className='pin-logo' src={pin}/> {location}</p>
                    <a className='google-maps-link' href={googleMapsUrl} target='_blank'>View on Google Maps</a>
                </div>

                <h2 className='title'>{title}</h2>
                <p className='dates'>{startDate}-{endDate}</p>
                <p className='description'>{description}</p>
            </div>
        </section>
    )
}
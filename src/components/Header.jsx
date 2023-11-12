import React from 'react'
import globe from '../assets/globe.svg'

export default function Header() {
    return (
        <header className='header'>
            <h1>my travel journal.</h1>
            <img className='globe-logo' src={globe} alt='globe logo'/>
        </header>
    )
}
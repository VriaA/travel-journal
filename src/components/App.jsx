import React from 'react'
import Header from './Header.jsx'
import Location from './Location.jsx'
import data from '../data.js'

export default function App() {
    return (
        <div>
            <Header />
            <main>
                {getLocationComponents()}
            </main>
        </div>
    )
}

function getLocationComponents() {
    return data.map( (item, i)=> <Location key={i} {...item} />)
}
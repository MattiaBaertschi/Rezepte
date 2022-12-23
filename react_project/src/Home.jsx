import React, { Component } from 'react'

class Home extends Component {

    render () {
        return (
            <div className='w-full'>
                <h1 className='my-10'>Timon und Mattias Rezepte</h1> 
                <img src={ require("./bilder/Mattia_Baertschi.jpg")} alt=""  className='w-1/4 mx-auto font-family: Montserrat Alternates' />
            </div>
        )
    }
}

export default Home
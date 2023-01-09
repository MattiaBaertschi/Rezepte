import React, { Component } from 'react';

class Home extends Component {

    render () {
        return (
            <div className=' w-full'>
                <div className='m-10 text-xl'>
                <h1 className='my-10'>Rezeptesammlung </h1>
                </div>
                <div className='md:w-2/3 grid sm:grid-cols-1 md:grid-cols-2 text-center mx-auto'>
                    <div class='bg-slate-200 m-5 rounded-lg '>
                        <p className='my-10 p-5'>Diese Seite soll dazu dienen Rezepte auszutauschen und zu Archivieren. Die eingetragenen Rezepte stehen zur öffentlichen Verfügung und können gerne auf eigene Gefahr nachgekocht oder gebacken werden.</p> 
                    </div>
                    <div className=' m-5'>
                        <img src={ require("./bilder/Mattia_Baertschi.jpg")} alt=""  className=' font-family: Montserrat Alternates' />
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
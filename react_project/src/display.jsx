import React, { Component } from 'react';


class Display extends Component {
    constructor(props){
        super(props);

        this.state = {
        titel: props.titel,
        img_src: props.img_src,
        beschreibung: props.schritte,
        zutaten: props.zutaten,
        count: 1,
        test: props.zutaten,
        currentimage: true
        }
     }

    // Tester ob ein Bild existiert oder nicht



    renderBeschreibung(){
        if (this.state.beschreibung.length === 0) return <p>keine Beschreibung vorhanden</p>;

        return <ul>{this.state.beschreibung.map((Beschr, index) => <li key={index}>Schritt {index + 1}<br /> {Beschr} </li>)}</ul>;
    }
     
    renderZutaten(){
        if (this.state.zutaten.length === 0) return <p>keine Zutaten vorhanden</p>;

        return <ul>{this.state.zutaten.map((Zutat, index) => 
        <li key={index}> {Zutat[1]}      {Zutat[0]}</li>)}</ul>;
    }

    renderImage(){
        var t = 0
        if (t === 0) { 
            return <img src={ require(`${this.state.img_src}`)} alt="" className='h-max' />
        }
    }

    render() { 
        return (
            <div className='Display'>
                <div className='lg:flex md m-10'>
                    {/* Überschrift und Bild */}
                    <div className='lg:w-1/4 md:w-full sm:w-full text-left'>
                        <h1 className='font-bold text-lg mb-5' >{this.state.titel}</h1>   
                            {this.renderImage()}

                    </div>

                    {/* Anleitung zum Rezept */}
                    <div className='lg:w-2/4 md:w-full sm:w-full text-left sm:my-10  lg:mx-10'>
                        <h1 className='font-semibold text left mb-5'>Beschreibung</h1>
                        <p>{this.renderBeschreibung()}</p>
                    </div>

                    {/* Zutaten */}
                    <div className='lg:w-1/4 md:w-full sm:w-full text-left sm:my-10'>
                        <h1 className='font-semibold text left mb-5'>Zutaten</h1>
                        {this.renderZutaten()}
                    </div>

                </div>
            </div>
        );
    }


}
 
export default Display;
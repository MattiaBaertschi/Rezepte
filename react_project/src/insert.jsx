import React, { Component } from 'react';

import axios from 'axios';


class Insert extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
            titel_recipe: "",
            zutat_eins: "",
            zutat_zwei: "",
            zutat_drei: "",
            menge_eins: "",
            menge_zwei: "",
            menge_drei: "",
            schritt_eins: "",
            schritt_zwei: "",
            schritt_drei: "",
            new_recipe: {
                "Titel": {
                    "Zutaten und Mengen": [
                        ["", ""],
                        ["", ""],
                        ["", ""],
                    ],
                    "Geräte": ["Beispiel_1", "Beispiel_2"],
                    "Schritte": {
                        "Schritt 1:": "Das ist der erste Schritt",
                        "Schritt 2:": "Das ist der zweite Schritt",
                        "Schritt 3:": "Das ist der dritte Schritt"
                    },
                    "Bild": "./bilder/bild1.jpg"
                }
            },
        };
        this.updateRecipe = this.updatRecipe.bind(this);
        this.sendDataToBackend = this.sendDataToBackend.bind(this);
    }
    
    handleInputChange = (event) => {
        const { id, value} = event.target;
        this.setState({[id]:value});
    }

    updatRecipe = () => {



        // Liste mit neuen Zutaten und Mengen
        const ingredients = [
            [this.state.zutat_eins,this.state.menge_eins],
            [this.state.zutat_zwei,this.state.menge_zwei],
            [this.state.zutat_drei,this.state.menge_drei]
        ]

        // Objekt mit neuen Schritten
        const steps = {
            "schritt 1:" : this.state.schritt_eins,
            "schritt 2:" : this.state.schritt_zwei,
            "schritt 3:" : this.state.schritt_drei,
        }
        
        const titel = this.state.titel_recipe

        // Objekt new_recipe mit hilfe von setState aktualisieren
        this.setState({
            new_recipe:{
                [titel]: {
                    "Zutaten und Mengen": ingredients,
                    "Geräte": ["Beispiel_1", "Beispiel_2"],
                    "Schritte": steps,
                    "Bild": "./bilder/bild1.jpg"
                }
            }
        })
    }

    sendDataToBackend = () => {

        axios.post('https://vm4.sourcelab.ch/dev/postrecipes', {
          //data: this.state.data,
          input: this.state.new_recipe
        })
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
        console.log(this.state.inputValue)
      }

    render() {


        return ( 
            <div>
                <h1 className='m-10 text-lg font-bold'> Tragen Sie ein neues Rezept ein </h1>
                <label htmlFor="titel" className=" w-full block text-sm font-medium text-gray-900 dark:text-white ali">
                    Titel
                </label>
                <div className="flex justify-center">
                    <input id="titel_recipe" rows="1" resize="none" type="text"
                        value={this.state.titel_recipe} onChange={this.handleInputChange}
                        className="flex md:w-1/3 block p-2.5 w-full mt-2 mx-10 h-11 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500
                        focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                        dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                        placeholder="Thaycurry...">
                    </input>
                </div>

                <label className=" mt-20 w-full block text-sm font-medium text-gray-900 dark:text-white ali">
                    Zutaten und Mengen
                </label>
                <div className='md:w-1/2 mx-auto'>
                    <div className="flex">
                        <input id="menge_eins" 
                            value={this.state.menge_eins} onChange={this.handleInputChange}
                            className="block p-2.5 w-1/3 mt-2 mr-1 ml-10 h-11 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500
                            focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                            dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="2kg">
                        </input>
                        <input id="zutat_eins" 
                            value={this.state.zutat_eins} onChange={this.handleInputChange}
                            className="block p-2.5 w-2/3 mt-2 ml-1 mr-10 h-11 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500
                            focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                            dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="Bohnen">
                        </input>
                    </div>
                    <div className="flex">
                        <input id="menge_zwei"
                            value={this.state.menge_zwei} onChange={this.handleInputChange}
                            className="block p-2.5 w-1/3 mt-2 mr-1 ml-10 h-11 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500
                            focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                            dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="2kg">
                        </input>
                        <input id="zutat_zwei"
                            value={this.state.zutat_zwei} onChange={this.handleInputChange}
                            className="block p-2.5 w-2/3 mt-2 ml-1 mr-10 h-11 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500
                            focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                            dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="Bohnen">
                        </input>
                    </div>
                    <div className="flex">
                        <input id="menge_drei"
                            value={this.state.menge_drei} onChange={this.handleInputChange}
                            className="block p-2.5 w-1/3 mt-2 mr-1 ml-10 h-11 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500
                            focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                            dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="2kg">
                        </input>
                        <input id="zutat_drei"
                            value={this.state.zutat_drei} onChange={this.handleInputChange}
                            className="block p-2.5 w-2/3 mt-2 ml-1 mr-10 h-11 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500
                            focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                            dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                            placeholder="Bohnen">
                        </input>
                    </div>
                
                </div>
                <div>
                    <div className='md:w-1/2 mx-auto'>
                        <label className=" mt-20 w-full block text-sm font-medium text-gray-900 dark:text-white ali">
                            Arbeitsschritte
                        </label>
                        <div className="align-middle flex h-22 m-5">
                            <span className="mr-5 w-1/6">Schritt 1</span>
                            <textarea id="schritt_eins"
                                value={this.state.schritt_eins} onChange={this.handleInputChange}
                                className="block p-2.5 w-5/6 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500
                                focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                                dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="Als erstes geben Sie bitte...">
                            </textarea>
                        </div>
                        <div className="align-middle flex h-22 m-5">
                            <span className="mr-5 w-1/6">Schritt 3</span>
                            <textarea id="schritt_zwei"
                                value={this.state.schritt_zwei} onChange={this.handleInputChange}
                                className="block p-2.5 w-5/6 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500
                                focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                                dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="Als zweites geben Sie bitte...">
                            </textarea>
                        </div>
                        <div className="align-middle flex h-22 m-5">
                            <span className="mr-5 w-1/6">Schritt 3</span>
                            <textarea id="schritt_drei"
                                value={this.state.schritt_drei} onChange={this.handleInputChange}
                                className="block p-2.5 w-5/6 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500
                                focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                                dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                placeholder="Als drittes geben Sie bitte...">
                            </textarea>
                        </div>
                    </div>
                </div>
                <div>
                    <button type="submit" onClick={async() => {await this.updatRecipe();this.sendDataToBackend();}}
                        className='text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-2 focus:ring-gray-200 font-medium rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'> 
                        Bestätigen
                    </button>
                </div>
            </div>  
        )
    }
}
 
export default Insert
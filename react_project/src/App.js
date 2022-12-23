//=======================================IMPORTS========================================//
import './App.css';
import React, {useState, useEffect, Component} from 'react';
import {ReactComponent as LoginSvg} from './svg/login.svg';
import {ReactComponent as LupeSvg} from './svg/lupe.svg';

// Schnittstelle für API
import axios from 'axios';

// Interne Module Importieren
import Display from './display';
import Insert from './insert';
import Home from './Home';


//====================================APP-FUNKTION=======================================//
function App  () {
  
  //-------------------------------Schnittstelle für API---------------------------------//
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() =>{download();},[]) //keine ahnung was das genau macht aber es ist notwendig sonst fnunktionert das ganze nicht


  function download(){
    let url = "https://vm4.sourcelab.ch/rezepte"
    
    setLoading(true);

    axios.get(url)
    .then((response) => {
          setData(response.data); 
        }
      ).catch(
        (err) => { setError(err); }
      ).finally(
        (err) => { setLoading(false); }
      )
  }
  

  // Variabeln für Suchfeld Input
  const [inp_search, setInp_Serach] = useState("");


  //-----------------------------Variabeln-für-Darstellung--------------------------------//
  const [Render, setRender] = useState({
    rezepte: false,    // Alle Rezepte
    home:    true,     // Homepage
    insert:  false,    // Einfügen
  });
  
   //---------------------------------Rendering-der-App-----------------------------------//
    return (
      <div className="App">
        
        {/*...............................Menü-Leiste....................................*/}
        <div className="flex w-full bg-slate-200">
          <div className="flex w-fulln w-1/2">

            {/* Homebutton */}
            {!Render.home &&
              <>
                <button className="p-2 text-Black m-2 hover:underline"
                  onClick={() => {
                    setRender({
                      home: true,
                      rezepte: false,
                      insert: false
                    });
                  }}>
                  Home
                </button>
              </>
            }

            {/* Rezeptebutton */}
            {!Render.rezepte &&
              <>
                <button className="p-2 text-Black m-2 hover:underline"
                  onClick={() => {
                    download();
                    setRender({
                      home: false,
                      rezepte: true,
                      insert: false
                    });
                  }}>
                  Rezepte
                </button>
              </>
            }

            {/* Insertbutton */}
            {!Render.insert &&
              <>
                <button className="p-2 text-Black m-2 hover:underline"
                  onClick={() => {
                    setRender({
                      home: false,
                      rezepte: false,
                      insert: true
                    });
                  }}>
                  Hinzufügen
                </button>
              </>
            }
          </div>
          
          {/* Seach Insertbutton */}
          <div className="flex  w-1/2 justify-end">
            <div className="self-center">
              <label className="relative block">
                <span className="sr-only">Search</span>
                <button className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <LupeSvg className="w-5 h-5"/>
                </button>
                <input  className="placeholder:italic placeholder:text-slate-500 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-black  focus:ring-1 sm:text-sm"
                        placeholder="Search"
                        type="text"
                        name="search"
                        value={inp_search}
                        onChange={(event) => setInp_Serach(event.target.value)}
                        />
                                          {console.log(inp_search)}
              </label>
            </div>

            <div className="p-2 text-Black m-2"><LoginSvg className="w-5"/></div>
          </div>

        </div>
      
        {/* Errormeldung falls API nicht erreicht werden kann*/}
        <div>
          {error && <>
            <h1> Error 404</h1>
            <p> Database not found</p>
            </>
          }
        </div>

        {/*...............................darstellung Homepage....................................*/}
        {Render.home && <>
          <Home/>
        </>
        }
        
        {/*...............................Darstellung alle Rezepte................................*/}
        {Render.rezepte && <>
          {console.log(data["Apfelkuchen"]["Bild"])}
          {Object.entries(data).map(Element => <div><Display titel = {Element[0]} img_src = {Element[1]["Bild"]} zutaten = {Element[1]["Zutaten und Mengen"]} schritte = {Object.values(Element[1]["Schritte"])}/> </div>)}
        </>
        }
        
        {/*......................... ....Darstellung Einfügebereich................................*/}
        {Render.rezepte && <>
        <Insert/>
        </>
        }


        {/* -----------------------------------Footer--------------------------------------------- */}
        <div className="bg-slate-500 h-40 text-white mt-10">
          <p className='text-left p-10'>This is my footer</p>
        </div>

      </div>
  );
}




export default App;

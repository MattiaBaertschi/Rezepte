//=======================================IMPORTS========================================//
import './App.css';
import React, {useRef, useState, useEffect, Component} from 'react';  // useRef ist um die Textelemente aus dem Childelement insert abzugreifen
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
    let url = "https://vm4.sourcelab.ch/dev/getrecipes"
    
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
    ins:  false,    // Einfügen
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
                      ins: false
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
                      ins: false
                    });
                  }}>
                  Rezepte
                </button>
              </>
            }

            {/* Insertbutton */}
            {!Render.ins &&
              <>
                <button className="p-2 text-Black m-2 hover:underline"
                  onClick={() => {
                    setRender({
                      home: false,
                      rezepte: false,
                      ins: true
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
                <input  className="block p-2.5 w-15 ml-10 h-11 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500
                    focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                    dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search "
                        type="text"
                        name="search"
                        value={inp_search}
                        onChange={(event) => setInp_Serach(event.target.value)}
                        />
                                          {console.log(inp_search)}
              </label>
              
            </div>

            <div className="p-2 text-Black m-2">
              <LoginSvg className="w-5"/>
            </div>
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
        {Render.ins && <>
        <Insert/>
        </>
        }


        {/* -----------------------------------Footer--------------------------------------------- */}
        <div className=" bg-zinc-700 text-white p-5 mt-20">
          <div className='mb-10'>
            <p className='text-sm font-thin text-left'>© Timon von Kuhn & Mattia Bärtschi </p>
            <p className='text-xs font-thin text-left'>Alle Rechte Vorbehalten</p>
          </div>
          
          <div className='flex'>
            <div className='w-1/3'>
                <p className='text-left'>Merke:</p>
                <p className='text-xs font-thin text-left'>
                Seien Sie sich bitte sehr bewusst, dass der Erfolg der auf dieser Seite beschriebenen Rezepte stark von den Fähigkeiten des Koches / der Köchin abhängig ist. Wir können Ihnen keinen Erfolg garantieren.
                </p>
            </div>
            <div className='w-1/3'></div>
            <div className='w-1/3'>
              <p className='text-left'>Login</p>
              <p className='text-xs font-thin text-left'>
                Wenn Sie auch gerne Ihre Rezepte auf unserer Homepage aufschalten würden, dann melden Sie sich jerderzeit auf test@hotmail.com
              </p>
            </div>
          </div>
        </div>
      </div>

  );
}




export default App;

import { servicioSpoty } from "../services/servicioSpoty.js"
import { servicioTOKEN } from "../services/servicioTOKEN.js"
import { useState, useEffect } from "react"


export function Albumes(){

    //declarando mi primer useState
    const[canciones,setCanciones]=useState(null)

    //useState para la carga de datos

    const[carga,setCarga]=useState(true)

    //usando el useEffect

    useEffect(function(){

        servicioSpoty()
        .then(function(respuesta){
            console.log(respuesta)
            setCanciones(respuesta.tracks)
            setCarga(false)
        })
        console.log(canciones)
    },[])
    if(carga==true){
        return(
            <>
                <h1>Estoy cargando...</h1>
            </>
        )

    }else{
        return(
            <>
            <div className=" row row-cols-1 row-cols-md-3 g-3 justify-content-center">
            {
            canciones.map(function(cancion){
                return(
                     <>
                         <div className="col mt-3">
                            <div className="card h-100 ">
                                <img src={cancion.album.images[0].url} className="img-fluid h-100 p-1 w-100" alt="foto"/>
                                <h1 className="text-center">{cancion.nombre}</h1>
                                <h3 className="text-center">{cancion.tracks}</h3>
                                <audio controls src={cancion.preview_url}></audio> 
                            </div>
                        </div>
                    </>

                )
            })
            
        }     
        </div>  
            </>
        )
    }
   
  
  
    
}
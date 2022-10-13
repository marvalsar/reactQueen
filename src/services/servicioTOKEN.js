

export async function servicioTOKEN() {
    //URI
    const URI = "https://accounts.spotify.com/api/token"
    //DATOS
    const DATO1 = "grant_type=client_credentials"
    const DATO2 = "client_secret=163078aa77ff4aafb28a6c585308735e"
    const DATO3 = "client_id=2f59d7e820f34d89aa76021935be685c"
    //PETICION
    const PETICION={
        method:"POST",
        headers:{"Content-type":"application/x-www-form-urlencoded"},
        body:DATO1+"&"+DATO2+"&"+DATO3
    }
    //FETCH
    let respuesta=await fetch(URI,PETICION)
    let datos=await respuesta.json()
    datos=datos.token_type+' '+datos.access_token;
    console.log(datos)

    return datos
}
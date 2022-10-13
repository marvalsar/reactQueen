export function Musicos() {
    //un arreglo de objetos es formato comun al consumir un api
    let musicos=[
        {
            nombre:"Fredy Mercury",
            rol:"Vocalista",
            url:"https://firebasestorage.googleapis.com/v0/b/historia-queen.appspot.com/o/fredy3.jpg?alt=media&token=37964d28-9651-426b-8b7d-79ba7ce7d871",
        },
        {
            nombre:"Brian May",
            rol:"Guitarrista",
            url:"https://firebasestorage.googleapis.com/v0/b/historia-queen.appspot.com/o/brianmay1.jpg?alt=media&token=59c46227-96c9-4978-ab2a-0e86b6b2755b",
        },
        {
            nombre:"Roger Taylor",
            rol:"Baterista",
            url:"https://firebasestorage.googleapis.com/v0/b/historia-queen.appspot.com/o/rogertaylor1.jpg?alt=media&token=f796ef26-a2a0-46e1-879f-65913b494cc5",
        },
        {
            nombre:"John Deacon",
            rol:"Bajista",
            url:"https://firebasestorage.googleapis.com/v0/b/historia-queen.appspot.com/o/jhondaecon.jpg?alt=media&token=c7fd7375-43d7-48f2-b123-635ba5eb2d800",
        }
    ]
    
let conciertosMemorables=[
    {
        fecha:"1973",
        pais:"Reino Unido,Alemania,Luxemburgo,Australia",
        descripcion:"El Queen I Tour fue una gira de conciertos realizada por la banda de Rock británica Queen. El Tour no corresponde realmente a un tour promocional del disco, realmente llamado Queen y no, Queen I, sino que correspondería a una serie de presentaciones como teloneros, en los que tocaban canciones de sus primeros 2 discos (Queen II fue grabado en agosto de 1973, y publicado al año siguiente), más algunos covers. Los conciertos de este tour fueron básicamente como teloneros de la banda Mott the Hoople. Anterior a este mal llamado tour, Queen realizó diversas presentaciones antes de la edición de su primer disco, entre 1970 y 1973.",
        foto:"https://firebasestorage.googleapis.com/v0/b/historia-queen.appspot.com/o/queen%20I%20tour.jpg?alt=media&token=31fe0e83-90d7-43a6-8989-6ac0d5efee79"
    },

    {
        fecha:"1974",
        pais:"Reino Unido, Estados Unidos",
        descripcion:"El Queen II Tour al igual que la anterior serie de conciertos, no existe. Se utiliza la denominación Queen II Tour por coincidir una serie de conciertos realizada por la banda de Rock británica Queen, en los momentos en que la banda tenía en cartelera su disco Queen II. Este fue el primer tour en llevarlos a Estados Unidos donde realizaron una pequeña serie de conciertos.",
        foto:"https://firebasestorage.googleapis.com/v0/b/historia-queen.appspot.com/o/queen%20II%20tour.webp?alt=media&token=6b0d1fe8-dc10-488f-9e0d-93a7e823e194"
    },
    {
        fecha:"1978-1979",
        pais:"Reino Unido,Alemania,Suiza,Holanda,Francia,Bélgica,Estados Unidos,Canadá,España,   Yugoslavia",
        descripcion:"El Jazz Tour fue una gira de conciertos realizada por la banda de rock británica Queen. El Tour promocionaba el álbum Jazz.La manga europea del tour fue grabada y lanzada en un LP llamado Live Killers, siendo este el primer álbum en vivo de Queen. A la manga japonesa también se le conoce bajo el nombre de Live Killers, aunque la grabación de esos conciertos no fue introducida dentro del álbum.Esta gira se caracterizó por ser bastante extensa y continua en comparación a las giras anteriores, lo que, sumado al poco descanso que tuvo la banda desde las sesiones de grabación del álbum Jazz, provocó una merma en el rendimiento vocal del cantante Freddie Mercury. Esto llegó a un clímax durante los últimos conciertos en Japón (los conciertos en Tokio en las últimas semanas de abril, y en especial en Fukuoka, a comienzos de mayo). Otro dato que da cuenta de lo agotadora que fue esta gira fue el desmayo que sufrió el mánager de Queen durante el tour.",
        foto:"https://firebasestorage.googleapis.com/v0/b/historia-queen.appspot.com/o/Jazz-tour.webp?alt=media&token=5589de40-8da2-4e84-908d-d36eb5c8e5ce"
    },
    {
        fecha:"1980-1981",
        pais:"Reino Unido,Alemania,Suiza,Holanda,Francia,Bélgica,Estados Unidos,Canadá,México,Japón, Venezuela,Brasil,Argentina",
        descripcion:"El The Game Tour fue una gira de conciertos por la banda de rock británica Queen. Este fue quizás el tour más largo de la banda, contando las giras por Latinoamérica y Japón. Este tour llevó a la banda a países como Argentina, Venezuela, Brasil y México, que usualmente estaban fuera de sus giras. El tour promocionaba el álbum del mismo nombre, The Game, que fue un éxito en todo el mundo, colocando dos sencillos en el #1 en Estados Unidos: Crazy Little Thing Called Love y Another One Bites the Dust.",
        foto:"https://firebasestorage.googleapis.com/v0/b/historia-queen.appspot.com/o/the-game.tour-queen-monterrey.jpg?alt=media&token=53a39422-e651-4c67-8925-692f41ae3ee5"
    },
    {
        fecha:"1986",
        pais:"Reino Unido,Alemania,Suiza,Holanda,Francia,Bélgica,Irlanda,Hungría,Austria,       España",
        descripcion:"El Magic Tour fue la última gira realizada por la banda de Rock británica Queen bajo su alineación original. Se realizó en 1986 para la promoción del disco A Kind of Magic. Fue la gira más exitosa de la agrupación batiendo récords de público en el Reino Unido,1​ donde tocaron ante cerca de 400 mil personas. La gira se realizó solo en Europa y se dieron 26 conciertos. Un año después de esta gira, el cantante Freddie Mercury es diagnosticado con sida. Como consecuencia de esto la banda dejó de dar conciertos en vivo por decisión personal de Mercury y el evidente debilitamiento de su estado de salud con el paso de los años, según explicó el guitarrista Brian May.",
        foto:"https://firebasestorage.googleapis.com/v0/b/historia-queen.appspot.com/o/magic%20tour.jpg?alt=media&token=f980cb40-31ce-4fe8-8645-1d6c44989120"
    }
]
//mapeando un arreglo para hacer render

return(
    <>
    <div className=" row row-cols-1 row-cols-md-4 g-3 bg-danger">
        {
            musicos.map(function(musico){
                return(
                    <>
                        <div className="col mt-3 ">
                            <div className="card h-100 ">
                                <img src={musico.url} className="img-fluid h-100 " alt="foto"/>
                                <h1 className="text-center">{musico.nombre}</h1>
                                <h3 className="text-center">{musico.rol}</h3>
                            </div>
                        </div>
                    </>

                )
            })
            
        }       
    </div>
    <div className=" row row-cols-1 row-cols-md-3 g-3 bg-danger mt-4">
    {
        conciertosMemorables.map(function(concierto){
            return(
                <>
                    <div className="col mt-3 mx-auto">
                        <div className="card h-100 ">
                            <img src={concierto.foto} className="img-fluid  w-100 h-100  " alt="foto"/>
                            <h3 className="text-center">{concierto.fecha}</h3>
                            <h4 className="text-center">{concierto.pais}</h4>
                            <h5 className="text-center">{concierto.descripcion}</h5>
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
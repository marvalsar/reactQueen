import './Integrantes.css'
import 'animate.css';
import WOW from 'wowjs';

import { useEffect } from 'react';

export function Integrantes(){
    useEffect(() =>{
        new WOW.WOW({
            live: false
        }).init();
    }, [])
    return(
        <>
            <div className="row my-5 justify-content-center">
                <div className="col-12 col-md-4 zoom">
                    <img src="https://firebasestorage.googleapis.com/v0/b/historia-queen.appspot.com/o/fredy2.webp?alt=media&token=a17394bd-4d16-4148-a2fc-7a655406fc2b" alt="" className="imga-fluid w-100 rounded-circle animate__animated animate__backInLeft wow" data-bs-toggle="collapse" data-bs-target="#musico1"/>
                </div>
                <div className='col-12 col-md-4 align-self-center border-start animate__animated animate__backInRight'>
                    <h2>Fredy Mercury</h2>
                    <h3>Vocalista</h3>
                </div> 
            </div>
           
            <div className="row mt-2">
                <div className="col-12">
                    <div className="collapse" id="musico1">
                        <div className="card card-body">
                        Freddie Mercury (born Farrokh Bulsara; 5 September 1946 – 24 November 1991)[2] was a British singer and songwriter, who achieved worldwide fame as the lead vocalist of the rock band Queen. Regarded as one of the greatest singers in the history of rock music, he was known for his flamboyant stage persona and four-octave vocal range. Mercury defied the conventions of a rock frontman with his theatrical style, influencing the artistic direction of Queen.

                        Born in 1946 in Zanzibar to Parsi-Indian parents, Mercury attended English-style boarding schools in India from the age of eight and returned to Zanzibar after secondary school. In 1964, his family fled the Zanzibar Revolution, moving to Middlesex, England. Having studied and written music for years, he formed Queen in 1970 with guitarist Brian May and drummer Roger Taylor. Mercury wrote numerous hits for Queen, including "Killer Queen", "Bohemian Rhapsody", "Somebody to Love", "We Are the Champions", "Don't Stop Me Now" and "Crazy Little Thing Called Love". His charismatic stage performances often saw him interact with the audience, as displayed at the 1985 Live Aid concert. He also led a solo career and was a producer and guest musician for other artists.

                        Mercury was diagnosed with AIDS in 1987. He continued to record with Queen, and posthumously featured on their final album, Made in Heaven (1995). He announced his diagnosis the day before his death, from complications from the disease, in 1991 at the age of 45. In 1992, a concert in tribute to him was held at Wembley Stadium, in benefit of AIDS awareness. His career with Queen was dramatised in the 2018 biopic Bohemian Rhapsody.

                        As a member of Queen, Mercury was posthumously inducted into the Rock and Roll Hall of Fame in 2001, the Songwriters Hall of Fame in 2003, and the UK Music Hall of Fame in 2004. In 1990, he and the other Queen members were awarded the Brit Award for Outstanding Contribution to British Music, and one year after his death, Mercury was awarded it individually. In 2005, Queen were awarded an Ivor Novello Award for Outstanding Song Collection from the British Academy of Songwriters, Composers, and Authors. In 2002, Mercury was voted number 58 in the BBC's poll of the 100 Greatest Britons.
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-5 justify-content-center">
                <div className='col-12 col-md-4 align-self-center border-end text-end animate__animated animate__backInLeft'>
                    <h2>Brian May</h2>
                    <h3>Guitarrista</h3>
                </div>
                <div className="col-12 col-md-4 zoom">
                    <img src="https://firebasestorage.googleapis.com/v0/b/historia-queen.appspot.com/o/brianmay.jpg?alt=media&token=7dca3c34-b5f4-448f-864f-4eaf1ca1dbcc" alt="" className="imga-fluid w-100 rounded-circle animate__animated animate__backInRight wow" data-bs-toggle="collapse" data-bs-target="#musico2"/>
                </div>
                
            </div>
           
            <div className="row mt-2">
                <div className="col-12">
                    <div className="collapse" id="musico2">
                        <div className="card card-body">
                        Brian Harold May (Londres, 19 de julio de 1947) es un músico, compositor, cantante, multiinstrumentista, activista y astrofísico británico. Es conocido por ser guitarrista, compositor, vocalista y en ocasiones teclista de la banda británica Queen. Compuso muchos de los temas de Queen, como "Now I'm Here", "'39", "Sweet Lady", "Tie Your Mother Down", "We Will Rock You", "Fat Bottomed Girls", "Save Me", "Sail Away Sweet Sister", "Flash", "Hammer to Fall", "Who Wants to Live Forever", "I Want It All", "The Show Must Go On", "Headlong", "Too Much Love Will Kill You" o "No-One but You (Only the Good Die Young)".1​ Utiliza una guitarra eléctrica hecha por él y su padre, llamada Red Special.2​ Es considerado uno de los guitarristas más importantes y originales de la música popular.3​4​ En 2003 y 2011 la revista Rolling Stone lo ubicó en el puesto 26 de su lista de los guitarristas más grandes de todos los tiempos.5​ En 2005 una entrevista de Planet Rock lo ubicó como el puesto 7 de los mejores guitarristas.6​En 2020 fue elegido como el mejor guitarrista de todos los tiempos por los lectores de la revista "Total guitar"[1].

                        En 2005 fue nombrado comendador de la Orden del Imperio Británico por sus "servicios a la industria de la música". May obtuvo un PhD en astrofísica en el Imperial College, y desde abril de 2007, fue elegido rector honorífico de la Universidad John Moores.7​8​
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-5 justify-content-center">
                <div className="col-12 col-md-4 zoom">
                    <img src="https://firebasestorage.googleapis.com/v0/b/historia-queen.appspot.com/o/RoyerTaylor.jpg?alt=media&token=bc8222bc-df4a-4da9-b4bc-dd9ab1ffaae6" alt="" className="imga-fluid w-100 rounded-circle animate__animated animate__backInLeft wow" data-bs-toggle="collapse" data-bs-target="#musico3"/>
                </div>
                <div className='col-12 col-md-4 align-self-center border-start animate__animated animate__backInRight'>
                    <h2>Roger Taylor</h2>
                    <h3>Baterista</h3>
                </div>
            </div>
           
            <div className="row mt-2">
                <div className="col-12">
                    <div className="collapse" id="musico3">
                        <div className="card card-body">
                        Roger Meddows Taylor (King's Lynn, Norfolk, Inglaterra; 26 de julio de 1949), más conocido como Roger Taylor, es un músico, compositor, multiinstrumentista y productor cinematográfico2​ británico. En algunas canciones como solista actuó como guitarrista y vocalista. Ha escrito canciones famosas de Queen como "Sheer Heart Attack", "I'm In Love With My Car", "Radio Ga Ga" o "A Kind of Magic". También escribió otras como "Breakthru" o "Innuendo" junto con Freddie Mercury.

                        La revista Rolling Stone ubicó a Roger Taylor en el puesto 14 de su lista de los mejores 100 bateristas de la historia, por lo que según la revista mencionada Roger es el 11° mejor batería vivo, ya que 3 de los bateristas que están entre los primeros 13 fallecieron (1° John Bonham, 6° Keith Moon, 11° Cozy Powell). Además ocupa el 8° puesto de los 30 baterías más ricos del mundo, con 105 millones de dólares.3​ Taylor Hawkins, batería de Foo Fighters, ha afirmado que Roger es uno de los baterías más influyentes en la historia de la música.4​       
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-5 justify-content-center">
            <div className='col-12 col-md-4 align-self-center border-end text-end animate__animated animate__backInLeft'>
                    <h2>John Deacon</h2>
                    <h3>Bajista</h3>
                </div>
                <div className="col-12 col-md-4 zoom">
                    <img src="https://firebasestorage.googleapis.com/v0/b/historia-queen.appspot.com/o/jhon.webp?alt=media&token=aefa29d8-6fe2-431c-87c1-029dbf3a7697" alt="" className="imga-fluid w-100 rounded-circle animate__animated animate__backInRight wow" data-bs-toggle="collapse" data-bs-target="#musico4"/>
                </div>
                
            </div>
           
            <div className="row mt-2">
                <div className="col-12">
                    <div className="collapse" id="musico4">
                        <div className="card card-body">
                        John Richard Deacon (Leicester, Inglaterra; 19 de agosto de 1951) es un músico y compositor británico retirado, conocido por haber sido el bajista del grupo musical de rock Queen. En varios álbumes también desempeñó el papel de guitarrista y más ocasionalmente de teclista. Es el autor de algunos de los grandes éxitos de la banda, tales como «You're My Best Friend», «Spread Your Wings», «Another One Bites the Dust», «I Want to Break Free» o «Friends Will Be Friends», lo que demuestra su importante aporte al grupo en materia creativa.

                        Considerado como uno de los bajistas más versátiles de la historia del rock, la revista Rolling Stone lo colocó en el puesto 32 en su lista de los 100 mejores bajistas de la historia.
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}
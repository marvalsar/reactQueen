import "./Home.css"
import {SubMenu} from "../SubMenu/SubMenu.js"
import { Footer } from "../Footer/Footer.js"
export function Home(){
  let descripcionBanda = "Queen es una banda británica de rock formada en 1970 en Londres por el cantante y pianista Freddie Mercury, el guitarrista Brian May y el baterista Roger Taylor. El bajista John Deacon llegaría un año después al grupo para completar la formación clásica. Tras el deceso de Mercury en 1991, y el retiro de Deacon en 1997, los integrantes restantes, Brian May y Roger Taylor, continúan trabajando bajo el nombre Queen o Queen +, por lo que la banda aún se considera activa.​"

    return(
        <>

        <div className="banner">

        </div>
        <div>
          <div className="container mt-5">
            <div className="row">
              <div className="col-12">
                <h1 className="text-center">QUEEN</h1>
                <p className="text-center">{descripcionBanda}</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <SubMenu></SubMenu>
        </div>
        <div>
          <Footer></Footer>

        </div>


        </>
    )

}
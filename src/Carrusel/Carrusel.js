export function Carrusel(){
    return(
        <>
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
         <div className="carousel-inner">
          <div className="carousel-item active">
           <img src="https://firebasestorage.googleapis.com/v0/b/historia-queen.appspot.com/o/queen1.webp?alt=media&token=70140291-16f4-4ae8-9ad4-0dfff9ca75e9" height="800" className="w-100" alt="..."/>
          </div>
         <div className="carousel-item">
           <img src="https://firebasestorage.googleapis.com/v0/b/historia-queen.appspot.com/o/queen2.webp?alt=media&token=289cc564-9881-4975-b270-2daf9c65115a" height="800" className="w-100" alt="..."/>
          </div>
         <div className="carousel-item">
           <img src="https://firebasestorage.googleapis.com/v0/b/historia-queen.appspot.com/o/queen3.jpg?alt=media&token=7c16e21f-410a-4443-9657-7449bf7e1936" height="800" className="w-100" alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
         <span className="carousel-control-prev-icon" aria-hidden="true"></span>
         <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
         <span className="carousel-control-next-icon" aria-hidden="true"></span>
         <span className="visually-hidden">Next</span>
        </button>
       </div>
        </>
    )
}
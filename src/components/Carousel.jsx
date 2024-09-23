import datos from '../datos.json'

export function Carousel(){
    return <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
    <div className="carousel-inner">
      {datos.carousel.map((item, index) =>
        <div key={index} className={"carousel-item " + ( index == 0 ? "active" :"")}>
            <div className="image-text justify-content-center align-items-center position-absolute w-100 h-100 d-flex ">
                <h1>{item.text}</h1>    
            </div>    
            <img src={item.url} className="d-block w-100" alt={item.alt} />
        </div>
    )}
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
}
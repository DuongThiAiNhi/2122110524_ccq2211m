import lag from "../assets/images/lag.webp"
import photo from "../assets/images/photo.webp";
import slider_lg_2 from "../assets/images/slider_lg_2.webp";
const Slider=()=>{
    return(
    <div id="carouselExample" class="carousel slide">
    <div class="carousel-inner">
    <div class="carousel-item active">
    <img src={lag} class="d-block w-100" alt="lag"/>
    </div>
    <div class="carousel-item">
    <img src={photo}class="d-block w-100" alt="photo"/>
    </div>
    <div class="carousel-item">
    <img src={slider_lg_2} class="d-block w-100" alt="slider_lg_2"/>
    </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
    </button>
    </div>
    );
}
export default Slider; 
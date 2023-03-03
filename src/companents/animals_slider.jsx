import React, {useEffect, useState} from "react";


const Slide = (props) => {
    return (
        <div className={props.css_class}>
            <img src={'https://pets.сделай.site' + props.data.image} className="d-block w-100" alt="photo_pets" />
            <div class="carousel-caption d-none d-md-block">
                <h5 className="text-dark fs-2">{props.data.kind}</h5>
                <p className="text-dark fs-4" >{props.data.description}</p>
            </div>
        </div>
    )
}


const AnimalsSlider = () => {
    let [slide, setSlide] = useState({data: {pets: []}});
    useEffect(() => requestSlide(slide, setSlide), []);

    const requestSlide = (slide, setSlide) => {
        const requestOptions = {
            method: 'GET',
        };

        fetch("https://pets.сделай.site/api/pets/slider", requestOptions)
            .then(response => response.json())
            .then(result => {
                setSlide(result)
            })
            .catch(error => console.log('error', error));

    };

    let slides = slide.data.pets.map((pet, index) => {
        if (index === 0) {
            return <Slide data={pet} key={index} css_class='carousel-item active'/>;
        } else {
            return <Slide data={pet} key={index} css_class='carousel-item'/>;

        }
    })


    let indicators = slide.data.pets.map((pet, index) => {
        if (index === 0) {
            return <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                           className="active" aria-current="true" aria-label="Slide 1" key={index + 'btn'}></button>;
        } else {
            return <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index}
                           aria-label={"Slide " + (Number(index) + 1)} key={index + 'btn'}></button>;

        }
    })

    if (slides.length < 1) return (<div></div>);

    return (
        <div>
            
            <div id="carouselExampleIndicators" className="carousel slide m-auto "
                 data-bs-ride="carousel">
                <div className="carousel-indicators">
                    {indicators}
                </div>
                <div id="carouselExampleCaptions" class="carousel slide">
                    <div className="carousel-inner">
                        {slides}
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Предыдущий</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Следующий</span>
                </button>
            </div>
        </div>
    );
};

export default AnimalsSlider;
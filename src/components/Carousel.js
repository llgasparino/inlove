import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';

const Carousel = () => {
    const settings = {
        dots: 3,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000, // Intervalo de 3 segundos entre as transições
    };

    // Array de fotos e descrições
    const photos = [
        { url: '/photos/foto1.JPG', caption: 'ani versario' },
        { url: '/photos/foto2.jpeg', caption: 'nois terror' },
        { url: '/photos/foto3.jpeg', caption: 'baRRIL' },
        { url: '/photos/foto4.jpeg', caption: 'noi e o layao :(' },
        { url: '/photos/foto5.jpg', caption: 'nois 🧐' },
        { url: '/photos/foto6.jpeg', caption: '😲' },
        { url: '/photos/foto7.jpeg', caption: 'kikikiki' },
        { url: '/photos/foto8.jpeg', caption: '' },
        { url: '/photos/foto9.jpeg', caption: 'ano nuevo' },
        { url: '/photos/foto10.jpeg', caption: 'rayao ' },
        { url: '/photos/foto11.jpeg', caption: '' },
        { url: '/photos/foto12.jpeg', caption: 'noi' },
        { url: '/photos/foto13.jpeg', caption: 'muito noi' },


        // Adicione mais fotos conforme necessário
    ];

    return (
        <div className="carousel-container">
            <h2 className="title">Feliz dia doce 😁</h2>
            <Slider {...settings}>
                {photos.map((photo, index) => (
                    <div key={index} className="slide">
                        <img src={photo.url} alt={`Foto ${index + 1}`} className="carousel-photo" />
                        <p className="caption">{photo.caption}</p>
                    </div>
                ))}
            </Slider>
            <div className="info">
                <p><strong>Sobre nois:</strong></p>
                <p>eu e a sasa samos perfeitos.</p>
                <p>o Luiz ama a Sasa</p>
            </div>
        </div>
    );
};

export default Carousel;

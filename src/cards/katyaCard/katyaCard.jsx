import React from 'react';
import './katyaCard.scss';
import image from './KatyaHeadshot.jpg';

function KatyaCard() {
  return (
    <div className="cardContainer">

        <div className="card">
            <img className="imageContainer" src={image} alt="example headshot of a woman" />
        </div>

        <div className="card">
            <h3>Katya Sarmiento</h3>
            <p>Operations Manager turned Full-Stack Developer</p>
            <a href="https://github.com/Kitkatnik/" class="button">GitHub</a>
            <a href="https://www.polywork.com/kitkatnik" class="button">Polywork</a>
            <a href="https://www.linkedin.com/in/katyasarmiento/" class="button">LinkedIn</a>
        </div>

    </div>
  );
}

export default KatyaCard;

import React from 'react';
import TextCard from './TextCard';

function About() {
  return (
        <div className="about-wrapper">
            <div className="about-container">
                <div className="about-card">
                    <picture>
                        <source media="(min-width:1200px)" srcSet="./images/enjoyable-place-desktop.jpg" />
                        <source media="(min-width:768px)" srcSet="./images/enjoyable-place-tablet.jpg" />
                        <img src="./images/enjoyable-place-mobile.jpg" alt="Place Image" className="about-img" />
                    </picture>
                    <TextCard cordOnBlackBg={false} textCardTitle="Enjoyable place for all the family" textCardDesc="Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal." />
                </div>
                <div className="about-card about-card-reverse">
                    <TextCard cordOnBlackBg={false} textCardTitle="The most locally sourced food" textCardDesc="All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food." />
                    <div className="about-card-img-container">
                        <picture>
                            <source media="(min-width:1200px)" srcSet="./images/locally-sourced-desktop.jpg" />
                            <source media="(min-width:768px)" srcSet="./images/locally-sourced-tablet.jpg" />
                            <img src="./images/locally-sourced-mobile.jpg" alt="Local Image" className="about-img" />
                        </picture>
                        <img src="./images/pattern-lines.svg" alt="Pattern Image" className="pattern-img" />
                    </div>
                </div>
            </div>
        </div>
  );
}

export default About;
import React, { useState } from 'react';
import Button from '../Button';

function Facilities() {
    // ================== State
    const [ displayAbout, setDisplayAbout ] = useState("familyGathering");
    const [ activeInfo, setActiveInfo] = useState({
        title: "Family Gatherings",
        description: "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.",
        images: ["family-gathering-mobile.jpg", "family-gathering-tablet.jpg", "family-gathering-desktop.jpg"]
    });



    // ================== Manage active info
    const changeInfo = (about) => {
        setDisplayAbout(about);
        switch(about) {
            case "specialEvents":
                setActiveInfo({
                    title: "Special Events",
                    description: "Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.",
                    images: ["special-events-mobile.jpg", "special-events-tablet.jpg", "special-events-desktop.jpg"]
                })
              break;
            case "socialEvents":
                setActiveInfo({
                    title: "Social Events",
                    description: "Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.",
                    images: ["social-events-mobile.jpg", "social-events-tablet.jpg", "social-events-desktop.jpg"]
                })
              break;
            default:
                setActiveInfo({
                    title: "Family Gatherings",
                    description: "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.",
                    images: ["family-gathering-mobile.jpg", "family-gathering-tablet.jpg", "family-gathering-desktop.jpg"]
                })
          } 
    };


  return (
        <div className="facilities-wrapper">
            <div className="facilities-container">
                {/* ===================== Image & pattern decoration ===================== */}
                <div className="facilities-pictures">
                    <img src="./images/pattern-lines.svg" alt="Lines" className="lines-pattern"/>
                    <picture>
                        <source media="(min-width:1200px)" srcSet={`./images/${activeInfo.images[2]}`} />
                        <source media="(min-width:768px)" srcSet={`./images/${activeInfo.images[1]}`} />
                        <img src={`./images/${activeInfo.images[0]}`} alt="Image" className="info-img" />
                    </picture>
                </div>
                {/* ===================== Text Info ===================== */}
                <div className="facilities-card-info">
                    <div className="facilities-buttons">
                        <button onClick={() => changeInfo("familyGathering")} className={displayAbout === "familyGathering" ? "btn-active" : ""}>Family Gatherings</button>
                        <button onClick={() => changeInfo("specialEvents")} className={displayAbout === "specialEvents" ? "btn-active" : ""}>Special Events</button>
                        <button onClick={() => changeInfo("socialEvents")} className={displayAbout === "socialEvents" ? "btn-active" : ""}>Social Events</button>
                    </div>
                    <div className="facilities-info">
                        <h2>{activeInfo.title}</h2>
                        <p>{activeInfo.description}</p>
                        <Button text="book a table" dark={true} destination="booking" />
                    </div>
                </div>

            </div>
        </div>
  );
}

export default Facilities;
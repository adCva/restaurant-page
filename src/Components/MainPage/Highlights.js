import React from 'react';
import TextCard from '../TextCard';

function Highlights() {
  return (
        <div className="highlights-wrapper">
            <div className="highlights-container">
                <TextCard cardOnBlackBg={true} textCardTitle="A few highlights from our menu" textCardDesc="We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season." />

                {/* ============================ Products Cards Container ============================ */}
                <div className="highlights-products">
                    {/* =============== Card =============== */}
                    <div className="product-card">
                        <picture>
                            <source media="(min-width:768px)" srcSet="./images/salmon-tablet.jpg" />
                            <img src="./images/salmon-mobile.jpg" alt="Seared Salmon Fillet" />
                        </picture>
                        <div>
                            <h3>Seared Salmon Fillet</h3>
                            <p>Our locally sourced salmon served with a refreshing buckwheat summer salad.</p>
                        </div>
                    </div>
                    {/* =============== Card =============== */}
                    <div className="product-card">
                        <picture>
                            <source media="(min-width:768px)" srcSet="./images/beef-tablet.jpg" />
                            <img src="./images/beef-mobile.jpg" alt="Rosemary Filet Mignon" />
                        </picture>
                        <div>
                            <h3>Rosemary Filet Mignon</h3>
                            <p>Our prime beef served to your taste with a delicious choice of seasonal sides.</p>
                        </div>
                    </div>
                    {/* =============== Card =============== */}
                    <div className="product-card">
                        <picture>
                            <source media="(min-width:768px)" srcSet="./images/chocolate-tablet.jpg" />
                            <img src="./images/chocolate-mobile.jpg" alt="Summer Fruit Chocolate Mousse" />
                        </picture>
                        <div>
                            <h3>Summer Fruit Chocolate Mousse</h3>
                            <p>Creamy mousse combined with summer fruits and dark chocolate shavings.</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Highlights;
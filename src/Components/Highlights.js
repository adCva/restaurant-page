import React from 'react';

function Highlights() {
  return (
        <div className="highlights-wrapper">
            <div className="highlights-container">
                <div className="highlights-desc">
                    <img src="./images/pattern-divide.svg" alt="Divide"/>
                    <h2>A few highlights from our menu</h2>
                    <p>We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season.</p>
                </div>
                <div className="highlights-products">
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
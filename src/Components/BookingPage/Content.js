import React from 'react';
import Button from '../Button';

function Content() {
  return (
        <div className="main-rsv-wrapper">
            <div className="main-rsv-container">
                <img src="./images/logo.svg" alt="Logo" className="logo"/>

                <div className="main-rsv-content">
                    {/* ====================================== Main Text ====================================== */}
                    <div className="main-rsv-content-text">
                        <h1>Reservations</h1>
                        <p>We can’t wait to host you. If you have any special requirements please feel free to call on the phone number below. We’ll be happy to accommodate you.</p>
                        <Button dark={false} text="back home" destination="/"/>
                    </div>

                    {/* ====================================== Form ====================================== */}
                    <form onSubmit={() => alert("nope")}>
                        {/* =================== Name =================== */}
                        <div className="form-group">
                            <input type="text" name="name" placeholder="Name" />
                            <p className="error-msg">This field is required</p>
                        </div>
                        {/* =================== Email =================== */}
                        <div className="form-group">
                            <input type="email" name="email" placeholder="Email" />
                            <p className="error-msg">This field is required</p>
                        </div>
                        {/* =================== Date =================== */}
                        <div className="form-group-dateTime">
                            <div className="group-desc">
                                <p className="box-label">Pick a date</p>
                                <p className="error-msg error-msg-dateTime">This field is required</p>
                            </div>
                            <div className="date-inputs-container">
                                <input className="date-input" type="number" name="day" placeholder="DD" />
                                <input className="date-input" type="number" name="month" placeholder="MM" />
                                <input className="date-input" type="number" name="Year" placeholder="YYYY" />
                            </div>
                        </div>
                        {/* =================== Time =================== */}
                        <div className="form-group-dateTime">
                            <div className="group-desc">
                                <p className="box-label">Pick a time</p>
                                <p className="error-msg error-msg-dateTime">This field is required</p>
                            </div>
                            <div className="date-inputs-container">
                                <input className="date-input" type="number" name="day" placeholder="20" />
                                <input className="date-input" type="number" name="month" placeholder="00" />
                            </div>
                        </div>
                        {/* =================== People =================== */}
                        <div className="people-select">
                            <button type="button">-</button>
                            <p>2 people</p>
                            <button type="button">+</button>
                        </div>

                        {/* ====================================== Submit ====================================== */}
                        <button type="submit" className="submit-btn">make reservation</button>
                    </form>
                </div>

            </div>
        </div>
  );
}

export default Content;
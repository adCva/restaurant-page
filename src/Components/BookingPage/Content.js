import React, { useState } from 'react';
import Button from '../Button';

function Content() {
    const [ errorLocation, setErrorLocation ] = useState("name-error");


    const formSubmit = (event) => {
        event.preventDefault();
    }


    
  return (
        <div className="booking-content-wrapper">
            <div className="booking-content-container">
                <img src="./images/logo.svg" alt="Logo" className="logo"/>

                <div className="booking-content">
                    {/* ====================================== Main Text ====================================== */}
                    <div className="booking-content-text">
                        <h1>Reservations</h1>
                        <p>We can’t wait to host you. If you have any special requirements please feel free to call on the phone number below. We’ll be happy to accommodate you.</p>
                        <Button dark={false} text="back home" destination="/"/>
                    </div>

                    {/* ====================================== Form ====================================== */}
                    <div className="form-and-pattern">
                        <img src="./images/pattern-lines.svg" alt="Lines Pattern" class="form-pattern"/>
                        <form onSubmit={formSubmit}>
                            {/* =================== Name =================== */}
                            <div className="form-group">
                                <input type="text" name="name" placeholder="Name" className={errorLocation === "name-error" ? "input-error" : ""} />
                                <p className={errorLocation === "name-error" ? "error-msg show-error-msg" : "error-msg"}>This field is required</p>
                            </div>
                            {/* =================== Email =================== */}
                            <div className="form-group">
                                <input type="email" name="email" placeholder="Email" className={errorLocation === "email-error" ? "input-error" : ""} />
                                <p className={errorLocation === "email-error" ? "error-msg show-error-msg" : "error-msg"}>This field is required</p>
                            </div>
                            {/* =================== Date =================== */}
                            <div className="form-group-dateTime">
                                <div className="group-desc">
                                    <p className="box-label">Pick a date</p>
                                    <p className={errorLocation === "date-error" ? "error-msg error-msg-dateTime show-error-msg" : "error-msg error-msg-dateTime"}>This field is required</p>
                                </div>
                                <div className="date-inputs-container">
                                    <input className={errorLocation === "date-error" ? "date-input input-error" : "date-input"} type="number" name="day" placeholder="DD" />
                                    <input className={errorLocation === "date-error" ? "date-input input-error" : "date-input"} type="number" name="month" placeholder="MM" />
                                    <input className={errorLocation === "date-error" ? "date-input input-error" : "date-input"} type="number" name="Year" placeholder="YYYY" />
                                </div>
                            </div>
                            {/* =================== Time =================== */}
                            <div className="form-group-dateTime">
                                <div className="group-desc">
                                    <p className="box-label">Pick a time</p>
                                    <p className={errorLocation === "time-error" ? "error-msg error-msg-dateTime show-error-msg" : "error-msg error-msg-dateTime"}>This field is required</p>
                                </div>
                                <div className="date-inputs-container">
                                    <input className={errorLocation === "time-error" ? "date-input input-error" : "date-input"} type="number" name="day" placeholder="20" />
                                    <input className={errorLocation === "time-error" ? "date-input input-error" : "date-input"} type="number" name="month" placeholder="00" />
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
        </div>
  );
}

export default Content;
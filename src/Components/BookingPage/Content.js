import React, { useState } from 'react';
import Button from '../Button';

function Content() {
    let date = new Date();
    const [ errorLocation, setErrorLocation ] = useState("");
    const [ numOfPeople, setNumOfPeople ] = useState(2);

    const formSubmit = (event) => {
        event.preventDefault();
        if (event.target.name.value === "") {
            setErrorLocation("name-error");
            return false;
        } else if (!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(event.target.email.value)) {
            setErrorLocation("email-error");
            return false;
        } else if (event.target.day.value === "DD") {
            setErrorLocation("date-error");
            return false;
        } else if (event.target.month.value === "MM") {
            setErrorLocation("date-error");
            return false;
        } else if (Number(event.target.month.value) === Number(date.getMonth() + 1) && Number(event.target.day.value) < Number(date.getDate())) {
            setErrorLocation("date-error");
            return false;
        } else if (event.target.year.value === "YY") {
            setErrorLocation("date-error");
            return false;
        } else if (event.target.hour.value === "HH") {
            setErrorLocation("time-error");
            return false;
        } else {
            setErrorLocation("");
            alert("Ok");
            event.target.reset();
        }
    }


    const handleNumOfPeople = (action) => {
        switch (action) {
            case "plus":
                if (numOfPeople === 9) {
                    setNumOfPeople(9);
                } else {
                    setNumOfPeople(numOfPeople + 1);
                }
                break;
            case "minus":
                if (numOfPeople === 1) {
                    setNumOfPeople(1);
                } else {
                    setNumOfPeople(numOfPeople - 1);
                }
                break;
        }
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
                        <img src="./images/pattern-lines.svg" alt="Lines Pattern" className="form-pattern"/>
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
                                    <select name="day" className={errorLocation === "date-error" ? "input-error" : ""}>
                                        <option default>DD</option>
                                        {Array.from(Array(31).keys(), n=> n+1).map(i => (
                                            <option key={i} value={i}>{i}</option>
                                        ))}
                                    </select>
                                    <select name="month" className={errorLocation === "date-error" ? "input-error" : ""}>
                                        <option default>MM</option>
                                        {Array.from(Array(12).keys(), n=> n+1).map(i => (
                                            <option key={i} value={i}>{i}</option>
                                        ))}
                                    </select>
                                    <select name="year" className={errorLocation === "date-error" ? "input-error" : ""}>
                                        <option default>YY</option>
                                        <option value="2022">2022</option>
                                        <option value="2023">2023</option>
                                        <option value="2024">2024</option>
                                    </select>
                                </div>
                            </div>
                            {/* =================== Time =================== */}
                            <div className="form-group-dateTime form-group-time">
                                <div className="group-desc">
                                    <p className="box-label">Pick a time</p>
                                    <p className={errorLocation === "time-error" ? "error-msg error-msg-dateTime show-error-msg" : "error-msg error-msg-dateTime"}>This field is required</p>
                                </div>
                                <div className="date-inputs-container">
                                    <select name="hour" className={errorLocation === "time-error" ? "input-error" : ""}>
                                        <option default>HH</option>
                                        {[10,11,12,14,15,16,17,18,19,20,21,22].map(i => (
                                            <option key={i} value={i}>{i}:00</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            {/* =================== People =================== */}
                            <div className="people-select">
                                <button type="button" onClick={() => handleNumOfPeople("minus")}>-</button>
                                <p>{numOfPeople < 2 ? `${numOfPeople} person` : `${numOfPeople} people`}</p>
                                <button type="button" onClick={() => handleNumOfPeople("plus")}>+</button>
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
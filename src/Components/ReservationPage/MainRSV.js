import React from 'react';

function MainRSV() {
  return (
        <div className="main-rsv-wrapper">
            <div className="main-rsv-container">
                <img src="./images/logo.svg" alt="Logo" />

                <div className="main-rsv-content">
                    {/* ====================================== Main Text ====================================== */}
                    <div className="main-rsv-content-text">
                        <h1>reservation</h1>
                        <p>We can’t wait to host you. If you have any special requirements please feel free to call on the phone number below. We’ll be happy to accommodate you.</p>
                    </div>

                    {/* ====================================== Form ====================================== */}
                    <form>
                        {/* =================== Name =================== */}
                        <div className="form-group">
                            <label for="name">Name</label>
                            <input className="input-box-text" type="text" name="name" placeholder="Name" />
                            <p className="error-msg">This field is required</p>
                        </div>
                        {/* =================== Email =================== */}
                        <div className="form-group">
                            <label for="email">Email</label>
                            <input className="input-box-email" type="email" name="email" placeholder="Email" />
                            <p className="error-msg">This field is required</p>
                        </div>
                        {/* =================== Date =================== */}
                        <div className="form-group-date">
                            <div className="group-desc">
                                <p className="box-label">Pick a date</p>
                                <p className="error-msg">This field is required</p>
                            </div>
                            <div className="date-inputs-container">
                                <input className="date-input" type="number" name="day" placeholder="DD" />
                                <input className="date-input" type="number" name="month" placeholder="MM" />
                                <input className="date-input" type="number" name="Year" placeholder="YYYY" />
                            </div>
                        </div>
                        {/* =================== Time =================== */}
                        <div className="form-group-date">
                            <div className="group-desc">
                                <p className="box-label">Pick a time</p>
                                <p className="error-msg">This field is required</p>
                            </div>
                            <div className="date-inputs-container">
                                <input className="date-input" type="number" name="day" placeholder="20" />
                                <input className="date-input" type="number" name="month" placeholder="00" />
                            </div>
                        </div>
                        {/* =================== People =================== */}
                        <div className="people-select">
                            <button>-</button>
                            <p>2 people</p>
                            <button>+</button>
                        </div>

                        {/* ====================================== Submit ====================================== */}
                        <button type="submit" className="submit-btn">make a reservation</button>
                    </form>
                </div>
                
            </div>
        </div>
  );
}

export default MainRSV;
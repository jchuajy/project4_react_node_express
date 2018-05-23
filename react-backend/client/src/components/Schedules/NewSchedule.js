import React, { Component } from 'react';


class NewSchedule extends Component {

      constructor() {
            super();
            // this.nameChangeHandler = this.nameChangeHandler.bind( this );
            // this.emailChangeHandler = this.emailChangeHandler.bind( this );
            // this.passwordChangeHandler = this.passwordChangeHandler.bind( this );
            // this.passwordConfirmChangeHandler = this.passwordConfirmChangeHandler.bind( this );
            this.monthOptionHandler = this.monthOptionHandler.bind( this );
            this.dayOptionHandler = this.dayOptionHandler.bind( this );
            this.handleSubmit = this.handleSubmit.bind( this );

            this.state= {
                  currentYear: new Date().getFullYear(),
                  currentMonth: new Date().getMonth(),
                  currentDay: new Date().getDate(),
                  monthList: [],
                  dayList: [],
                  timeList:['0800 - 1000 HRS', '1000 - 1200 HRS', '1200 - 1400 HRS', '1400 - 1600 HRS', '1600 - 1800 HRS']
                };
      };

      monthOptionHandler() {

            let monthList = [];

            const monthNames = ["","January", "February", "March", "April", "May", "June",
                  "July", "August", "September", "October", "November", "December"
                  ];

            monthList.push(monthNames[this.state.currentMonth + 1]);
            monthList.push(monthNames[this.state.currentMonth + 2]);

            this.setState({monthList: monthList});

      };

      dayOptionHandler() {

            let totalDaysInMonth = new Date(this.state.currentYear, this.state.currentMonth + 1, 0).getDate();

            let dayList = []; 

            for (let i = this.state.currentDay + 1; i < totalDaysInMonth + 1; i++) {
                  dayList.push(i);
            }

            this.setState({dayList: dayList});
      };


      componentDidMount() {

            this.monthOptionHandler();
            this.dayOptionHandler();

      };

      handleSubmit(event){ 

            event.preventDefault();

            let slotDate = document.getElementById("selectDay").value + " " + document.getElementById("selectMonth").value + " " + document.getElementById("selectYear").value + " " + document.getElementById("selectTime").value;
            console.log("slotDate", slotDate)
            let bodyJSON = {
                  "name": slotDate
            }
            fetch('/', {
                        method: 'POST',
                        headers: new Headers({'Content-Type':'application/json'}),
                        credentials: 'include',
                        body: JSON.stringify(bodyJSON)
            }).then(res => {
                  // return res.json();
            }).then(data => {
                  console.log("this is my data", data)
                  // if (data.loginSuccess == true) {
                  //       cookies.set('token', data.token, { path: '/' });
                  //       this.setState({loginMessage: ""});
                  // } else {
                  //       this.setState({loginMessage: data.message});
                  // }
                  
            })
            .catch(error => console.log(error));
      };
    
    
      render() {

            let monthItems = this.state.monthList.map(item => {
                  return <option value={item}>{item}</option>
            });

            let dayItems = this.state.dayList.map(item => {
                  return <option value={item}>{item}</option>
            });

            let timeItems = this.state.timeList.map(item => {
                  return <option value={item}>{item}</option>
            });

        return (

            
            <div className="container">

                  {/* welcome header */}
                  <div className="py-5 text-center">
                        <img className="newDeliveryLogo" src="/blackLogo.png" alt="" width="72" height="72" />
                        <h2>Scheduler</h2>
                  </div>

                  {/* start actual form */}
                  <div className="col-md-8 order-md-1">
                        <h4 className="mb-3">New Slot</h4>
                        <form className="needs-validation" noValidate onSubmit={this.handleSubmit}>

                              <div className="mb-3">
                                          <label htmlFor="time">Time</label>
                                          <select id="selectTime">
                                                {timeItems}
                                          </select>
                                          <div className="invalid-feedback">
                                          Valid time is required.
                                          </div>
                              </div>

                              <div className="mb-3">
                                          <label htmlFor="day">Day</label>
                                          <select id="selectDay">
                                                {dayItems}
                                          </select>
                                          <div className="invalid-feedback">
                                          Valid day is required.
                                          </div>
                              </div>

                              <div className="mb-3">
                                          <label htmlFor="month">Month</label>
                                          <select id="selectMonth">
                                                {monthItems}
                                          </select>
                                          <div className="invalid-feedback">
                                          Valid month is required.
                                          </div>
                              </div>

                              <div className="mb-3">
                                    <label htmlFor="">Year</label>
                                    <select id="selectYear" readOnly>
                                          <option value={this.state.currentYear}>{this.state.currentYear}</option>
                                    </select>
                                    <div className="invalid-feedback">
                                    Please enter a valid year.
                                    </div>
                              </div>
                              
                              <button type="submit" className="btn btn-success">I'm Available!</button>

                        </form>
                  </div>
            </div>
          
        );
      }
    }
    
    export default NewSchedule;
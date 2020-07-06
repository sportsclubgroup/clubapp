import React, { Component } from 'react';
import axios from 'axios';
import './ContactUs.css';

class Contactus extends Component {
    state = {
        firstname: '',
        lastname: '',
        email: '',
        sent: false
    }

    // handle inputs
    handleFirstName = (e) => { 
        this.setState({
            firstname: e.target.value
        })
    }
    handleLastName = (e) => { 
        this.setState({
            lastname: e.target.value
        })
    }
    handleEmail = (e) => { 
        this.setState({
            email: e.target.value
        })
    }
    handleMessage = (e) => { 
        this.setState({
            message: e.target.value
        })
    }

    formSubmit = (e) => { 
        e.preventDefault();

        let data = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            message: this.state.message
        }

        axios.post('/api/form', data)
            .then(res => { 
                this.setState({ 
                    sent: true,
                }, this.resetForm())
            })
            .catch(() => { 
                console.log('message not sent');
            })
    }

    // reseting initial data
    resetForm = () => { 
        this.setState({
            firstname: '',
            lastname: '',
            email: '',
            message: ''
        })

        setTimeout(() => { 
            this.setState({
                sent: false
            })
        }, 3000)
    }

    render() { 
        return (
            <div className="cu-bg">
            <div className=" cu-container"><h2>Contact Us</h2>
                <form onSubmit={this.formSubmit}>
                    <div className="singleItem">
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" name="firstname" className="firstname" placeholder="First Name"
                            value={this.state.firstname}
                            onChange={this.handleFirstName}

                        />
                    </div>

                    <div className="singleItem">
                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" name="lastname" className="lastname" placeholder="Last Name"
                        value={this.state.lastname}
                            onChange={this.handleLastName}
                        />
                    </div>

                    <div className="singleItem">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" className="name" placeholder="Email" 
                        value={this.state.email}
                            onChange={this.handleEmail}/>
                    </div>

                    <div className="textArea singleItem">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" id="" cols="30" rows="5" placeholder="Message"
                        value={this.state.message}
                            onChange={this.handleMessage}
                        ></textarea>
                    </div>
                    <div className={this.state.sent ?'msg msgAppear':'msg'}>Message has been sent</div>
                    <div className="btn">
                        <button type="submit">Submit</button>
                    </div>
                </form>

                </div>
                </div>
        );
    }
}

export default Contactus;
import React, { Component } from 'react';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';
import axios from 'axios';
import './ContactUs.css';

class ContactUs extends Component { 
    state = {
        name: '',
        email: '',
        sent: false
    }

    // handle inputs
    handleName = (e) => { 
        this.setState({
            name: e.target.value
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
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }

        axios.post('/api/forma', data)
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
            name: '',
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
            <section className="col-md-6 cu-bg">
                <div className="container cu-form">
                    <h1>Contact Form</h1>
                    <Form onSubmit={this.handleSubmit}>
					<FormGroup>
                        <Label for="name">Name</Label>
                        <Input type="text"
						name="name" placeholder="Name"
						onChange={this.handleChange} />  
                    </FormGroup>
					<FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email"
						name="email" placeholder="Email"
						onChange={this.handleChange} />  
                    </FormGroup>
					<FormGroup>
                        <Label for="message">Message</Label>
                        <Input type="textarea" col="30" rows="5" placeholder="Your Message"
						name="message"
						onChange={this.handleChange} />  
                    </FormGroup>
					</Form>

                    <div className="FormGroup">
                        <Button className="btn btn-primary btn-block">Submit</Button>
                    </div>
                </div>
            </section>
        );
    }
}

export default ContactUs;
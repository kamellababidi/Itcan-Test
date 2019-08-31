import React, { Component } from "react";
import { Row, Col } from 'react-bootstrap';
import Input from './Input'
import Button from './Button'
import { MdCheck } from "react-icons/md";
const baseUrl = "https://itcan-test.herokuapp.com/api/submission"

class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            submitted: false,
            loader: false
        }
    }

    getName(element){
        return element.firstElementChild.firstElementChild.firstElementChild.firstElementChild.name
    }

    getValue(element){
        return element.firstElementChild.firstElementChild.firstElementChild.firstElementChild.value
    }

    submitForm() {
        this.setState({
            loader: true
        })
        // will be refactored 
        let body = {}
        for(var i=0; i< $('.header-form-container').children().length; i++) {
            body[this.getName($('.header-form-container').children()[i])] = this.getValue($('.header-form-container').children()[i])
        }
        body["description"] = $( "input[name='description']" )[0].value
        body["dob"] = $( "input[name='dob']" )[0].value
        body["martialStatus"] = $( "input[name='martialStatus']" )[0].value
        body["degree"] = $( "input[name='degree']" )[0].value
        body["yearsOfExperience"] = $( "input[name='yearsOfExperience']" )[0].value
        body["expectedSalary"] = $( "input[name='expectedSalary']" )[0].value
        body["contactNumber"] = $( "input[name='contactNumber']" )[0].value
        body["email"] = $( "input[name='email']" )[0].value


        fetch(baseUrl,
            {
                headers: {'Content-Type':'application/json'},
                method: 'POST',
                body: JSON.stringify(body) 
            }
            )
            .then(res => res.json())
            .then(
                (result) => {
                    if(result.errors) {
                        this.setState({
                            loader: false
                        })
                        alert("please fill required data!")
                        return;
                    }
                    
                    this.setState({
                        submitted: true,
                        loader: false
                    });
                },
                (error) => {
                this.setState({
                    isLoaded: true,
                    error
                });
                }
            )
    }

    render() {
        return (
            <header>
                <Row>
                    <Col className='header-left' lg={7}>
                        <img className='itcan-logo-img' src={require("../public/colored-logo.png")}/>
                        <img className='book-img' src={require("../public/book.svg")}/>
                        <img className='men-img' src={require("../public/men.svg")}/>
                    </Col>
                    <Col className='header-right' lg={5}>
                        <p>Connect with us to get started</p>
                        {
                            this.state.submitted ?
                            <div className='submitted-container'>
                                <div className='submitted-check'>
                                    <MdCheck size={120} color='#ffffff'/>
                                </div>
                                <p>Thank-you!</p>
                                <p>we will get back to you shortly</p>
                            </div>
                            :
                            <div>
                                <div className='header-form-container'>
                                    {/* 1 */}
                                    <Row>
                                        <Col sm xs={12}>
                                            <Input
                                                placeholder='YOUR FULL NAME'
                                                name='fullName'
                                            />
                                        </Col>
                                    </Row>
                                    {/* 2 */}
                                    <Row>
                                        <Col sm xs={6}>
                                            <Input
                                                placeholder='GENDER'
                                                name='gender'
                                            />
                                        </Col>
                                        <Col sm xs={6}>
                                            <Input
                                                placeholder='DOB'
                                                name='dob'
                                            />
                                        </Col>
                                    </Row>
                                    {/* 3 */}
                                    <Row>
                                        <Col sm xs={12}>
                                            <Input
                                                placeholder='City of Residence'
                                                name='city'
                                            />
                                        </Col>
                                    </Row>
                                    {/* 4 */}
                                    <Row>
                                        <Col sm xs={6}>
                                            <Input
                                                placeholder='Nationality'
                                                name='nationality'
                                            />
                                        </Col>
                                        <Col sm xs={6}>
                                            <Input
                                                placeholder='Marital Status'
                                                name='martialStatus'
                                            />
                                        </Col>
                                    </Row>
                                    {/* 5 */}
                                    <Row>
                                        <Col sm xs={6}>
                                            <Input
                                                placeholder='MAJOR'
                                                name='major'
                                            />
                                        </Col>
                                        <Col sm xs={6}>
                                            <Input
                                                placeholder='degree'
                                                name='degree'
                                            />
                                        </Col>
                                    </Row>
                                    {/* 6 */}
                                    <Row>
                                        <Col sm xs={6}>
                                            <Input
                                                placeholder='university'
                                                name='university'
                                            />
                                        </Col>
                                        <Col sm xs={6}>
                                            <Input
                                                placeholder='years of experience'
                                                name='yearsOfExperience'
                                            />
                                        </Col>
                                    </Row>
                                    {/* 7 */}
                                    <Row>
                                        <Col sm xs={6}>
                                            <Input
                                                placeholder='employment status'
                                                name='employmentStatus'
                                            />
                                        </Col>
                                        <Col sm xs={6}>
                                            <Input
                                                placeholder='expected salary'
                                                name='expectedSalary'
                                            />
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col sm xs={6}>
                                            <Input
                                                placeholder='Contact Number'
                                                name='contactNumber'
                                            />
                                        </Col>
                                        <Col sm xs={6}>
                                            <Input
                                                placeholder='Email'
                                                name='email'
                                            />
                                        </Col>
                                    </Row>
                                    {/* 8 */}
                                    <Row>
                                        <Col sm xs={6}>
                                            <Input
                                                placeholder='visa status'
                                                name='visaStatus'
                                            />
                                        </Col>
                                        <Col sm xs={6}>
                                            <Input
                                                placeholder='tell us about you (optional)'
                                                name='description'
                                            />
                                        </Col>
                                    </Row>
                                </div>
                                {
                                    this.state.loader ? 
                                    <div className='loader'>
                                        <h1>submitting ..</h1>
                                    </div>
                                    :
                                    <div className='header-form-btn' onClick={ () => this.submitForm()}>
                                    <   Button/>
                                    </div>
                                }
                            </div>
                        }
                        
                    </Col>
                </Row>
            </header>
        )
    }
}

export default Header;

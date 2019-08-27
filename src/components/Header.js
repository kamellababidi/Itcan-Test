import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Input from './Input'
import Button from './Button'
const Header = () => (
    <header>
        <Row>
            <Col className='header-left' lg={7}>
                <img className='itcan-logo-img' src={require("../public/itcan-logo.png")}/>
                <img className='book-img' src={require("../public/book.svg")}/>
                <img className='men-img' src={require("../public/men.svg")}/>
            </Col>
            <Col className='header-right' lg={5}>
                <p>Connect with us to get started</p>
                <div className='header-form-container'>
                    {/* 1 */}
                    <Row>
                        <Col sm xs={12}>
                            <Input
                                placeholder='YOUR FULL NAME'
                            />
                        </Col>
                    </Row>
                    {/* 2 */}
                    <Row>
                        <Col sm xs={6}>
                            <Input
                                placeholder='GENDER'
                            />
                        </Col>
                        <Col sm xs={6}>
                            <Input
                                placeholder='DOB'
                            />
                        </Col>
                    </Row>
                    {/* 3 */}
                    <Row>
                        <Col sm xs={12}>
                            <Input
                                placeholder='City of Residence'
                            />
                        </Col>
                    </Row>
                    {/* 4 */}
                    <Row>
                        <Col sm xs={6}>
                            <Input
                                placeholder='Nationality'
                            />
                        </Col>
                        <Col sm xs={6}>
                            <Input
                                placeholder='Marital Status'
                            />
                        </Col>
                    </Row>
                    {/* 5 */}
                    <Row>
                        <Col sm xs={6}>
                            <Input
                                placeholder='MAJOR'
                            />
                        </Col>
                        <Col sm xs={6}>
                            <Input
                                placeholder='degree'
                            />
                        </Col>
                    </Row>
                    {/* 6 */}
                    <Row>
                        <Col sm xs={6}>
                            <Input
                                placeholder='university'
                            />
                        </Col>
                        <Col sm xs={6}>
                            <Input
                                placeholder='years of experience'
                            />
                        </Col>
                    </Row>
                    {/* 7 */}
                    <Row>
                        <Col sm xs={6}>
                            <Input
                                placeholder='employment status'
                            />
                        </Col>
                        <Col sm xs={6}>
                            <Input
                                placeholder='expected salary'
                            />
                        </Col>
                    </Row>
                    {/* 8 */}
                    <Row>
                        <Col sm xs={6}>
                            <Input
                                placeholder='visa status'
                            />
                        </Col>
                        <Col sm xs={6}>
                            <Input
                                placeholder='tell us about you (optional)'
                            />
                        </Col>
                    </Row>
                </div>
                <div className='header-form-btn'>
                    <Button/>
                </div>
            </Col>
        </Row>
    </header>
);

export default Header;

import React from 'react';
import styled from 'styled-components';
import {Row, Col} from 'react-bootstrap';

const Header = () => (
    <header>
        <Row>
            <Col className='header-left' lg={7}>1 of 2</Col>
            <Col className='header-right' lg={5}>
                <p>Connect with us to get started</p>
            </Col>
        </Row>
    </header>
);

export default Header;

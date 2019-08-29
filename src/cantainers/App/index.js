import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../HomePage/index';
import Dashboard from '../Dashboard/index';
import {Container} from 'react-bootstrap';

const App = () => (
    <Container fluid={true} style={{ paddingLeft: 0, paddingRight: 0, margin: 0 }}>
        <Helmet
            defaultTitle="Itcan Test"
        >
        </Helmet>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
    </Container>
);

export default App;

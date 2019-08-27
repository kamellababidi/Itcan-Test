import React from 'react';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import { Helmet } from 'react-helmet';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../HomePage/index';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;


const App = () => (
    <AppWrapper>
        <Helmet
            defaultTitle="Itcan Test"
        >
        </Helmet>
        <Switch>
            <Route exact path="/" component={HomePage} />
        </Switch>
    </AppWrapper>
);

export default App;

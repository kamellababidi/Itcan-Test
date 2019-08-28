import React from 'react';
import styled from 'styled-components';
import {Container, Row, Col} from 'react-bootstrap';
import Header from '../../components/Header'
import SectionHeader from '../../components/SectionHeader'


const HomePage = () => (
    <div className='home-page-container'>
      <Header/>
      <section>
        <SectionHeader
          title='who is itcan?'
        />
        <div className='who-itcan-text-container'>
          <p>Itcan was founded in Dubai in 2015, it started with Performance Marketing & Digital Marketing Services and now it is the leading Saudi e-commerce digital marketing company in the Middle East region focusing on enabling leading brands to enable their business and technology growth.</p>
        </div>
      </section>
    </div>
);

export default HomePage;

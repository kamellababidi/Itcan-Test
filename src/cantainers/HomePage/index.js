import React from 'react';
import styled from 'styled-components';
import {Container, Row, Col} from 'react-bootstrap';
import Header from '../../components/Header'
import SectionHeader from '../../components/SectionHeader'
import ValueContainer from '../../components/ValueContainer'


const HomePage = () => (
    <div className='home-page-container'>
      <Header/>
      {/* Who itcan */}
      <section>
        <SectionHeader
          title='who is itcan?'
        />
        <div className='who-itcan-text-container'>
          <p>Itcan was founded in Dubai in 2015, it started with Performance Marketing & Digital Marketing Services and now it is the leading Saudi e-commerce digital marketing company in the Middle East region focusing on enabling leading brands to enable their business and technology growth.</p>
        </div>
        <div className='who-itcan-values-container'>
          <Row>
            <Col lg={4} md={true}>
              <ValueContainer
                img={require('../../public/eye.svg')}
                title='Vision'
                desc='To be the leading e-commerce growth consultancy in the Middle East'
              />
            </Col>
            <Col lg={4} md={true}>
              <ValueContainer
                img={require('../../public/mission.svg')}
                title='Mission'
                desc='To be the leading e-commerce growth consultancy in the Middle East'
              />
            </Col>
            <Col lg={4} md={true}>
              <ValueContainer
                img={require('../../public/value.svg')}
                title='Value'
                desc='To be the leading e-commerce growth consultancy in the Middle East'
              />
            </Col>
          </Row>
        </div>
      </section>
      {/* What we are */}
      <section>
        <SectionHeader
          title='what we are?'
        />
      </section>
    </div>
);

export default HomePage;

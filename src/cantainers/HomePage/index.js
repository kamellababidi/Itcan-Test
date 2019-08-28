import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Header from '../../components/Header'
import SectionHeader from '../../components/SectionHeader'
import ValueContainer from '../../components/ValueContainer'
import ServiceContainer from '../../components/ServiceContainer'


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
        <div className='who-itcan-services-container'>
          <Row>
              <Col lg={3} md={true}>
                <ServiceContainer
                  img={require('../../public/installs.svg')}
                  title='App Installs'
                  desc='We are experts in increasing and maintaining the quality of App downloads.'
                />
              </Col>
              <Col lg={3} md={true}>
                <ServiceContainer
                    img={require('../../public/awareness.svg')}
                    title='Brand Awareness'
                    desc='We have the right channels to increase your reach in your target locations.'
                />
              </Col>
              <Col lg={3} md={true}>
                <ServiceContainer
                    img={require('../../public/aquisition.svg')}
                    title='Customer Acquisition'
                    desc='We will attract and acquire your target customer base in the region.'
                />
              </Col>
              <Col lg={3} md={true}>
                <ServiceContainer
                    img={require('../../public/revinue.svg')}
                    title='Revenue Generation'
                    desc='We have a proven track record in scaling online region orders and revenue.'
                />
              </Col>
            </Row>
        </div>
      </section>
    </div>
);

export default HomePage;

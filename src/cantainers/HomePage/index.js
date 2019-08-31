import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Header from '../../components/Header'
import SectionHeader from '../../components/SectionHeader'
import ValueContainer from '../../components/ValueContainer'
import ServiceContainer from '../../components/ServiceContainer'
import LocationContainer from '../../components/LocationContainer'
import ClientContainer from '../../components/ClientContainer'
import IndustryContainer from '../../components/IndustryContainer'
import Footer from '../../components/Footer'


const HomePage = () => (
    <div className='home-page-container'>
      <Header/>
      {/* Who itcan */}
      <section>
        <SectionHeader
          title='WHO IS ITCAN?'
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
          title='WHAT WE ARE?'
        />
        <div className='who-itcan-services-container'>
          <Row>
              <Col lg={3} md={true}>
                <ServiceContainer
                  img={require('../../public/installs.svg')}
                  title='App Installs'
                  desc='We are experts in increasing and maintaining quality of App downloads.'
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
      {/* Our locations */}
      <section>
        <SectionHeader
            title='OUR LOCATIONS'
        />
        <div className='itcan-location-container'>
          <Row>
            <Col lg={4} md={true}>
              <LocationContainer
                img={require('../../public/dubai.svg')}
              />
            </Col>
            <Col lg={4} md={true}>
              <LocationContainer
                  img={require('../../public/damam.svg')}
              />
            </Col>
            <Col lg={4} md={true}>
              <LocationContainer
                img={require('../../public/cairo.svg')}
              />
            </Col>
          </Row>
        </div>
      </section>
      {/* Our clients */}
      {
        window.innerWidth <= 500 ?
        <section>
        <SectionHeader
            title='OUR CLIENTS'
        />
        <div className='itcan-clients-container-parent'>
        <div className='itcan-clients-container'>
          <Row>
            <Col lg={true} md={true} sm xs = {6}>
              <ClientContainer
                img={require('../../public/boohoo.png')}
              />
            </Col>
            <Col lg={true} md={true} sm xs = {6}>
              <ClientContainer
                img={require('../../public/oud.svg')}
              />
            </Col>
            <Col lg={true} md={true} sm xs = {6}>
              <ClientContainer
                img={require('../../public/ghawali.png')}
              />
            </Col>
            <Col lg={true} md={true} sm xs = {6}>
              <ClientContainer
                img={require('../../public/loccitane.png')}
              />
            </Col>
          </Row>
        </div>
        <div className='itcan-clients-container'>
          <Row>
            <Col lg={true} md={true} sm xs = {6}>
              <ClientContainer
                img={require('../../public/matic.png')}
              />
            </Col>
            <Col lg={true} md={true} sm xs = {6}>
              <ClientContainer
                img={require('../../public/mikyajy.png')}
              />
            </Col>
            <Col lg={true} md={true} sm xs = {6}>
              <ClientContainer
                img={require('../../public/mumzworld.png')}
              />
            </Col>
            <Col lg={true} md={true} sm xs = {6}>
              <ClientContainer
                img={require('../../public/nisnass.png')}
              />
            </Col>
            <Col lg={true} md={true} sm xs = {6}>
              <ClientContainer
                img={require('../../public/ounass.svg')}
              />
            </Col>
            <Col lg={true} md={true} sm xs = {6}>
              <ClientContainer
                img={require('../../public/tajawal.svg')}
              />
            </Col>
          </Row>
        </div>
        </div>
      </section>
        :
        <section>
        <SectionHeader
            title='OUR CLIENTS'
        />
        <div className='itcan-clients-container-parent'>
        <div className='itcan-clients-container'>
          <Row>
            <Col lg={true} md={true} sm xs = {6}>
              <ClientContainer
                img={require('../../public/boohoo.png')}
              />
            </Col>
            <Col lg={true} md={true} sm xs = {6}>
              <ClientContainer
                img={require('../../public/oud.svg')}
              />
            </Col>
            <Col lg={true} md={true} sm xs = {6}>
              <ClientContainer
                img={require('../../public/ghawali.png')}
              />
            </Col>
            <Col lg={true} md={true} sm xs = {6}>
              <ClientContainer
                img={require('../../public/loccitane.png')}
              />
            </Col>
            <Col lg={true} md={true} sm xs = {6}>
              <ClientContainer
                img={require('../../public/matic.png')}
              />
            </Col>
          </Row>
        </div>
        <div className='itcan-clients-container'>
          <Row>
            <Col lg={true} md={true} sm xs = {6}>
              <ClientContainer
                img={require('../../public/mikyajy.png')}
              />
            </Col>
            <Col lg={true} md={true} sm xs = {6}>
              <ClientContainer
                img={require('../../public/mumzworld.png')}
              />
            </Col>
            <Col lg={true} md={true} sm xs = {6}>
              <ClientContainer
                img={require('../../public/nisnass.png')}
              />
            </Col>
            <Col lg={true} md={true} sm xs = {6}>
              <ClientContainer
                img={require('../../public/ounass.svg')}
              />
            </Col>
            <Col lg={true} md={true} sm xs = {6}>
              <ClientContainer
                img={require('../../public/tajawal.svg')}
              />
            </Col>
          </Row>
        </div>
        </div>
      </section>
      }
      {/* industries */}
      <section>
        <SectionHeader
              title='INDUSTRIES'
        />
        <div className='itcan-industries-container'>
          <Row>
            <Col lg={4} md={4} sm xs = {12}>
              <IndustryContainer
                img={require('../../public/home.png')}
                title='HOME'
              />
            </Col>
            <Col lg={4} md={4} sm xs = {12}>
              <IndustryContainer
                img={require('../../public/electronics.png')}
                title='ELECTRONICS'
              />
            </Col>
            <Col lg={4} md={4} sm xs = {12}>
              <IndustryContainer
                img={require('../../public/travil.png')}
                title='TRAVEL'
              />
            </Col>
          </Row>
        </div>
        <div className='itcan-industries-container'>
          <Row>
            <Col lg={4} md={4} sm xs = {12}>
              <IndustryContainer
                img={require('../../public/fashion.png')}
                title='FASHION'
              />
            </Col>
            <Col lg={4} md={4} sm xs = {12}>
              <IndustryContainer
                img={require('../../public/fragrance.png')}
                title='FRAGRANCE'
              />
            </Col>
            <Col lg={4} md={4} sm xs = {12}>
              <IndustryContainer
                img={require('../../public/cosmetics.png')}
                title='COSMETICS'
              />
            </Col>
          </Row>
        </div>
      </section>
      {/* Footer */}
      <Footer/>
    </div>
);

export default HomePage;

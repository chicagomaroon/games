import React from 'react';
import styled from 'styled-components';
import { Col, Grid, Row } from 'react-styled-flexboxgrid';
import { InnerContainer } from '../../styles';


const FooterContainer = styled.div`
  border-top: 1px solid ${props => props.theme.colors.brightness_80};
`;

const Copyright = styled.p`
  font-size: 1rem;
  display: inline;
  float:left;
`;

const Website = styled.p`
  font-size: 1rem;
  float: right;
  a {
    color: ${props => props.theme.colors.primary}; 
  }
`;

const Footer = () => (
  <FooterContainer>
    <InnerContainer>
      <Grid fluid>
        <Row>
          <Col xs={12}>
            <Copyright>&copy; 2019-Present The Chicago Maroon</Copyright>
            <Website><a href="https://chicagomaroon.com">Go to www.chicagomaroon.com</a></Website>
          </Col>
        </Row>
      </Grid>
    </InnerContainer>
  </FooterContainer>
);

export default Footer;

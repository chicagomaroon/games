import CrosswordListGrid, { CrosswordProps } from '../containers/CrosswordListGrid';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import React from 'react';
import styled from 'styled-components';
import { Col, Grid, Row } from 'react-styled-flexboxgrid';
import { InnerContainer } from '../styles';
import { recordPageview } from '../globals/utils';


const Content = styled.div`
  padding-top: 4rem;
  margin-bottom: 2rem;
`;


interface Props {
  crosswords: CrosswordProps[],
}

const Index = (props: Props) => (
  <>
    <Navbar />
    <Content>
      <InnerContainer>
        <Grid fluid>
          <Row>
            <Col xs={12}>
              <CrosswordListGrid crosswords={props.crosswords} />
            </Col>
          </Row>
        </Grid>
      </InnerContainer>
    </Content>
    <Footer />
  </>
);

/*
 * Read the date, name, and puzzle url from a data file.
 */
Index.getInitialProps = async function () {
  const cwFiles = await import('../data.json');
  const cwPreviews: CrosswordProps[] = await Promise.all(cwFiles.default.map((cwData, index) => {
    const [date, name, url] = cwData
    return { date, name, url, index }
  }));
  cwPreviews.reverse();

  return { crosswords: cwPreviews };
}

Index.componentWillMount = function () {
  recordPageview('/crosswords');
}

export default Index;

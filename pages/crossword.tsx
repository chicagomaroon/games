import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import React from 'react';
import { withRouter } from 'next/router';
import styled from 'styled-components';
import { NextPageContext } from 'next/dist/next-server/lib/utils';
import { recordPageview } from '../globals/utils';

const FrameContainer = styled.iframe`
border:none;
height: 900px;
width: 100% !important;
position: static;
display: block !important;
margin: 0 !important;
`

interface Props {
  url: string
  router: any
}

const Crossword: any = withRouter((props: Props) => (
  <>
    <Navbar />
    <FrameContainer allowFullScreen={true} src={props.url}></FrameContainer>
    <Footer />
  </>
));

Crossword.getInitialProps = async function ({ req, query }: NextPageContext) {
  if (query && query.id) {
      const cwFiles: string[][] = await import('../data.json');
      const id: number = typeof query.id === "string" ? parseInt(query.id) : parseInt(query.id[0]);
      const url = cwFiles[id] && cwFiles[id][2]

      // record pageview if url exists
      if (url !== undefined) {
        recordPageview(`/crosswords/${query.id}`);
      }
      return { url }
  }
  return { url: '' }
}

export default Crossword;

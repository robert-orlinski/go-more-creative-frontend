// import Head from 'next/head';

import { Nav } from '../components/Nav';
import { MainTitle } from '../components/MainTitle';
import { MainWrapper } from '../components/MainWrapper';
import { LinkButton } from '../components/Button/Link';
import { Footer } from '../components/Footer';

const Start = () => (
  <>
    <Nav />
    <MainWrapper theme="center">
      {/* Todo: if today, ideas were fulfilled, show different title */}
      <MainTitle>hey! you have 10 ideas to create!</MainTitle>
      <LinkButton href="/practice">let's go!</LinkButton>
    </MainWrapper>
    <Footer />
  </>
);

export default Start;

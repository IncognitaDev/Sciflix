import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import Header from '../Header';
import Footer from '../Footer';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding-top: 80px;
  padding-bottom: 5%;
  padding-left: 5%;
  padding-right: 5%;

  ${({ paddingAll }) =>
    css`
      padding: ${paddingAll};
    `}
`;

function PageDefault({ children, paddingAll }) {
  return (
    <>
      <Header />
      <Main paddingAll={paddingAll}>{children}</Main>
      <Footer />
    </>
  );
}

PageDefault.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PageDefault;

// @flow

import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Feature from '../layout/Feature';
import GlobalStyle from '../../utils/GlobalStyle';
import theme from '../../utils/theme';
// import media from '../../utils/media';

const Wrapper = styled.div(
  props => `
  min-height: 100vh;
`
);

const Content = styled.div`
  background-color: ${props => props.theme.white};
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  margin-top: 369px;
  padding-top: 53px;
  position: relative;
  z-index: 1;
`;

type Props = {
  children: Array<Object>
};

function Layout(props: Props): React$Node {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <GlobalStyle />

        <Feature />

        <Content>{props.children}</Content>
      </Wrapper>
    </ThemeProvider>
  );
}

export default React.memo(Layout);
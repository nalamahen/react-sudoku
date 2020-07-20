import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from 'styled-components'

import {Content, Title} from './components';
import { unregister } from './core';
import { Globalstyles, theme} from './styles'

ReactDOM.render(
  <>
  <ThemeProvider theme={theme}>
    <Globalstyles />

    <Content>
      <Title>Sudoku</Title>
    </Content>
  </ThemeProvider>
 </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
unregister();

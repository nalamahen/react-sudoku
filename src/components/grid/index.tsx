import React from 'react';

import { Container, Row } from './styles';
import Block from './block';

const Grid: React.FC = () => {
  return (
    <Container>
      {React.Children.toArray(
        [...Array(9)].map((_, rowIndex) => (
          <Row>
            {React.Children.toArray(
              [...Array(9)].map((_, colIndex) => (
                <Block colIndex={colIndex} rowIndex={rowIndex} />
              ))
            )}
          </Row>
        ))
      )}
    </Container>
  );
};

export default Grid;

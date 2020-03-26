// @flow

import React from 'react';
import styled, { ThemeConsumer } from 'styled-components';

const Wrapper = styled.div`
  line-height: 0;
  margin-right: 5px;
`;

type Props = {
  color?: string
};

function MapPin(props: Props): React$Node {
  return (
    <ThemeConsumer>
      {theme => (
        <Wrapper>
          <svg
            width="12"
            height="15"
            viewBox="0 0 12 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 7.5C5.175 7.5 4.5 6.825 4.5 6C4.5 5.175 5.175 4.5 6 4.5C6.825 4.5 7.5 5.175 7.5 6C7.5 6.825 6.825 7.5 6 7.5ZM10.5 6.15C10.5 3.4275 8.5125 1.5 6 1.5C3.4875 1.5 1.5 3.4275 1.5 6.15C1.5 7.905 2.9625 10.23 6 13.005C9.0375 10.23 10.5 7.905 10.5 6.15ZM6 0C9.15 0 12 2.415 12 6.15C12 8.64 9.9975 11.5875 6 15C2.0025 11.5875 0 8.64 0 6.15C0 2.415 2.85 0 6 0Z"
              fill={theme[props.color]}
            />
          </svg>
        </Wrapper>
      )}
    </ThemeConsumer>
  );
}

MapPin.defaultProps = {
  color: 'iconColor'
};

export default React.memo(MapPin);

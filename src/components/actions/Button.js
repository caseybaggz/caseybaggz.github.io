// @flow

import { Link } from 'gatsby';
import styled from 'styled-components';
import media from '../../utils/media';

const Button = styled(Link)(
  (props) => `
  appearance: none;
  background-color: ${props.theme.button};
  border-radius: 30px;
  color: ${props.theme.gray1};
  display: inline-block;
  font-weight: 600;
  padding-bottom: 10.5px;
  padding-left: 21px;
  padding-right: 21px;
  padding-top: 10.5px;
  transition: background-color 250ms ease-out, color 250ms ease-out;
  text-align: center;
  width: ${props.width || 'initial'};

  &:hover {
    color: ${props.theme.button};
    background-color: ${props.theme.black};
  }

  ${media.medium} {
    padding-bottom: 20px;
    padding-top: 20px;
  }
`
);

export default Button;
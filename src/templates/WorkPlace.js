// @flow

import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import HelmetMeta from '../components/layout/HelmetMeta';
import Layout from '../components/layout/Layout';

const Wrapper = styled.div`
  p {
    padding-bottom: 24px;
  }
`;

type Props = {
  data: {
    markdownRemark: {
      html: string,
      frontmatter: {
        date: string,
        title: string
      }
    }
  }
};

function WorkPlace(props: Props): React$Node {
  const { frontmatter, html } = props.data.markdownRemark;

  return (
    <Layout>
      <HelmetMeta />

      <h1>{frontmatter.title}</h1>
      <h2>work template</h2>
      <h6>{frontmatter.date}</h6>
      <Wrapper dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  );
}

export const WorkPlaceQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`;

export default React.memo(WorkPlace);

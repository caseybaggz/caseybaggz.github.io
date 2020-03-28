// @flow

import React from "react";
import HelmetMeta from '../components/layout/HelmetMeta';
import Layout from '../components/layout/Layout';

type Props = {};

function Home(props: Props): React$Node {
  return (
    <Layout>
      <HelmetMeta />
      template
    </Layout>
  );
}

export default React.memo(Home);

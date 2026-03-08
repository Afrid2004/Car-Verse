import React from "react";
import { Helmet } from "react-helmet";

const Title = ({ title }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <link rel="icon" type="image/svg+xml" href="/images/favicon.png" />
    </Helmet>
  );
};

export default Title;

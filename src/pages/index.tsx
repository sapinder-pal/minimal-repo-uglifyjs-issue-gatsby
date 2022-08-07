import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';

export default function Home() {
  return (
    <>
      <Helmet>
        <link rel="canonical" />
      </Helmet>
      <h1>Hi</h1>
      <Link to="/articles/lorem-ipsum">Read Lorem Ipsum</Link>
    </>
  );
}

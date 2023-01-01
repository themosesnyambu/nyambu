import * as React from 'react';
import { Route } from 'react-router-dom';
import Navbar from '../navbar/Navbar';

interface Props {
  Component: JSX.Element;
}

const PageWrapper = (props: Props) => {
  const { Component } = props;
  return (
    <>
      <Navbar />
      <div className="container">{Component}</div>
    </>
  );
};

export default PageWrapper;


// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';

function App() {
  return (
    <div >
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">Funix React App</NavbarBrand>
        </div>
      </Navbar>
      <Menu />
    </div>
  );
}

export default App;

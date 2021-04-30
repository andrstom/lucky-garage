import React from "react";
import { Button } from '../Buttons/Button';
import { Link } from 'react-router-dom';
import './Header.css';
import { headerTexts } from './HeaderTexts.js';
import LocaleContext from "../../context/LocaleContext";

export default function Header() {

  const { locale } = React.useContext(LocaleContext);
  console.log(headerTexts[locale][0].title);
  return (
    <>
      <div className="header">
        <h1>{headerTexts[locale][0].title}</h1>
        <p>{headerTexts[locale][0].description}</p>
        <Button buttonStyle="btn--outline" buttonStyle="btn--large">
          <Link to="+420 776 058 521">+420 776 058 521</Link>
        </Button>
      </div>
    </>
  );
}

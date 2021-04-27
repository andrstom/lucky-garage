import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import LocaleContext from "./context/LocaleContext";

export default function App() {
  const [locale, setLocale] = React.useState('cs')

  const toggleLocale = () => {
    setLocale((locale) => {
      return locale === 'cs' ? 'en' : 'cs'
    })
  }

  const value = React.useMemo(() => ({
    locale,
    toggleLocale
  }), [locale])

  return (
    <>
      <LocaleContext.Provider value={value}>
        <Router>
          <Navbar />
          <Switch>
            <Route path="/" exact />
          </Switch>
        </Router>
      </LocaleContext.Provider>
    </>
  );
}
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import LocaleContext from "./context/LocaleContext"

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
    <LocaleContext.Provider value={value}>
      <section className="App">
        <div className="header">
          <Navbar />
        </div>
        <div className="content">
          <h1>contenjkkkt</h1>
        </div>
        <div className="footer">
          <h1>footer</h1>
        </div>
      </section>
    </LocaleContext.Provider>
  );
}
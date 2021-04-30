import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar'
import Loading from "./components/Loading";
import LocaleContext from "./context/LocaleContext";

// dynamic import
const Home = React.lazy(() => import("./components/Home/Home"));
const Carservice = React.lazy(() => import("./components/Carservice/Carservice"));
const Pneuservice = React.lazy(() => import("./components/Pneuservice/Pneuservice"));

export default function App() {
  const [locale, setLocale] = React.useState("cs");

  const toggleLocale = () => {
    setLocale((locale) => {
      return locale === "cs" ? "en" : "cs";
    });
  };

  const value = React.useMemo(
    () => ({
      locale,
      toggleLocale,
    }),
    [locale]
  );

  return (
    <>
      <LocaleContext.Provider value={value}>
        <Router>
          <Navbar />
          <React.Suspense fallback={<Loading />}>
            <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/carservice" exact component={Carservice}/>
              <Route path="/pneuservice" exact component={Pneuservice}/>
              {<Route render={() => <h1>error 404 (page not found)</h1>} />}
            </Switch>
          </React.Suspense>
        </Router>
      </LocaleContext.Provider>
    </>
  );
}

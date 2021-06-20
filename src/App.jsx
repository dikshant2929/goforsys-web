import { useState, useEffect } from 'react'
import { Navigation } from './components/navigation'
import { Header } from './components/header'
import { Features } from './components/features'
import { About } from './components/about'
import { Services } from './components/services'
import { Gallery } from './components/gallery'
import { Testimonials } from './components/testimonials'
import { Team } from './components/Team'
import { Contact } from './components/contact'
import JsonData from './data/data.json'
import SmoothScroll from 'smooth-scroll'
import ReactGA from 'react-ga';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const App = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData);
    ReactGA.initialize('UA-109706915-1');
    ReactGA.pageview('/home/'+window.location.pathname + window.location.search);
  }, [])

  const Layout = () => (
    <>
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Features data={landingPageData.Features} />
      <Gallery />
      <Testimonials data={landingPageData.Testimonials} />
      {/* <Team data={landingPageData.Team} /> */}
      <Contact data={landingPageData.Contact} ReactGA={ReactGA}/>
    </>
  );
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Layout} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  )
}

export default App

import React from 'react';
import { BrowserRouter , Route , Switch } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects/Projects';
import './App.css'
import './components/Home.scss'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import About from './components/About/About';
import Team from './components/Team/Team';
import News from './components/News/News';
import ItemViewer from './components/ItemViewer';
import MainNavbar from './components/MainNavbar/MainNavbar'
import Contact from './components/Contact/Contact';
import Policies from './components/About/Policies';

function App() {
  return (
    <BrowserRouter >

      <MainNavbar />
      <Header />
      <Switch >
        <Route exact path="/" component={Home} />            
        {/* <Route path="/about" component={About} />             */}
        <Route path="/all-projects" component={Projects} />            
        <Route path="/all-news" component={News} />
        <Route path="/contact" component={Contact} />
        <Route exact path="/policies" component={Policies} />          
        <Route exact path="/news/:id" render={({match}) => (<ItemViewer url={`/news/${match.params.id}`} />)} />          
        <Route exact path="/project/:id" render={({match}) => (<ItemViewer url={`/achievements/${match.params.id}`} />)} />          
        <Route exact path="/member/:id" render={({match}) => (<ItemViewer url={`/organizational-structure/${match.params.id}`} />)} />          
        <Route exact path="/about" render={({match}) => (<ItemViewer url={`/about`} />)} />          
        <Route path="/all-members" component={Team} />                      
      </Switch>
      <Footer />
    </BrowserRouter >
  );
}

export default App;

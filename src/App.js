
import './App.css';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import {BrowserRouter as Router, Route, Switch} from  'react-router-dom'
import TrenerList from './components/TrenerList';
import PodopiecznyList from './components/PodopiecznyList';

function App() {
  return (
    <div>
      <Router>
          <HeaderComponent />
            <div className="container">
              <Switch>
                <Route path = "/" exact component = {TrenerList}></Route>
                <Route path = "/trener" component = {TrenerList}></Route>        
                <Route path = "/podopieczny" component = {PodopiecznyList}></Route>                
              </Switch>
            </div>
          <FooterComponent />
      </Router>
    </div>
  );
}

export default App;

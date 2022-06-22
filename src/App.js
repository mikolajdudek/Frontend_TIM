import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import WardList from './components/WardList';
import HeaderComponent from './components/HeaderComponent';
import AddWard from './components/AddWard';
import UpdateWard from './components/UpdateWard';
import ViewWard from './components/ViewWard';
import AddTrainer from './components/AddTrainer';
import UpdateTrainer from './components/UpdateTrainer';
import ViewTrainer from './components/ViewTrainer';
import TrainerList from './components/TrainerList';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent/>
            <div className="container">
              <Switch>
                <Route path = "/" exact component = {WardList}></Route>
                <Route path = "/wards" component = {WardList}></Route>
                <Route path = "/trainers" component = {TrainerList}></Route>
                <Route path = "/add-ward" component = {AddWard}></Route>
                <Route path = "/update-ward/:id" component = {UpdateWard}></Route>
                <Route path = "/view-ward/:id" component = {ViewWard}></Route>
                <Route path = "/add-trainer/" component = {AddTrainer}></Route>
                <Route path = "/update-trainer/:id" component = {UpdateTrainer}></Route>
                <Route path = "/view-trainer/:id" component = {ViewTrainer}></Route>
                <WardList/>
              </Switch>
            </div> 
              
      </Router>
    </div>
  );
}

export default App;

import './styles/App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';
import DashboardPage from './pages/DashboardPage/DashboardPage';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LoginPage}/>
        <Route path="/signup" exact component={SignupPage}/>
        <Route path="/dashboard/:id" exact component={DashboardPage}/>
        {/*
        <Route path='/dashboard/:id/team' exact component={TeamPage}/>
       */}
      </Switch>
    </BrowserRouter>
  );
}


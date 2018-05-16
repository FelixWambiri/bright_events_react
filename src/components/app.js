import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from './home/landing';
import LoginContainer from './login/LoginContainer';
import SignupContainer from './signup/SignupContainer';
import CreateEventContainer from './events/create/CreateEventContainer';
import NotFound from './home/NotFound';
import EventsLayout from './events/EventsLayout';
import EventList from './events/view/EventList';

const App = () => <div className='ui'>
    <Switch>
        <Route path='/' exact component={Landing} />
        <Route path='/auth/login' exact component={LoginContainer} />
        <Route path='/auth/signup' exact component={SignupContainer} />
        <EventsLayout path='/events/create' exact component={CreateEventContainer} page='create' />
        <EventsLayout path='/events/myEvents' exact component={EventList} page='myEvents' />
        <Route component={NotFound} />
    </Switch>
</div>;

export default App;


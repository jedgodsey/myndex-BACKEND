import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Grommet, Button, Heading } from 'grommet';
import { Notification } from 'grommet-icons';
import AppBar from './components/AppBar';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Crud from './pages/Crud';
import TestIndex from './pages/TestIndex';

const theme = {
  global: {
    colors: {
      brand: '#228BE6'
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

function App() {
  return (
    <Grommet theme={theme}>
      <AppBar>
        <Heading level='3' margin='none'>MyNdex</Heading>
        <Button icon={<Notification />} onClick={() => {}} />
      </AppBar>
      <Switch>
        <Route path='/crud' component={Crud} />
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/test' component={TestIndex} />
        <Route path='/' component={Home} />
      </Switch>
    </Grommet>
  );
}

export default App;
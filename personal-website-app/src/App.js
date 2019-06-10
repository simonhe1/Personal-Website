import React from 'react';
import { Link, Switch, Route} from 'react-router-dom';
import Navbar from './components/navbar';
import Login from './components/login';
import Admin from './components/admin';
import Logout from './components/logout';

class App extends Component {
  state = {
    
  }

  render (){
    return(
      <React.Fragment>
        <Switch>
          <Navbar
            userLoggedIn
          />
          <Route exact path="/" component={Login} />
          <Route exact path="/" compoennt={} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;

import React from 'react';
import { Route, Switch} from 'react-router-dom';
import UserDetails from './Components/Pages/UserDetails';
import UserList from './Components/Pages/UserList';
import SignUpForm from './Components/Pages/SignUpForm';

class Routes extends React.Component{
    render(){
        return(
                <Switch>
                    <Route exact path="/" component={UserList}/>
                    <Route path="/user-details" component={UserDetails}/>
                    <Route path="/form" component={SignUpForm}/>
               </Switch>
            
        );
    }
}

export default Routes;
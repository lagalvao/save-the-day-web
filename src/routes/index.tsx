import { Switch, BrowserRouter } from 'react-router-dom';
import Route from './Route';
import Donation from '../pages/Donation';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Request from '../pages/Request';
import Schedule from '../pages/Schedule';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <Route path="/dashboard" component={Dashboard} isPrivate />
                <Route path="/donation" component={Donation} isPrivate />
                <Route path="/notification" component={Request} isPrivate />
                <Route path="/schedule" component={Schedule} isPrivate />
                <Route path="/profile" component={Profile} isPrivate />
            </Switch>
        </BrowserRouter>
    );
}
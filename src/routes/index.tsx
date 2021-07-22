import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Donation from '../pages/Donation';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Request from '../pages/Request';
import Schedule from '../pages/Schedule';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

export default function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={SignIn} />
                <Route path="/signup" component={SignUp} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/donation" component={Donation} />
                <Route path="/notification" component={Request} />
                <Route path="/schedule" component={Schedule} />
                <Route path="/profile" component={Profile} />
            </Switch>
        </BrowserRouter>
    );
}
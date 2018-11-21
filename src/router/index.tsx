import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as React from 'react';
import routeConfig from '~/router/route';
export default (
    <Router>
        <Switch>
            {
                routeConfig.map(it => <Route key={it.path} {...it} />)
            }
        </Switch>
    </Router>
);

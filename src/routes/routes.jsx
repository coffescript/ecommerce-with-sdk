import React from 'react';

import Marketplace from '../pages/Marketplace';
import PayWithButton from '../pages/PayWithButton';
import ManualPayment from '../pages/ManualPayment';

// Route Specific
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export const Routes = () => {
    return (
        <>
            <Router>
                <Switch>
                    <Route exact path='/' component={Marketplace} />
                    <Route exact path='/pay' component={PayWithButton} />
                    <Route exact path='/manual' component={ManualPayment} />
                </Switch>
            </Router>
        </>
    )
}
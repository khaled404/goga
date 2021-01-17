import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../components/app';
import HomePage from '../components/home';

export default function HomeRoute() {
    return (
        <Switch>
            <Layout>
                <Route exact path={ `${process.env.PUBLIC_URL}/` } component={ HomePage } />
            </Layout>
        </Switch>
    );
}
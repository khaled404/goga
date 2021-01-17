import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import LoadingOverlay from '../components/features/loading-overlay';

import { scrollTop } from '../utils';

const ElementPages = React.lazy( () => import( './elements-route.js' ) );
const ProductPages = React.lazy( () => import( './products-route.js' ) );
const ShopPages = React.lazy( () => import( './shop-route.js' ) );
const BlogPages = React.lazy( () => import( './blogs-route.js' ) );
const OtherPages = React.lazy( () => import( './others-route.js' ) );
const HomePage = React.lazy( () => import( './home-route.js' ) );

export default function AppRoot() {
    useEffect( () => {
        scrollTop();
    }, [] )

    return (
        <React.Suspense fallback={ <LoadingOverlay /> }>
            <Switch>
                <Route path={ `${process.env.PUBLIC_URL}/elements` } component={ ElementPages } />
                <Route path={ `${process.env.PUBLIC_URL}/product` } component={ ProductPages } />
                <Route path={ `${process.env.PUBLIC_URL}/shop` } component={ ShopPages } />
                <Route path={ `${process.env.PUBLIC_URL}/blog` } component={ BlogPages } />
                <Route path={ `${process.env.PUBLIC_URL}/pages` } component={ OtherPages } />
                <Route path={ `${process.env.PUBLIC_URL}/` } component={ HomePage } />
            </Switch>
        </React.Suspense>
    )
}
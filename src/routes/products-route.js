import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../components/app';
import Default from '../components/pages/products/default';
import Centered from '../components/pages/products/centered';
import ExtendedInfo from '../components/pages/products/extended-info';
import Gallery from '../components/pages/products/gallery';
import StickyInfo from '../components/pages/products/sticky-info';
import Sidebar from '../components/pages/products/sidebar';
import Fullwidth from '../components/pages/products/fullwidth';
import Masonry from '../components/pages/products/masonry';

export default function ProductsRoute() {
    return (
        <Switch>
            <Layout>
                <Route exact path={ `${process.env.PUBLIC_URL}/product/default/:id` } component={ Default } />
                <Route exact path={ `${process.env.PUBLIC_URL}/product/centered/:id` } component={ Centered } />
                <Route exact path={ `${process.env.PUBLIC_URL}/product/extended/:id` } component={ ExtendedInfo } />
                <Route exact path={ `${process.env.PUBLIC_URL}/product/gallery/:id` } component={ Gallery } />
                <Route exact path={ `${process.env.PUBLIC_URL}/product/sticky/:id` } component={ StickyInfo } />
                <Route exact path={ `${process.env.PUBLIC_URL}/product/sidebar/:id` } component={ Sidebar } />
                <Route exact path={ `${process.env.PUBLIC_URL}/product/fullwidth/:id` } component={ Fullwidth } />
                <Route exact path={ `${process.env.PUBLIC_URL}/product/masonry/:id` } component={ Masonry } />
            </Layout>
        </Switch>
    );
}
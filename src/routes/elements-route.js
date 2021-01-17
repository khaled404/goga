import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../components/app';
import Banners from '../components/pages/elements/banners';
import Buttons from '../components/pages/elements/buttons';
import Products from '../components/pages/elements/products';
import Typography from '../components/pages/elements/typography';
import Titles from '../components/pages/elements/titles';
import VideoBanners from '../components/pages/elements/video-banners';
import Categories from '../components/pages/elements/categories';
import Accordions from '../components/pages/elements/accordions';
import Tabs from '../components/pages/elements/tabs';
import Testimonials from '../components/pages/elements/testimonials';
import BlogPosts from '../components/pages/elements/blog-posts';
import Portfolios from '../components/pages/elements/portfolios';
import CTA from '../components/pages/elements/cta';
import IconBoxes from '../components/pages/elements/icon-boxes';
import ElementList from '../components/pages/elements/element-list';

export default function ElementsRoute() {
    return (
        <Switch>
            <Layout>
                <Route exact path={ `${process.env.PUBLIC_URL}/elements/banners` } component={ Banners } />
                <Route exact path={ `${process.env.PUBLIC_URL}/elements/buttons` } component={ Buttons } />
                <Route exact path={ `${process.env.PUBLIC_URL}/elements/products` } component={ Products } />
                <Route exact path={ `${process.env.PUBLIC_URL}/elements/typography` } component={ Typography } />
                <Route exact path={ `${process.env.PUBLIC_URL}/elements/titles` } component={ Titles } />
                <Route exact path={ `${process.env.PUBLIC_URL}/elements/categories` } component={ Categories } />
                <Route exact path={ `${process.env.PUBLIC_URL}/elements/video-banners` } component={ VideoBanners } />
                <Route exact path={ `${process.env.PUBLIC_URL}/elements/accordions` } component={ Accordions } />
                <Route exact path={ `${process.env.PUBLIC_URL}/elements/tabs` } component={ Tabs } />
                <Route exact path={ `${process.env.PUBLIC_URL}/elements/testimonials` } component={ Testimonials } />
                <Route exact path={ `${process.env.PUBLIC_URL}/elements/blog-posts` } component={ BlogPosts } />
                <Route exact path={ `${process.env.PUBLIC_URL}/elements/portfolios` } component={ Portfolios } />
                <Route exact path={ `${process.env.PUBLIC_URL}/elements/cta` } component={ CTA } />
                <Route exact path={ `${process.env.PUBLIC_URL}/elements/icon-boxes` } component={ IconBoxes } />
                <Route exact path={ `${process.env.PUBLIC_URL}/elements` } />
                <ElementList />
            </Layout>
        </Switch>
    );
}
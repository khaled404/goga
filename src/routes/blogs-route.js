import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from '../components/app';
import Classic from '../components/pages/blogs/classic';
import Listing from '../components/pages/blogs/listing';
import Grid2Cols from '../components/pages/blogs/grid-2cols';
import Grid3Cols from '../components/pages/blogs/grid-3cols';
import Grid4Cols from '../components/pages/blogs/grid-4cols';
import GridSidebar from '../components/pages/blogs/grid-sidebar';
import Masonry2Cols from '../components/pages/blogs/masonry-2cols';
import Masonry3Cols from '../components/pages/blogs/masonry-3cols';
import Masonry4Cols from '../components/pages/blogs/masonry-4cols';
import MasonrySidebar from '../components/pages/blogs/masonry-sidebar';
import MaskGrid from '../components/pages/blogs/mask-grid';
import MaskMasonry from '../components/pages/blogs/mask-masonry';
import SingleDefault from '../components/pages/blogs/single-default';
import SingleFwSidebar from '../components/pages/blogs/single-fw-sidebar';
import SingleNoSidebar from '../components/pages/blogs/single-fw';

export default function BlogsRoute() {
    return (
        <Switch>
            <Layout>
                <Route exact path={ `${process.env.PUBLIC_URL}/blog/classic` } component={ Classic } />
                <Route exact path={ `${process.env.PUBLIC_URL}/blog/listing` } component={ Listing } />
                <Route exact path={ `${process.env.PUBLIC_URL}/blog/grid/2cols` } component={ Grid2Cols } />
                <Route exact path={ `${process.env.PUBLIC_URL}/blog/grid/3cols` } component={ Grid3Cols } />
                <Route exact path={ `${process.env.PUBLIC_URL}/blog/grid/4cols` } component={ Grid4Cols } />
                <Route exact path={ `${process.env.PUBLIC_URL}/blog/grid/sidebar` } component={ GridSidebar } />
                <Route exact path={ `${process.env.PUBLIC_URL}/blog/masonry/2cols` } component={ Masonry2Cols } />
                <Route exact path={ `${process.env.PUBLIC_URL}/blog/masonry/3cols` } component={ Masonry3Cols } />
                <Route exact path={ `${process.env.PUBLIC_URL}/blog/masonry/4cols` } component={ Masonry4Cols } />
                <Route exact path={ `${process.env.PUBLIC_URL}/blog/masonry/sidebar` } component={ MasonrySidebar } />
                <Route exact path={ `${process.env.PUBLIC_URL}/blog/mask/grid` } component={ MaskGrid } />
                <Route exact path={ `${process.env.PUBLIC_URL}/blog/mask/masonry` } component={ MaskMasonry } />
                <Route exact path={ `${process.env.PUBLIC_URL}/blog/single/:id` } component={ SingleDefault } />
                <Route exact path={ `${process.env.PUBLIC_URL}/blog/single-2/:id` } component={ SingleNoSidebar } />
                <Route exact path={ `${process.env.PUBLIC_URL}/blog/single-3/:id` } component={ SingleFwSidebar } />
            </Layout>
        </Switch>
    )
}
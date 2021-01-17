import React from 'react';
import { Helmet } from 'react-helmet';

// import Custom Components
import PageHeader from '../../common/page-header';
import Breadcrumb from '../../common/breadcrumb';
import PostTwo from '../../features/post/post-two';
import PostThree from '../../features/post/post-three';
import PostFour from '../../features/post/post-four';

// import post data
import posts from '../../../mock_data/posts';

function BlogPosts() {
	return (
		<>
			<Helmet>
				<title>Molla React eCommerce Template | Blog Posts</title>
			</Helmet>

			<h1 className="d-none">Molla React eCommerce Template - Blog Posts</h1>

			<div className="main">
				<PageHeader title="Blog Posts" subTitle="Elements" />
				<Breadcrumb title="Blog Posts" parent1={ [ "Elements", "elements" ] } />

				<div className="page-content">
					<div className="container">

						<h2 className="title text-center mb-2">Classic</h2>

						<PostTwo post={ posts[ 0 ] } />
						<PostTwo post={ posts[ 1 ] } type="video" />

						<hr className="mb-5" />

						<h2 className="title text-center mb-2">Grid 2 Columns</h2>

						<div className="row max-col-2">
							<div className="col-md-6">
								<PostThree post={ posts[ 5 ] } author={ true } />
							</div>

							<div className="col-md-6">
								<PostThree post={ posts[ 6 ] } author={ true } />
							</div>
						</div>

						<hr className="mb-5" />

						<h2 className="title text-center mb-2">Grid 3 Columns</h2>

						<div className="row justify-content-center">
							<div className="col-sm-6 col-md-4">
								<PostThree post={ posts[ 7 ] } />
							</div>

							<div className="col-sm-6 col-md-4">
								<PostThree post={ posts[ 8 ] } />
							</div>

							<div className="col-sm-6 col-md-4">
								<PostThree post={ posts[ 9 ] } />
							</div>

						</div>

						<hr className="mb-5" />

						<h2 className="title text-center mb-2">Grid 4 Columns</h2>

						<div className="row justify-content-center">
							<div className="col-sm-6 col-lg-3">
								<PostThree post={ posts[ 7 ] } />
							</div>
							<div className="col-sm-6 col-lg-3">
								<PostThree post={ posts[ 8 ] } />
							</div>
							<div className="col-sm-6 col-lg-3">
								<PostThree post={ posts[ 9 ] } />
							</div>
							<div className="col-sm-6 col-lg-3">
								<PostThree post={ posts[ 10 ] } />
							</div>

						</div>

						<hr className="mb-5" />

						<h2 className="title text-center mb-2">Grid 3 Columns <span className="title-separator">/</span> Mask</h2>

						<div className="row justify-content-center">
							<div className="col-sm-6 col-md-4">
								<PostFour post={ posts[ 11 ] } />
							</div>
							<div className="col-sm-6 col-md-4">
								<PostFour post={ posts[ 12 ] } type="video" />
							</div>
							<div className="col-sm-6 col-md-4">
								<PostFour post={ posts[ 13 ] } type="gallery" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default React.memo( BlogPosts );
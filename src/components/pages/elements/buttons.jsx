import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// import Custom Components
import PageHeader from '../../common/page-header';
import Breadcrumb from '../../common/breadcrumb';
import { parallax } from '../../../utils';

export default function Buttons() {
	useEffect( () => {
		document.addEventListener( 'scroll', parallax );

		return () => {
			document.removeEventListener( 'scroll', parallax );
		}
	}, [] )

	return (
		<>
			<Helmet>
				<title>Molla React eCommerce Template | Buttons</title>
			</Helmet>

			<h1 className="d-none">Molla React eCommerce Template - Buttons</h1>

			<div className="main">
				<PageHeader title="Buttons" subTitle="Elements" />
				<Breadcrumb title="Buttons" parent1={ [ "Elements", "elements" ] } />

				<div className="page-content">
					<div className="container">
						<h2 className="title">Default Style</h2>

						<div className="row">
							<div className="col-6 col-lg-4 col-xl-2">
								<div className="btn-wrap">
									<span>Rounded Corners Style</span>
									<Link to="#" className="btn btn-primary btn-rounded">Button text</Link>
								</div>
							</div>

							<div className="col-6 col-lg-4 col-xl-2">
								<div className="btn-wrap">
									<span>Square Style</span>
									<Link to="#" className="btn btn-primary">Button text</Link>
								</div>
							</div>

							<div className="col-6 col-lg-4 col-xl-2">
								<div className="btn-wrap">
									<span>Round Style</span>
									<Link to="#" className="btn btn-primary btn-round">Button text</Link>
								</div>
							</div>
						</div>

						<hr className="mt-3 mb-4" />

						<h2 className="title">Border Style</h2>

						<div className="row">
							<div className="col-6 col-lg-4 col-xl-2">
								<div className="btn-wrap">
									<span>Rounded Corners Style</span>
									<Link to="#" className="btn btn-outline-primary btn-rounded">Button text</Link>
								</div>
							</div>

							<div className="col-6 col-lg-4 col-xl-2">
								<div className="btn-wrap">
									<span>Square Style</span>
									<Link to="#" className="btn btn-outline-primary">Button text</Link>
								</div>
							</div>

							<div className="col-6 col-lg-4 col-xl-2">
								<div className="btn-wrap">
									<span>Round Style</span>
									<Link to="#" className="btn btn-outline-primary btn-round">Button text</Link>
								</div>
							</div>

							<div className="col-6 col-lg-4 col-xl-2">
								<div className="btn-wrap">
									<span>Rounded Corners Style</span>
									<Link to="#" className="btn btn-outline-dark btn-rounded">Button text</Link>
								</div>
							</div>

							<div className="col-6 col-lg-4 col-xl-2">
								<div className="btn-wrap">
									<span>Square Style</span>
									<Link to="#" className="btn btn-outline-dark">Button text</Link>
								</div>
							</div>

							<div className="col-6 col-lg-4 col-xl-2">
								<div className="btn-wrap">
									<span>Round Style</span>
									<Link to="#" className="btn btn-outline-dark btn-round">Button text</Link>
								</div>
							</div>
						</div>

						<hr className="mt-3 mb-4" />
						<h2 className="title">Button With Icon Style</h2>

						<div className="row">
							<div className="col-6 col-lg-4 col-xl-2">
								<div className="btn-wrap">
									<span>Rounded Corners Style</span>
									<Link to="#" className="btn btn-primary btn-rounded"><span>Button text</span><i className="icon-long-arrow-right"></i></Link>
								</div>
							</div>

							<div className="col-6 col-lg-4 col-xl-2">
								<div className="btn-wrap">
									<span>Square Style</span>
									<Link to="#" className="btn btn-primary"><span>Button text</span><i className="icon-long-arrow-right"></i></Link>
								</div>
							</div>

							<div className="col-6 col-lg-4 col-xl-2">
								<div className="btn-wrap">
									<span>Round Style</span>
									<Link to="#" className="btn btn-primary btn-round"><span>Button text</span><i className="icon-long-arrow-right"></i></Link>
								</div>
							</div>

							<div className="col-6 col-lg-4 col-xl-2">
								<div className="btn-wrap">
									<span>Rounded Corners Style</span>
									<Link to="#" className="btn btn-primary btn-rounded"><i className="icon-long-arrow-right"></i><span>Button text</span></Link>
								</div>
							</div>

							<div className="col-6 col-lg-4 col-xl-2">
								<div className="btn-wrap">
									<span>Square Style</span>
									<Link to="#" className="btn btn-primary"><i className="icon-long-arrow-right"></i><span>Button text</span></Link>
								</div>
							</div>

							<div className="col-6 col-lg-4 col-xl-2">
								<div className="btn-wrap">
									<span>Round Style</span>
									<Link to="#" className="btn btn-primary btn-round"><i className="icon-long-arrow-right"></i><span>Button text</span></Link>
								</div>
							</div>
						</div>

						<hr className="mt-3 mb-4" />

						<h2 className="title">Border Style With Icons</h2>

						<div className="row">
							<div className="col-6 col-lg-4 col-xl-2">
								<div className="btn-wrap">
									<span>Rounded Corners Style</span>
									<Link to="#" className="btn btn-outline-primary btn-rounded"><span>Button text</span><i className="icon-long-arrow-right"></i></Link>
								</div>
							</div>

							<div className="col-6 col-lg-4 col-xl-2">
								<div className="btn-wrap">
									<span>Square Style</span>
									<Link to="#" className="btn btn-outline-primary"><span>Button text</span><i className="icon-long-arrow-right"></i></Link>
								</div>
							</div>

							<div className="col-6 col-lg-4 col-xl-2">
								<div className="btn-wrap">
									<span>Round Style</span>
									<Link to="#" className="btn btn-outline-primary btn-round"><span>Button text</span><i className="icon-long-arrow-right"></i></Link>
								</div>
							</div>

							<div className="col-6 col-lg-4 col-xl-2">
								<div className="btn-wrap">
									<span>Rounded Corners Style</span>
									<Link to="#" className="btn btn-outline-primary btn-rounded"><i className="icon-long-arrow-right"></i><span>Button text</span></Link>
								</div>
							</div>

							<div className="col-6 col-lg-4 col-xl-2">
								<div className="btn-wrap">
									<span>Square Style</span>
									<Link to="#" className="btn btn-outline-primary"><i className="icon-long-arrow-right"></i><span>Button text</span></Link>
								</div>
							</div>

							<div className="col-6 col-lg-4 col-xl-2">
								<div className="btn-wrap">
									<span>Round Style</span>
									<Link to="#" className="btn btn-outline-primary btn-round"><i className="icon-long-arrow-right"></i><span>Button text</span></Link>
								</div>
							</div>
						</div>

						<div className="row">
							<div className="col-6 col-lg-4 col-xl-2">
								<div className="btn-wrap">
									<span>Rounded Corners Style</span>
									<Link to="#" className="btn btn-outline-dark btn-rounded"><span>Button text</span><i className="icon-long-arrow-right"></i></Link>
								</div>
							</div>

							<div className="col-6 col-lg-4 col-xl-2">
								<div className="btn-wrap">
									<span>Square Style</span>
									<Link to="#" className="btn btn-outline-dark"><span>Button text</span><i className="icon-long-arrow-right"></i></Link>
								</div>
							</div>

							<div className="col-6 col-lg-4 col-xl-2">
								<div className="btn-wrap">
									<span>Round Style</span>
									<Link to="#" className="btn btn-outline-dark btn-round"><span>Button text</span><i className="icon-long-arrow-right"></i></Link>
								</div>
							</div>

							<div className="col-6 col-lg-4 col-xl-2">
								<div className="btn-wrap">
									<span>Rounded Corners Style</span>
									<Link to="#" className="btn btn-outline-dark btn-rounded"><i className="icon-long-arrow-right"></i><span>Button text</span></Link>
								</div>
							</div>

							<div className="col-6 col-lg-4 col-xl-2">
								<div className="btn-wrap">
									<span>Square Style</span>
									<Link to="#" className="btn btn-outline-dark"><i className="icon-long-arrow-right"></i><span>Button text</span></Link>
								</div>
							</div>

							<div className="col-6 col-lg-4 col-xl-2">
								<div className="btn-wrap">
									<span>Round Style</span>
									<Link to="#" className="btn btn-outline-dark btn-round"><i className="icon-long-arrow-right"></i><span>Button text</span></Link>
								</div>
							</div>
						</div>

						<hr className="mt-3 mb-4" />

						<h2 className="title">Buttons With Shadow Style</h2>

						<div className="row">
							<div className="col-6 col-lg-4 col-xl-2">
								<div className="btn-wrap">
									<span>Rounded Corners Style</span>
									<Link to="#" className="btn btn-primary btn-rounded btn-shadow">Button text</Link>
								</div>
							</div>

							<div className="col-6 col-lg-4 col-xl-2">
								<div className="btn-wrap">
									<span>Square Style</span>
									<Link to="#" className="btn btn-primary btn-shadow">Button text</Link>
								</div>
							</div>

							<div className="col-6 col-lg-4 col-xl-2">
								<div className="btn-wrap">
									<span>Round Style</span>
									<Link to="#" className="btn btn-primary btn-round btn-shadow">Button text</Link>
								</div>
							</div>
						</div>

						<div className="row">
							<div className="col-6 col-lg-4 col-xl-2">
								<div className="btn-wrap">
									<span>Rounded Corners Style</span>
									<Link to="#" className="btn btn-primary btn-rounded btn-shadow"><span>Button text</span><i className="icon-long-arrow-right"></i></Link>
								</div>
							</div>

							<div className="col-6 col-lg-4 col-xl-2">
								<div className="btn-wrap">
									<span>Square Style</span>
									<Link to="#" className="btn btn-primary btn-shadow"><span>Button text</span><i className="icon-long-arrow-right"></i></Link>
								</div>
							</div>

							<div className="col-6 col-lg-4 col-xl-2">
								<div className="btn-wrap">
									<span>Round Style</span>
									<Link to="#" className="btn btn-primary btn-round btn-shadow"><span>Button text</span><i className="icon-long-arrow-right"></i></Link>
								</div>
							</div>

							<div className="col-6 col-lg-4 col-xl-2">
								<div className="btn-wrap">
									<span>Rounded Corners Style</span>
									<Link to="#" className="btn btn-primary btn-rounded btn-shadow"><i className="icon-long-arrow-right"></i><span>Button text</span></Link>
								</div>
							</div>

							<div className="col-6 col-lg-4 col-xl-2">
								<div className="btn-wrap">
									<span>Square Style</span>
									<Link to="#" className="btn btn-primary btn-shadow"><i className="icon-long-arrow-right"></i><span>Button text</span></Link>
								</div>
							</div>

							<div className="col-6 col-lg-4 col-xl-2">
								<div className="btn-wrap">
									<span>Round Style</span>
									<Link to="#" className="btn btn-primary btn-round btn-shadow"><i className="icon-long-arrow-right"></i><span>Button text</span></Link>
								</div>
							</div>
						</div>

						<hr className="mt-3 mb-4" />

						<h2 className="title">Simple Button Styles</h2>

						<div className="row">
							<div className="col-12">
								<Link to="#" className="btn btn-link">Button Text</Link>
								<Link to="#" className="btn btn-link"><span>Button Text</span><i className="icon-long-arrow-right"></i></Link>
								<Link to="#" className="btn btn-link"><i className="icon-long-arrow-right"></i><span>Button Text</span></Link>

								<Link to="#" className="btn btn-link btn-link-dark">Button Text</Link>
								<Link to="#" className="btn btn-link btn-link-dark"><span>Button Text</span><i className="icon-long-arrow-right"></i></Link>
								<Link to="#" className="btn btn-link btn-link-dark"><i className="icon-long-arrow-right"></i><span>Button Text</span></Link>
							</div>
						</div>

						<hr className="mt-3 mb-1" />
					</div>
				</div>

				<div className="container">
					<h2 className="title mb-3">Button on Backgrounds</h2>
				</div>

				<div className="bg-image bg-overlay pt-5 pb-6 mb-5 bg-parallax" style={ { backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/backgrounds/bg-large.jpg)` } }>
					<div className="container">
						<div className="row">
							<div className="col-6 col-lg-4 col-xl-2">
								<div className="btn-wrap">
									<span>Rounded Corners Style</span>
									<Link to="#" className="btn btn-primary btn-rounded">Button text</Link>
								</div>
							</div>

							<div className="col-6 col-lg-4 col-xl-2">
								<div className="btn-wrap">
									<span>Square Style</span>
									<Link to="#" className="btn btn-primary">Button text</Link>
								</div>
							</div>

							<div className="col-6 col-lg-4 col-xl-2">
								<div className="btn-wrap">
									<span>Round Style</span>
									<Link to="#" className="btn btn-primary btn-round">Button text</Link>
								</div>
							</div>
						</div>

						<div className="mb-2"></div>

						<div className="row">
							<div className="col-6 col-lg-4 col-xl-2">
								<div className="btn-wrap">
									<span>Rounded Corners Style</span>
									<Link to="#" className="btn btn-outline-primary btn-rounded">Button text</Link>
								</div>
							</div>

							<div className="col-6 col-lg-4 col-xl-2">
								<div className="btn-wrap">
									<span>Square Style</span>
									<Link to="#" className="btn btn-outline-primary">Button text</Link>
								</div>
							</div>

							<div className="col-6 col-lg-4 col-xl-2">
								<div className="btn-wrap">
									<span>Round Style</span>
									<Link to="#" className="btn btn-outline-primary btn-round">Button text</Link>
								</div>
							</div>

							<div className="col-6 col-lg-4 col-xl-2">
								<div className="btn-wrap">
									<span>Rounded Corners Style</span>
									<Link to="#" className="btn btn-outline-dark btn-rounded">Button text</Link>
								</div>
							</div>

							<div className="col-6 col-lg-4 col-xl-2">
								<div className="btn-wrap">
									<span>Square Style</span>
									<Link to="#" className="btn btn-outline-dark">Button text</Link>
								</div>
							</div>

							<div className="col-6 col-lg-4 col-xl-2">
								<div className="btn-wrap">
									<span>Round Style</span>
									<Link to="#" className="btn btn-outline-dark btn-round">Button text</Link>
								</div>
							</div>
						</div>

						<div className="mb-2"></div>

						<div className="row">
							<div className="col-12">
								<Link to="#" className="btn btn-link">Button Text</Link>
								<Link to="#" className="btn btn-link"><span>Button Text</span><i className="icon-long-arrow-right"></i></Link>
								<Link to="#" className="btn btn-link"><i className="icon-long-arrow-right"></i><span>Button Text</span></Link>

								<Link to="#" className="btn btn-link btn-link-dark">Button Text</Link>
								<Link to="#" className="btn btn-link btn-link-dark"><span>Button Text</span><i className="icon-long-arrow-right"></i></Link>
								<Link to="#" className="btn btn-link btn-link-dark"><i className="icon-long-arrow-right"></i><span>Button Text</span></Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
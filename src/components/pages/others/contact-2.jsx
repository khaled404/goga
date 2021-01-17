import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import Breadcrumb from '../../common/breadcrumb';
import PageHeader from '../../common/page-header';

function ContactTwo() {
	return (
		<div className="main">
			<Helmet>
				<title>Molla React Ecommerce - Contact Page</title>
			</Helmet>

			<h1 className="d-none">Molla React Ecommerce - Contact Page</h1>

			<PageHeader title="Contact us 2" subTitle="Pages" />
			<Breadcrumb title="Contact Us 2" parent1={ [ "pages", "pages/about" ] } adClass="border-0 mb-0" />

			<div className="page-content">
				<div id="map" className="mb-5"></div>

				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<div className="contact-box text-center">
								<h3>Office</h3>
								<address>1 New York Plaza, New York, <br />NY 10004, USA</address>
							</div>
						</div>

						<div className="col-md-4">
							<div className="contact-box text-center">
								<h3>Start a Conversation</h3>

								<div><Link to="mailto:#">info@Molla.com</Link></div>
								<div><Link to="tel:#">+1 987-876-6543</Link>, <Link to="tel:#">+1 987-976-1234</Link></div>
							</div>
						</div>

						<div className="col-md-4">
							<div className="contact-box text-center">
								<h3>Social</h3>

								<div className="social-icons social-icons-color justify-content-center">
									<Link to="#" className="social-icon social-facebook" title="Facebook" target="_blank"><i className="icon-facebook-f"></i></Link>
									<Link to="#" className="social-icon social-twitter" title="Twitter" target="_blank"><i className="icon-twitter"></i></Link>
									<Link to="#" className="social-icon social-instagram" title="Instagram" target="_blank"><i className="icon-instagram"></i></Link>
									<Link to="#" className="social-icon social-youtube" title="Youtube" target="_blank"><i className="icon-youtube"></i></Link>
									<Link to="#" className="social-icon social-pinterest" title="Pinterest" target="_blank"><i className="icon-pinterest"></i></Link>
								</div>
							</div>
						</div>
					</div>

					<hr className="mt-3 mb-5 mt-md-1" />
					<div className="touch-container row justify-content-center">
						<div className="col-md-9 col-lg-7">
							<div className="text-center">
								<h2 className="title mb-1">Get In Touch</h2>
								<p className="lead text-primary">
									We collaborate with ambitious brands and people; we’d love to build something great together.
							</p>
								<p className="mb-3">Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.</p>
							</div>

							<form action="#" className="contact-form mb-2">
								<div className="row">
									<div className="col-sm-4">
										<label htmlFor="cname" className="sr-only">Name</label>
										<input type="text" className="form-control" id="cname" placeholder="Name *" required />
									</div>

									<div className="col-sm-4">
										<label htmlFor="cemail" className="sr-only">Name</label>
										<input type="email" className="form-control" id="cemail" placeholder="Email *" required />
									</div>

									<div className="col-sm-4">
										<label htmlFor="cphone" className="sr-only">Phone</label>
										<input type="tel" className="form-control" id="cphone" placeholder="Phone" />
									</div>
								</div>

								<label htmlFor="csubject" className="sr-only">Subject</label>
								<input type="text" className="form-control" id="csubject" placeholder="Subject" />

								<label htmlFor="cmessage" className="sr-only">Message</label>
								<textarea className="form-control" cols="30" rows="4" id="cmessage" required placeholder="Message *"></textarea>

								<div className="text-center">
									<button type="submit" className="btn btn-outline-primary-2 btn-minwidth-sm">
										<span>SUBMIT</span>
										<i className="icon-long-arrow-right"></i>
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>

		</div>
	)
}

export default React.memo( ContactTwo );
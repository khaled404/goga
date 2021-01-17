import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

// import Custom Components
import PageHeader from '../../common/page-header';
import Breadcrumb from '../../common/breadcrumb';
import OwlCarousel from '../../features/owl-carousel';
import Testimonial from '../../features/testimonial';

// import utils
import { parallax } from '../../../utils';

// import settings
import { mainSlider5, mainSlider6, mainSlider7 } from '../../settings';

function Testimonials() {
    useEffect( () => {
        document.addEventListener( "scroll", parallax, true );

        return () => {
            document.removeEventListener( "scroll", parallax );
        }
    }, [] )

    return (
        <>
            <Helmet>
                <title>Molla React eCommerce Template | Testimonials</title>
            </Helmet>

            <h1 className="d-none">Molla React eCommerce Template - Testimonials</h1>

            <div className="main">
                <PageHeader title="Testimonials" subTitle="Elements" />
                <Breadcrumb title="Testimonials" parent1={ [ "Elements", "elements" ] } />

                <div className="page-content">
                    <div className="container">
                        <h2 className="title text-center mb-3">Quote Sign <span className="title-separator">/</span> Centered Align</h2>

                        <OwlCarousel adClass="owl-theme owl-testimonials cols-1" carouselOptions={ mainSlider5 } carouselId="testi_one">
                            <Testimonial
                                content="“ Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. ”"
                                name="Jenson Gregory"
                                job="Customer" />
                            <Testimonial
                                content="“ Impedit, ratione sequi, sunt incidunt magnam et. Delectus obcaecati optio eius error libero perferendis nesciunt atque dolores magni recusandae! Doloremque quidem error eum quis similique doloribus natus qui ut ipsum.Velit quos ipsa exercitationem, vel unde obcaecati impedit eveniet non. ”"
                                name="Damon Stone"
                                job="Customer" />
                            <Testimonial
                                content="“ Molestias animi illo natus ut quod neque ad accusamus praesentium fuga! Dolores odio alias sapiente odit delectus quasi, explicabo a, modi voluptatibus. Perferendis perspiciatis, voluptate, distinctio earum veritatis animi tempora eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. ”"
                                name="John Smith"
                                job="Customer" />
                        </OwlCarousel>

                        <hr className="mt-5 mb-5" />

                        <h2 className="title text-center mb-3">Quote Sign <span className="title-separator">/</span> Centered Align <span className="title-separator">/</span> 2 Columns</h2>

                        <OwlCarousel adClass="owl-theme owl-testimonials cols-md-2 cols-1" carouselOptions={ mainSlider6 } carouselId="testi_two">
                            <Testimonial
                                content="“  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi tortor eu nibh. Nullam mollis.  ”"
                                name="Jenson Gregory"
                                job="Customer" />
                            <Testimonial
                                content="“ Impedit, ratione sequi, sunt incidunt magnam et. Delectus obcaecati optio eius error libero perferendis nesciunt atque dolores magni recusandae! Doloremque quidem error eum quis similique doloribus natus. ”"
                                name="Victoria Ventura"
                                job="Customer" />
                            <Testimonial
                                content="“ Molestias animi illo natus ut quod neque ad accusamus praesentium fuga! Dolores odio alias sapiente odit delectus quasi, explicabo a, modi voluptatibus. Perferendis, voluptate, distinctio earum veritatis animi. ”"
                                name="John Smith"
                                job="Customer" />
                        </OwlCarousel>

                        <hr className="mt-5 mb-5" />

                        <h2 className="title text-center mb-3">Quote Sign <span className="title-separator">/</span> Centered Align <span className="title-separator">/</span> 3 Columns</h2>

                        <OwlCarousel adClass="owl-theme owl-testimonials cols-1 cols-md-2 cols-lg-3" carouselOptions={ mainSlider7 } carouselId="testi_three">
                            <Testimonial
                                content="“ Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus quet vel, dapibus id, mattis vel, nisi tortor eu nibh. Nullam mollis. ”"
                                name="Jenson Gregory"
                                job="Customer" />
                            <Testimonial
                                content="“ Impedit, ratione sequi, sunt incidunt magnam et. Delectus obcaecati optio eius error libero perferendis nesciunt atque dolores magni recusand. ”"
                                name="Victoria Ventura"
                                job="Customer" />
                            <Testimonial
                                content="“ Molestias animi illo natus ut quod neque ad accusamus praesentium fuga! Dolores odio alias sapiente odit delectus quasi, explicab, modi animi. ”"
                                name="Angelica Lynch"
                                job="Customer" />
                            <Testimonial
                                content="“ Molestias animi illo natus ut quod neque ad accusamus praesentium fuga! Dolores odio alias sapiente odit delectus quasi, explicab. ”"
                                name="John Smith"
                                job="Customer" />
                        </OwlCarousel>

                    </div>
                    <div className="mb-5"></div>

                    <div className="bg-image bg-overlay pt-5 pb-4 bg-parallax" style={ { backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/backgrounds/bg-large.jpg)` } }>
                        <div className="container">
                            <h2 className="title text-center text-white mb-3">Quote Sign <span className="title-separator">/</span> Centered Align <span className="title-separator">/</span> Dark Background</h2>
                            <OwlCarousel adClass="owl-theme owl-testimonials owl-light cols-1" carouselOptions={ mainSlider5 } carouselId="testi_four">
                                <Testimonial
                                    content="“ Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. ”"
                                    name="Jenson Gregory"
                                    job="Customer"
                                    color="white" />
                                <Testimonial
                                    content="“ Impedit, ratione sequi, sunt incidunt magnam et. Delectus obcaecati optio eius error libero perferendis nesciunt atque dolores magni recusandae! Doloremque quidem error eum quis similique doloribus natus qui ut ipsum.Velit quos ipsa exercitationem, vel unde obcaecati impedit eveniet non. ”"
                                    name="Damon Stone"
                                    job="Customer"
                                    color="white" />
                                <Testimonial
                                    content="“ Molestias animi illo natus ut quod neque ad accusamus praesentium fuga! Dolores odio alias sapiente odit delectus quasi, explicabo a, modi voluptatibus. Perferendis perspiciatis, voluptate, distinctio earum veritatis animi tempora eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. ”"
                                    name="John Smith"
                                    job="Customer"
                                    color="white" />
                            </OwlCarousel>
                        </div>
                    </div>
                    <div className="mb-5"></div>

                    <div className="container">
                        <h2 className="title text-center mb-3">Customer Photo <span className="title-separator">/</span> Centered Align</h2>

                        <OwlCarousel adClass="owl-theme owl-testimonials-photo cols-1" carouselOptions={ mainSlider5 } carouselId="testi_five">
                            <Testimonial
                                content="“ Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. ”"
                                name="Jenson Gregory"
                                job="Customer"
                                image={ `assets/images/testimonials/user-1.jpg` } />
                            <Testimonial
                                content="“ Impedit, ratione sequi, sunt incidunt magnam et. Delectus obcaecati optio eius error libero perferendis nesciunt atque dolores magni recusandae! Doloremque quidem error eum quis similique doloribus natus qui ut ipsum.Velit quos ipsa exercitationem, vel unde obcaecati impedit eveniet non. ”"
                                name="Victoria Ventura"
                                job="Customer"
                                image={ `assets/images/testimonials/user-2.jpg` } />
                        </OwlCarousel>

                        <hr className="mt-5 mb-5" />
                        <h2 className="title text-center mb-3">Customer Photo <span className="title-separator">/</span> Centered Align <span className="title-separator">/</span> 2 Columns</h2>

                        <OwlCarousel adClass="owl-theme owl-testimonials-photo cols-1 cols-md-2" carouselOptions={ mainSlider6 } carouselId="testi_six">
                            <Testimonial
                                content="“  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi tortor eu nibh. Nullam mollis.  ”"
                                name="Jenson Gregory"
                                job="Customer"
                                image={ `assets/images/testimonials/user-1.jpg` } />
                            <Testimonial
                                content="“ Impedit, ratione sequi, sunt incidunt magnam et. Delectus obcaecati optio eius error libero perferendis nesciunt atque dolores magni recusandae! Doloremque quidem error eum quis similique doloribus natus. ”"
                                name="Victoria Ventura"
                                job="Customer"
                                image={ `assets/images/testimonials/user-2.jpg` } />
                            <Testimonial
                                content="“ Molestias animi illo natus ut quod neque ad accusamus praesentium fuga! Dolores odio alias sapiente odit delectus quasi, explicabo a, modi voluptatibus. Perferendis, voluptate, distinctio earum veritatis animi. ”"
                                name="John Smith"
                                job="Customer"
                                image={ `assets/images/testimonials/user-1.jpg` } />
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials;
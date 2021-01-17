import React from 'react';
import { Tabs, Tab, TabList, TabPanel } from 'react-tabs';
import { Helmet } from 'react-helmet';

// import Custom Components
import PageHeader from '../../common/page-header';
import Breadcrumb from '../../common/breadcrumb';

function ElementTabs() {
	return (
		<>
			<Helmet>
				<title>Molla React eCommerce Template | Tabs</title>
			</Helmet>

			<h1 className="d-none">Molla React eCommerce Template - Tabs</h1>

			<div className="main">

				<PageHeader title="Tabs" subTitle="Elements" />
				<Breadcrumb title="Tabs" parent1={ [ "Elements", "elements" ] } />

				<div className="page-content">
					<div className="container">
						<div className="row">
							<div className="col-12">
								<h2 className="title mb-3">Left Align Style</h2>
							</div>
							<div className="col-md-6">
								<Tabs defaultIndex={ 0 } selectedTabClassName="show">
									<TabList className="nav nav-tabs nav-tabs-bg" id="tabs-1" role="tablist">
										<Tab className="nav-item">
											<span className="nav-link">Tab 1</span>
										</Tab>
										<Tab className="nav-item">
											<span className="nav-link">Tab 2</span>
										</Tab>
										<Tab className="nav-item">
											<span className="nav-link">Tab 3</span>
										</Tab>
										<Tab className="nav-item">
											<span className="nav-link">Tab 4</span>
										</Tab>
									</TabList>
									<div className="tab-pane tab-content tab-content-border">
										<TabPanel>
											<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. </p>
										</TabPanel>
										<TabPanel>
											<p>Nobis perspiciatis natus cum, sint dolore earum rerum tempora aspernatur numquam velit tempore omnis, delectus repellat facere voluptatibus nemo non fugiat consequatur repellendus! Enim, commodi, veniam ipsa voluptates quis amet.</p>
										</TabPanel>
										<TabPanel>
											<p>Perspiciatis quis nobis, adipisci quae aspernatur, nulla suscipit eum. Dolorum, earum. Consectetur pariatur repellat distinctio atque alias excepturi aspernatur nisi accusamus sed molestias ipsa numquam eius, iusto, aliquid, quis aut.</p>
										</TabPanel>
										<TabPanel>
											<p>Quis nobis, adipisci quae aspernatur, nulla suscipit eum. Dolorum, earum. Consectetur pariatur repellat distinctio atque alias excepturi aspernatur nisi accusamus sed molestias ipsa numquam eius, iusto, aliquid, quis aut.</p>
										</TabPanel>
									</div>
								</Tabs>
							</div>
							<div className="col-md-6">
								<Tabs defaultIndex={ 0 } selectedTabClassName="show">
									<TabList className="nav nav-tabs" id="tabs-2" role="tablist">
										<Tab className="nav-item">
											<span className="nav-link">Tab 1</span>
										</Tab>
										<Tab className="nav-item">
											<span className="nav-link">Tab 2</span>
										</Tab>
										<Tab className="nav-item">
											<span className="nav-link">Tab 3</span>
										</Tab>
										<Tab className="nav-item">
											<span className="nav-link">Tab 4</span>
										</Tab>
									</TabList>
									<div className="tab-pane tab-content tab-content-border">
										<TabPanel>
											<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. </p>
										</TabPanel>
										<TabPanel>
											<p>Nobis perspiciatis natus cum, sint dolore earum rerum tempora aspernatur numquam velit tempore omnis, delectus repellat facere voluptatibus nemo non fugiat consequatur repellendus! Enim, commodi, veniam ipsa voluptates quis amet.</p>
										</TabPanel>
										<TabPanel>
											<p>Perspiciatis quis nobis, adipisci quae aspernatur, nulla suscipit eum. Dolorum, earum. Consectetur pariatur repellat distinctio atque alias excepturi aspernatur nisi accusamus sed molestias ipsa numquam eius, iusto, aliquid, quis aut.</p>
										</TabPanel>
										<TabPanel>
											<p>Quis nobis, adipisci quae aspernatur, nulla suscipit eum. Dolorum, earum. Consectetur pariatur repellat distinctio atque alias excepturi aspernatur nisi accusamus sed molestias ipsa numquam eius, iusto, aliquid, quis aut.</p>
										</TabPanel>
									</div>
								</Tabs>
							</div>
						</div>

						<hr className="mt-5 mb-4" />

						<div className="row">
							<div className="col-12">
								<h2 className="title mb-3">Centered Align Style</h2>
							</div>
							<div className="col-md-6">
								<Tabs defaultIndex={ 0 } selectedTabClassName="show">
									<TabList className="nav nav-tabs nav-tabs-bg justify-content-center" id="tabs-3" role="tablist">
										<Tab className="nav-item">
											<span className="nav-link">Tab 1</span>
										</Tab>
										<Tab className="nav-item">
											<span className="nav-link">Tab 2</span>
										</Tab>
										<Tab className="nav-item">
											<span className="nav-link">Tab 3</span>
										</Tab>
										<Tab className="nav-item">
											<span className="nav-link">Tab 4</span>
										</Tab>
									</TabList>
									<div className="tab-pane tab-content tab-content-border">
										<TabPanel>
											<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. </p>
										</TabPanel>
										<TabPanel>
											<p>Nobis perspiciatis natus cum, sint dolore earum rerum tempora aspernatur numquam velit tempore omnis, delectus repellat facere voluptatibus nemo non fugiat consequatur repellendus! Enim, commodi, veniam ipsa voluptates quis amet.</p>
										</TabPanel>
										<TabPanel>
											<p>Perspiciatis quis nobis, adipisci quae aspernatur, nulla suscipit eum. Dolorum, earum. Consectetur pariatur repellat distinctio atque alias excepturi aspernatur nisi accusamus sed molestias ipsa numquam eius, iusto, aliquid, quis aut.</p>
										</TabPanel>
										<TabPanel>
											<p>Quis nobis, adipisci quae aspernatur, nulla suscipit eum. Dolorum, earum. Consectetur pariatur repellat distinctio atque alias excepturi aspernatur nisi accusamus sed molestias ipsa numquam eius, iusto, aliquid, quis aut.</p>
										</TabPanel>
									</div>
								</Tabs>

							</div>

							<div className="col-md-6">
								<Tabs defaultIndex={ 0 } selectedTabClassName="show">
									<TabList className="nav nav-tabs justify-content-center" id="tabs-4" role="tablist">
										<Tab className="nav-item">
											<span className="nav-link">Tab 1</span>
										</Tab>
										<Tab className="nav-item">
											<span className="nav-link">Tab 2</span>
										</Tab>
										<Tab className="nav-item">
											<span className="nav-link">Tab 3</span>
										</Tab>
										<Tab className="nav-item">
											<span className="nav-link">Tab 4</span>
										</Tab>
									</TabList>
									<div className="tab-pane tab-content tab-content-border">
										<TabPanel>
											<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. </p>
										</TabPanel>
										<TabPanel>
											<p>Nobis perspiciatis natus cum, sint dolore earum rerum tempora aspernatur numquam velit tempore omnis, delectus repellat facere voluptatibus nemo non fugiat consequatur repellendus! Enim, commodi, veniam ipsa voluptates quis amet.</p>
										</TabPanel>
										<TabPanel>
											<p>Perspiciatis quis nobis, adipisci quae aspernatur, nulla suscipit eum. Dolorum, earum. Consectetur pariatur repellat distinctio atque alias excepturi aspernatur nisi accusamus sed molestias ipsa numquam eius, iusto, aliquid, quis aut.</p>
										</TabPanel>
										<TabPanel>
											<p>Quis nobis, adipisci quae aspernatur, nulla suscipit eum. Dolorum, earum. Consectetur pariatur repellat distinctio atque alias excepturi aspernatur nisi accusamus sed molestias ipsa numquam eius, iusto, aliquid, quis aut.</p>
										</TabPanel>
									</div>
								</Tabs>
							</div>
						</div>

						<hr className="mt-5 mb-4" />

						<div className="row">
							<div className="col-12">
								<h2 className="title mb-3">Line Style Tabs</h2>
							</div>
							<div className="col-md-6">
								<Tabs defaultIndex={ 0 } selectedTabClassName="show">
									<TabList className="nav nav-pills" id="tabs-5" role="tablist">
										<Tab className="nav-item">
											<span className="nav-link">Tab 1</span>
										</Tab>
										<Tab className="nav-item">
											<span className="nav-link">Tab 2</span>
										</Tab>
										<Tab className="nav-item">
											<span className="nav-link">Tab 3</span>
										</Tab>
										<Tab className="nav-item">
											<span className="nav-link">Tab 4</span>
										</Tab>
									</TabList>
									<div className="tab-pane tab-content">
										<TabPanel>
											<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. </p>
										</TabPanel>
										<TabPanel>
											<p>Nobis perspiciatis natus cum, sint dolore earum rerum tempora aspernatur numquam velit tempore omnis, delectus repellat facere voluptatibus nemo non fugiat consequatur repellendus! Enim, commodi, veniam ipsa voluptates quis amet.</p>
										</TabPanel>
										<TabPanel>
											<p>Perspiciatis quis nobis, adipisci quae aspernatur, nulla suscipit eum. Dolorum, earum. Consectetur pariatur repellat distinctio atque alias excepturi aspernatur nisi accusamus sed molestias ipsa numquam eius, iusto, aliquid, quis aut.</p>
										</TabPanel>
										<TabPanel>
											<p>Quis nobis, adipisci quae aspernatur, nulla suscipit eum. Dolorum, earum. Consectetur pariatur repellat distinctio atque alias excepturi aspernatur nisi accusamus sed molestias ipsa numquam eius, iusto, aliquid, quis aut.</p>
										</TabPanel>
									</div>
								</Tabs>
							</div>

							<div className="col-md-6">
								<Tabs defaultIndex={ 0 } selectedTabClassName="show">
									<TabList className="nav nav-pills justify-content-center" id="tabs-6" role="tablist">
										<Tab className="nav-item">
											<span className="nav-link">Tab 1</span>
										</Tab>
										<Tab className="nav-item">
											<span className="nav-link">Tab 2</span>
										</Tab>
										<Tab className="nav-item">
											<span className="nav-link">Tab 3</span>
										</Tab>
										<Tab className="nav-item">
											<span className="nav-link">Tab 4</span>
										</Tab>
									</TabList>
									<div className="tab-pane tab-content">
										<TabPanel>
											<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum. </p>
										</TabPanel>
										<TabPanel>
											<p>Nobis perspiciatis natus cum, sint dolore earum rerum tempora aspernatur numquam velit tempore omnis, delectus repellat facere voluptatibus nemo non fugiat consequatur repellendus! Enim, commodi, veniam ipsa voluptates quis amet.</p>
										</TabPanel>
										<TabPanel>
											<p>Perspiciatis quis nobis, adipisci quae aspernatur, nulla suscipit eum. Dolorum, earum. Consectetur pariatur repellat distinctio atque alias excepturi aspernatur nisi accusamus sed molestias ipsa numquam eius, iusto, aliquid, quis aut.</p>
										</TabPanel>
										<TabPanel>
											<p>Quis nobis, adipisci quae aspernatur, nulla suscipit eum. Dolorum, earum. Consectetur pariatur repellat distinctio atque alias excepturi aspernatur nisi accusamus sed molestias ipsa numquam eius, iusto, aliquid, quis aut.</p>
										</TabPanel>
									</div>
								</Tabs>
							</div>
						</div>

						<hr className="mt-4 mb-4" />

						<div className="row">
							<div className="col-12">
								<h2 className="title mb-3">Vertical Style</h2>
							</div>
							<div className="col-md-6">
								<Tabs defaultIndex={ 0 } selectedTabClassName="show">
									<div className="tabs-vertical">
										<TabList className="nav nav-tabs nav-tabs-bg flex-column" id="tabs-7" role="tablist">
											<Tab className="nav-item">
												<span className="nav-link">Tab 1</span>
											</Tab>
											<Tab className="nav-item">
												<span className="nav-link">Tab 2</span>
											</Tab>
											<Tab className="nav-item">
												<span className="nav-link">Tab 3</span>
											</Tab>
											<Tab className="nav-item">
												<span className="nav-link">Tab 4</span>
											</Tab>
										</TabList>
										<div className="tab-pane tab-content tab-content-border">
											<TabPanel>
												<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum int dolore earum rerum tempora aspernatur numquam velit. </p>											</TabPanel>
											<TabPanel>
												<p>Nobis perspiciatis natus cum, sint dolore earum rerum tempora aspernatur numquam velit tempore omnis, delectus repellat facere voluptatibus nemo non fugiat consequatur repellendus! Enim, commodi, veniam ipsa voluptates quis amet.</p>
											</TabPanel>
											<TabPanel>
												<p>Perspiciatis quis nobis, adipisci quae aspernatur, nulla suscipit eum. Dolorum, earum. Consectetur pariatur repellat distinctio atque alias excepturi aspernatur nisi accusamus sed molestias ipsa numquam eius, iusto, aliquid, quis aut.</p>
											</TabPanel>
											<TabPanel>
												<p>Quis nobis, adipisci quae aspernatur, nulla suscipit eum. Dolorum, earum. Consectetur pariatur repellat distinctio atque alias excepturi aspernatur nisi accusamus sed molestias ipsa numquam eius, iusto, aliquid, quis aut.</p>
											</TabPanel>
										</div>
									</div>
								</Tabs>
							</div>

							<div className="col-md-6">
								<Tabs defaultIndex={ 0 } selectedTabClassName="show">
									<div className="tabs-vertical">
										<TabList className="nav nav-tabs flex-column" id="tabs-8" role="tablist">
											<Tab className="nav-item">
												<span className="nav-link">Tab 1</span>
											</Tab>
											<Tab className="nav-item">
												<span className="nav-link">Tab 2</span>
											</Tab>
											<Tab className="nav-item">
												<span className="nav-link">Tab 3</span>
											</Tab>
											<Tab className="nav-item">
												<span className="nav-link">Tab 4</span>
											</Tab>
										</TabList>
										<div className="tab-pane tab-content tab-content-border">
											<TabPanel>
												<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Donec nec justo eget felis facilisis fermentum int dolore earum rerum tempora aspernatur numquam velit. </p>											</TabPanel>
											<TabPanel>
												<p>Nobis perspiciatis natus cum, sint dolore earum rerum tempora aspernatur numquam velit tempore omnis, delectus repellat facere voluptatibus nemo non fugiat consequatur repellendus! Enim, commodi, veniam ipsa voluptates quis amet.</p>
											</TabPanel>
											<TabPanel>
												<p>Perspiciatis quis nobis, adipisci quae aspernatur, nulla suscipit eum. Dolorum, earum. Consectetur pariatur repellat distinctio atque alias excepturi aspernatur nisi accusamus sed molestias ipsa numquam eius, iusto, aliquid, quis aut.</p>
											</TabPanel>
											<TabPanel>
												<p>Quis nobis, adipisci quae aspernatur, nulla suscipit eum. Dolorum, earum. Consectetur pariatur repellat distinctio atque alias excepturi aspernatur nisi accusamus sed molestias ipsa numquam eius, iusto, aliquid, quis aut.</p>
											</TabPanel>
										</div>
									</div>
								</Tabs>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default React.memo( ElementTabs );
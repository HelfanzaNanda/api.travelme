import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoadingComponent from '../../components/LoadingComponent';

const Index = () => {

	const[loading, setLoading] = useState(true)

	useEffect(() => {
		setTimeout(() => {
			setLoading(false)
		}, 500);
	}, [])

	if (loading) {
		return <LoadingComponent/>
	}

	return (
		<section className="section">
			<div className="section-header">
				<h1>Goings</h1>
				<div className="section-header-breadcrumb">
					<div className="breadcrumb-item active"><Link to="/goings">Goings</Link></div>
					<div className="breadcrumb-item">Index</div>
				</div>
			</div>
			<div className="section-body">
				<div className="d-flex justify-content-between align-items-center">
					<div>
						<h2 className="section-title">User</h2>
					</div>
					<div><button type="button" className="btn btn-primary btn-add">Tambah User</button></div>
				</div>
				<div className="row">
					<div className="col-12 col-md-6 col-lg-6">
						<div className="card">
							<div className="card-header">
								<h4>Simple Table</h4>
							</div>
							<div className="card-body">
								<div className="table-responsive">
									<table className="table table-bordered table-md">
										<tbody><tr>
											<th>#</th>
											<th>Name</th>
											<th>Created At</th>
											<th>Status</th>
											<th>Action</th>
										</tr>
											<tr>
												<td>1</td>
												<td>Irwansyah Saputra</td>
												<td>2017-01-09</td>
												<td><div className="badge badge-success">Active</div></td>
												{/* <td><a href="#" className="btn btn-secondary">Detail</a></td> */}
											</tr>
										</tbody></table>
								</div>
							</div>
							{/* <div className="card-footer text-right">
								<nav className="d-inline-block">
									<ul className="pagination mb-0">
										<li className="page-item disabled">
											<a className="page-link" href="#" tabIndex={-1}><i className="fas fa-chevron-left" /></a>
										</li>
										<li className="page-item active"><a className="page-link" href="#">1 <span className="sr-only">(current)</span></a></li>
										<li className="page-item">
											<a className="page-link" href="#">2</a>
										</li>
										<li className="page-item"><a className="page-link" href="#">3</a></li>
										<li className="page-item">
											<a className="page-link" href="#"><i className="fas fa-chevron-right" /></a>
										</li>
									</ul>
								</nav>
							</div> */}
						</div>
					</div>
					
				</div>
			</div>
		</section>
	);
};

export default Index;
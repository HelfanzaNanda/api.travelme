import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ApiCar from '../../apis/ApiCar'
import LoadingComponent from '../../components/LoadingComponent';

const Index = () => {
	const [cars, setCars] = useState([])
	const [currentPage, setCurrentPage] = useState(1)
	const [lastPage, setLastPage] = useState(0)
	const[loading, setLoading] = useState(true)

	const getCars = async (page = 1) => {
		try {
			const { data } = await ApiCar.getCars(page)
			setCurrentPage(data.data.current_page);
			setLastPage(data.data.last_page);
			setCars(data.data.data);	
		} catch (error) {
			console.log(error);
		}
		setLoading(false)
		
	}

	useEffect(() => {
		getCars()
	}, [])

	if (loading) {
		return <LoadingComponent/>
	}

	return (
		<section className="section">
			 <div className="section-header">
				<h1>Cars</h1>
				<div className="section-header-breadcrumb">
					<div className="breadcrumb-item active"><Link to="/cars">Cars</Link></div>
					<div className="breadcrumb-item">Index</div>
				</div>
			</div>
			<div className="section-body">
				<div className="d-flex justify-content-between align-items-center">
					<div>
						<h2 className="section-title">Cars</h2>
					</div>
					<div><button type="button" className="btn btn-primary btn-add">Create Cars</button></div>
				</div>
				<div className="row">
					<div className="col-md-12">
						<div className="card">
							<div className="card-header">
								<h4>Cars Table</h4>
							</div>
							<div className="card-body">
								<div className="table-responsive">
									<table className="table table-bordered table-md">
										<thead>
											<tr>
												<th>#</th>
												<th>Name</th>
												<th>Facility</th>
												<th>Seat</th>
												<th>Action</th>
											</tr>
										</thead>
										<tbody>
											{
												cars.map((car, index) => (
													<tr key={index}>
														<td>{index + 1}</td>
														<td>{car.name}</td>
														<td>{car.facility}</td>
														<td>{car.total_seat}</td>
														<td>
															<Link to="/" className="btn btn-warning mr-3 btn-sm">
																Edit
															</Link>
															<button className="btn btn-danger btn-sm">Delete</button>
														</td>
													</tr>
												))
											}
										</tbody>
									</table>
								</div>
							</div>
							<div className="card-footer text-right">
								<nav className="d-inline-block">
									<ul className="pagination mb-0">
										<li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
											<button onClick={(e) => getCars(currentPage-1)} className="page-link" tabIndex={-1}><i className="fas fa-chevron-left" /></button>
										</li>
										<li className={`page-item ${currentPage === lastPage ? 'disabled' : ''}`}>
											<button onClick={(e) => getCars(currentPage+1)} className="page-link" ><i className="fas fa-chevron-right" /></button>
										</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
					
				</div>
			</div>
		</section>
	);
};

export default Index;
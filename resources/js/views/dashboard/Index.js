import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LoadingComponent from '../../components/LoadingComponent';

const Dashboard = () => {
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
				<h1>Dashboard</h1>
				<div className="section-header-breadcrumb">
					<div className="breadcrumb-item active"><Link to="/">Dashboard</Link></div>
				</div>
			</div>
			<div className="section-body">
				Dashboard
			</div>
		</section>
	);
};

export default Dashboard;
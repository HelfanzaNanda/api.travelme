import React from "react";

const LoadingComponent = () => {
	return (
		<div style={{ 
			position:'absolute', 
			top:0, 
			left:0,
			background: 'white',
			height: '100vh',
			width: '100vw',
			zIndex: 1000
		}}>
		<div className="row justify-content-center align-items-center vh-100 vw-100">
			<h4 className="font-weight-normal">Loading . . .</h4>
		</div>
		</div>
		
	);
};

export default LoadingComponent;

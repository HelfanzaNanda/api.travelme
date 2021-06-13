import React from 'react';
import Api from './Api';

const ApiCar = {
	getCars(page) {
		return Api().get(`cars?page=${page}`);
	},
};

export default ApiCar;
import React from 'react'
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import NavbarComponent from '../components/NavbarComponent';
import Login from '../views/auth/Login';
import CarIndex from '../views/cars/Index'
import Dashboard from '../views/dashboard/Index';
import DriverIndex from '../views/drivers/Index'
import GoingIndex from '../views/goings/Index'
import Authenticated from '../middleware/Authenticated'
import Guest from '../middleware/Guest'
import OrderIndex from '../views/orders/Index'

const Router = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					<Authenticated>
						<NavbarComponent>
							<Dashboard/>
						</NavbarComponent>
					</Authenticated>
					
				</Route>

				<Route exact path="/cars">
					<Authenticated>
						<NavbarComponent>
							<CarIndex/>
						</NavbarComponent>
					</Authenticated>
				</Route>

				<Route exact path="/drivers">
					<Authenticated>
						<NavbarComponent>
							<DriverIndex/>
						</NavbarComponent>
					</Authenticated>
				</Route>

				<Route exact path="/goings">
					<Authenticated>
						<NavbarComponent>
							<GoingIndex/>
						</NavbarComponent>
					</Authenticated>
				</Route>

				<Route exact path="/goings">
					<Authenticated>
						<NavbarComponent>
							<OrderIndex/>
						</NavbarComponent>
					</Authenticated>
				</Route>

				<Route exact path="/login">
					<Guest>
						<Login/>
					</Guest>
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

export default Router;

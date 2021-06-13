import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import ApiUser from '../../apis/ApiUser';
import { authenticated } from '../../store';
import LoadingComponent from '../../components/LoadingComponent';

const Login = () => {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [errors, setErrors] = useState([])
	const[loading, setLoading] = useState(false)

	const setAuth = useSetRecoilState(authenticated)
	const credentials = { email, password }
	const history = useHistory()
	
	const loginHandle = async (e) => {
		e.preventDefault()
		setLoading(true)
		try {
			const { data } = await ApiUser.login(credentials)
			localStorage.setItem('token', data.token)
			setAuth({check: true, user:[]})
			history.push('/')
		} catch (error) {
			setErrors(error.response.data.errors);
			setLoading(false)
		}
	}

	if (loading) {
		return <LoadingComponent/>
	}

	return (
		<section className="section" style={{ overflow: 'hidden' }}>
			<div className="container mt-5">
				<div className="row">
					<div className="col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-4 offset-xl-4">
						<div className="card card-primary">
							<div className="card-header"><h4>Login</h4></div>
							<div className="card-body">
								<form method="POST" action="#"onSubmit={loginHandle}>
									<div className="form-group">
										<label htmlFor="email">Email</label>
										<input id="email" type="email" value={email} className="form-control" name="email" tabIndex="1" autoFocus 
										onChange={(e) => setEmail(e.target.value)} />
										{
											errors.email &&
											<span className="text-danger mt-2" >{errors.email[0]}</span>
										}
										
									</div>
									<div className="form-group">
										<div className="d-block">
											<label htmlFor="password" className="control-label">Password</label>
											<div className="float-right">
												<a href="auth-forgot-password.html" className="text-small"> Forgot Password? </a>
											</div>
										</div>
										<input id="password" type="password" value={password} className="form-control" name="password" tabIndex="2" 
										onChange={(e) => setPassword(e.target.value)} />
										{
											errors.password &&
											<span className="text-danger mt-2" >{errors.password[0]}</span>
										}
									</div>
									<div className="form-group">
										<div className="custom-control custom-checkbox">
											<input type="checkbox" name="remember" className="custom-control-input" tabIndex="3" id="remember-me" />
											<label className="custom-control-label" htmlFor="remember-me">Remember Me</label>
										</div>
									</div>
									<div className="form-group">
										<button type="submit" className="btn btn-primary btn-lg btn-block" tabIndex="4"> Login </button>
									</div>
								</form>
							</div>
						</div>
						<div className="mt-5 text-muted text-center">
							Don't have an account? <a href="auth-register.html">Create One</a>
						</div>
						<div className="simple-footer">
							Copyright © Stisla 2018
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Login;
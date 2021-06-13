import React from 'react'
import NavigationComponent from './NavigationComponent'
import FooterComponent from './FooterComponent'
import { useRecoilState } from 'recoil'
import { authenticated } from '../store'
import ApiUser from '../apis/ApiUser'
import { useHistory } from 'react-router-dom'

export default function NavbarComponent({children}) {

	const[auth, setAuth] = useRecoilState(authenticated)
	const history = useHistory()
	const logoutHandler = async() =>{
		try {
			const { data } =  await ApiUser.logout()
			setAuth({check: false})
			history.push('/login')
			localStorage.removeItem('token')
			//ToastSuccess(data.message)
		} catch (error) {
			//ToastError(error.data.errors.message)
		}
	}

	return (
		<div className="main-wrapper">
		  	<div className="navbar-bg"></div>
			<nav className="navbar navbar-expand-lg main-navbar">
				<form className="form-inline mr-auto">
				</form>
				<ul className="navbar-nav navbar-right">
					<li className="dropdown dropdown-list-toggle"><a href="#" data-toggle="dropdown" className="nav-link nav-link-lg message-toggle beep"><i className="far fa-envelope" /></a>
						<div className="dropdown-menu dropdown-list dropdown-menu-right">
							<div className="dropdown-header">Messages
								<div className="float-right">
									<a href="#">Mark All As Read</a>
								</div>
							</div>
							<div className="dropdown-list-content dropdown-list-message">
								<a href="#" className="dropdown-item dropdown-item-unread">
									<div className="dropdown-item-avatar">
										<img alt="image" src="../assets/img/avatar/avatar-1.png" className="rounded-circle" />
										<div className="is-online" />
									</div>
									<div className="dropdown-item-desc">
										<b>Kusnaedi</b>
										<p>Hello, Bro!</p>
										<div className="time">10 Hours Ago</div>
									</div>
								</a>
							</div>
							<div className="dropdown-footer text-center">
								<a href="#">View All <i className="fas fa-chevron-right" /></a>
							</div>
						</div>
					</li>
					<li className="dropdown dropdown-list-toggle"><a href="#" data-toggle="dropdown" className="nav-link notification-toggle nav-link-lg beep"><i className="far fa-bell" /></a>
						<div className="dropdown-menu dropdown-list dropdown-menu-right">
							<div className="dropdown-header">Notifications
								<div className="float-right">
									<a href="#">Mark All As Read</a>
								</div>
							</div>
							<div className="dropdown-list-content dropdown-list-icons">
								<a href="#" className="dropdown-item dropdown-item-unread">
									<div className="dropdown-item-icon bg-primary text-white">
										<i className="fas fa-code" />
									</div>
									<div className="dropdown-item-desc">
										Template update is available now!
										<div className="time text-primary">2 Min Ago</div>
									</div>
								</a>
							</div>
							<div className="dropdown-footer text-center">
								<a href="#">View All <i className="fas fa-chevron-right" /></a>
							</div>
						</div>
					</li>
					<li className="dropdown"><a href="#" data-toggle="dropdown" className="nav-link dropdown-toggle nav-link-lg nav-link-user">
						<img alt="image" src="../assets/img/avatar/avatar-1.png" className="rounded-circle mr-1" />
						<div className="d-sm-none d-lg-inline-block">Hi, { auth.user.name }</div></a>
						<div className="dropdown-menu dropdown-menu-right">
							<div className="dropdown-title">Logged in 5 min ago</div>
							<a href="features-profile.html" className="dropdown-item has-icon">
								<i className="far fa-user" /> Profile</a>
							<a href="features-activities.html" className="dropdown-item has-icon">
								<i className="fas fa-bolt" /> Activities</a>
							<a href="features-settings.html" className="dropdown-item has-icon">
								<i className="fas fa-cog" /> Settings</a>
							<div className="dropdown-divider" />
							<button onClick={logoutHandler} className="dropdown-item d-flex align-items-center text-danger">
								<i className="fas fa-sign-out-alt mr-2" /> <span>Logout</span>
							</button>
						</div>
					</li>
				</ul>
			</nav>
			<NavigationComponent/>
			<div className="main-content"> {children} </div>
			<FooterComponent/>
		</div>
	)
}

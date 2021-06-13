import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom';
import { RecoilRoot, useRecoilState } from 'recoil';
import ApiUser from '../apis/ApiUser';
import Router from '../router/Index';
import { authenticated } from '../store';
import LoadingComponent from '../components/LoadingComponent';

export default function App() {

	const [auth, setAuth] = useRecoilState(authenticated)
	const[isReady, setIsReady] = useState(false)
	const getUser = async () => {
		try {
			const { data } = await ApiUser.me()
			setAuth({check: true, user: data.data})
		} catch (error) {
			setAuth({check: false, user: []})
		}
		setIsReady(true)
	}
	useEffect(() => {
		getUser()
	}, [auth.check, isReady])

	if (!isReady) {
		return <LoadingComponent/>
	}
	return  <Router/>
}

if (document.getElementById('app')) {
    ReactDOM.render(
		<RecoilRoot>
			<App />
		</RecoilRoot>,
		document.getElementById('app')
	);
}

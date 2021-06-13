import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authenticated } from "../store";

const Guest = ({children}) => {
	const history = useHistory()
	const auth = useRecoilValue(authenticated)

	useEffect(() => {
		if (auth.check) {
			history.push('/')
		}
	}, [auth.check])
	return children
};

export default Guest;
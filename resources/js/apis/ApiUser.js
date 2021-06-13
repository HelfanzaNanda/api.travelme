import Api from './Api';

const ApiUser = {
	login(credential) {
		return Api().post('login', credential)
	},

	logout(){
		return Api().delete('logout')
	},

	me(){
		return Api().get('me')
	}
}
export default ApiUser
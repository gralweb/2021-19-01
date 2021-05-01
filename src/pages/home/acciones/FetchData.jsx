import {  API_URL_DATA_CARTS, API_URL_DATA_USERS  } from '../../../components/constans'

const FetchData = page => {
	const url = (page) ? `${API_URL_DATA_CARTS}?p=${page}` : API_URL_DATA_USERS
	return (
		fetch(url)
		.then( crud => (
			crud.json()
		))
	)
}

export default FetchData

import {  API_URL_DATA_CARTS  } from '../../../components/constans'

const FetchData = page => {
	const url = (page) ? `${API_URL_DATA_CARTS}?p=${page}` : API_URL_DATA_CARTS
	return (
		fetch(url).then( dataCrud => {
			return dataCrud.json()
		})
	)
}

export default FetchData

import { API_URL_DATA_BLOG } from '../../../components/constans'

const FetchData = id => {
	return (	
		fetch( `${ API_URL_DATA_BLOG }${ id }` ).then( crud => {
			return crud.json()
		})
	)
}

export default FetchData

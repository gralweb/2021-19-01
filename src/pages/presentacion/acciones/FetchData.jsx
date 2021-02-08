import { API_URL_DATA_PRESENTACION } from '../../../components/constans'

const FetchData = ( nameCart ) => {
	return (	
		fetch( `${ API_URL_DATA_PRESENTACION }?titulo=${ nameCart } ` ).then( dataCrud => {
			return dataCrud.json()
		})
	)
}

export default FetchData

import { API_URL_DATA_BLOG } from '../../../components/constans'

const apiKey = '20477648-9a45df31b06426ea917d04f58'
const query = 'programation'
const type = 'vector'
const num_imgs = '4'
const pixabay = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURI(query)}&image_type=${type}&order=popular&per_page=${num_imgs}&page=`

const FetchData = id => {
	return (	
		fetch( `${ API_URL_DATA_BLOG }${ id }` ).then( crud => {
			return crud.json()
		})
	)
}

const FetchImg = id => {
	return (	
		fetch(`${pixabay}${id}`).then( crud => {
			return crud.json()
		})
	)
}

export { FetchData, FetchImg }

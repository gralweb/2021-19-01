import React, { useState, useEffect } from 'react'

const HeaderNavSearch = (props) => {
	const [ searchQuery, setSearchQuery ] = useState('')

	const handleForm = e => {
		e.preventDefault()
		console.log(e.currentTarget[0].value)
	}

	const handleFormVal = query => {
		setSearchQuery(query)
	}

	useEffect(() => {
		if (searchQuery !== '') {
			console.log(searchQuery)
		}
	}, [searchQuery])

	return (
		<div className='header-nav-search'>
			<form
				action='javascript()' className='header-nav-form'
				onSubmit={ e => handleForm(e) }
				onChange={ e => handleFormVal(e.currentTarget[0].value) }
			>
				<div className='header-form-input'>
					<input type='text' placeholder='Buscar' />

					<button type='submit' className='header-input-icon'>
						<i className='icofont-search-1'></i>
					</button>
				</div>
			</form>
		</div>
	)
}

export default HeaderNavSearch

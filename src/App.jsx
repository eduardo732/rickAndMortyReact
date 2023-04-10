import { useEffect, useState } from "react"
import Card from "./components/Card"
import Section from "./components/Section"
import "./App.css"
import ReactPaginate from 'react-paginate';
import LoadingSpinner from "./components/LoadingSpinner";

// import Pagination from "./components/Pagination"

const PREFIX_RICKANDMORTY_API = "https://rickandmortyapi.com/api"
const CHARACTERS              = "/character"



const App = () => {
	const [character, setCharacter] = useState([])
	const [info, setInfo] = useState({})
	const [currentPage, setCurrentPage] = useState(1);
	const [isLoading, setIsLoading] = useState(false);

	const paginate = (pageNumber) => {
		pageNumber.selected += 1

    setCurrentPage(pageNumber.selected);
  }

	useEffect(() => {
		setIsLoading(true)
		fetch(PREFIX_RICKANDMORTY_API+CHARACTERS+`?page=${currentPage}`)
			.then(res => res.json())
			.then(json => {
				setTimeout(() => {
					setCharacter(json.results)
					setInfo(json.info)
					setIsLoading(false)
				}, 1500)
				
			})
	}, [currentPage])
	console.log(character, info.pages, currentPage)

	return (
		<main>
			<Section/>
			{isLoading ? <LoadingSpinner/> : <Card character={character}/>}
			<ReactPaginate
				onPageChange={paginate}
				pageCount={info.pages}
				previousLabel={'Prev'}
        nextLabel={'Next'}
        containerClassName={'pagination'}
        pageLinkClassName={'page-number'}
        previousLinkClassName={'page-number'}
        nextLinkClassName={'page-number'}
        activeLinkClassName={'active'}
			/>
		</main>
	)
}

export default App
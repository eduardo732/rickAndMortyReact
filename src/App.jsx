import { useEffect, useState } from "react"
import Card from "./components/Card"
import Section from "./components/Section"
import "./App.css"
import Pagination from "./components/Pagination"

const PREFIX_RICKANDMORTY_API = "https://rickandmortyapi.com/api"
const CHARACTERS              = "/character"



const App = () => {
	const [character, setCharacter] = useState([])
	const [info, setInfo] = useState({})

	useEffect(() => {
		fetch(PREFIX_RICKANDMORTY_API+CHARACTERS)
			.then(res => res.json())
			.then(json => {
				setCharacter(json.results)
				setInfo(json.info)
			})
	}, [])
	console.log(character, info)
	return (
		<main>
			<Section/>
			<Card character={character}/>
			<Pagination info={info}/>
		</main>
	)
}

export default App
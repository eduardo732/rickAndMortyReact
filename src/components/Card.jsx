import "./Card.css"
const Card = ({character}) => {
	return (
		<section className="container">
				<article className="card">
					{
						(character) ? 
						character.map(el =>
							<div className="character" key={el.id}>
								<img src={el.image} alt={el.name} />
								<h2>{el.name}</h2>
							</div>
							) : 
						<h1>We don't find any image</h1>}
				</article>
			</section>
	)
}

export default Card
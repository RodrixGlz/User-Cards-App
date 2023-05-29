import './Card.css';

function Card({
	id,
	name = 'Desconocida',
	size = '',
	photo,
	activo,
	cambiarActivo,
}) {
	const cambiandoEstado = (id) => {
		cambiarActivo(id);
	};
	let className = activo ? '' : ' disabled ';

	className +=
		size === 'small'
			? 'is-small'
			: size === 'large'
			? 'is-large'
			: '';

	return (
		<article class='card'>
			<picture>
				{id ? (
					<img
						onClick={() => cambiandoEstado(id)}
						src={photo}
						class={'condition-img' + className}
						alt=''
					/>
				) : (
					<img
						src='https://cuv.upc.edu/es/shared/imatges/fotos-professorat-i-professionals/anonimo.jpg'
						alt=''
					/>
				)}
				<h3>
					{activo ? name : 'Suspendida'}
				</h3>
			</picture>
		</article>
	);
}

export default Card;
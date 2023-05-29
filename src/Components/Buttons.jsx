import './Buttons.css';

export default function Title({ newUser, deleteUsers }) {
	const eventAddUser = () => {
		newUser();
	};
	const eventDeleteUsers = () => {
		deleteUsers();
	};

	return (
		<>
			<h1>Random Users</h1>
			<div class='buttons'>
				<button class='btn-añadir' onClick={eventAddUser}> Añadir usuario</button>
				<button class='btn-eliminar' onClick={eventDeleteUsers}>Eliminar usuario</button>
			</div>
		</>
	);
}
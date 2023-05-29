import { useState } from 'react'

import Buttons from './Components/Buttons'
import UsersList from './Components/UsersList'

import './App.css'
import './Components/Buttons'

function App() {
const [users, setUsers] = useState([])

const newUser = async () => {
		const respuesta = await fetch(
			'https://randomuser.me/api/?gender=female'
		);
		const { results } = await respuesta.json();
		const newUser = { ...results[0], activo: true };
		setUsers([newUser, ...users]);
	};

const cambiarActivo = (id) => {
		const newUsers = [...users];
		const userChange = newUsers.find(
			(user) => user.login.uuid === id
		);
		userChange.activo = !userChange.activo;
		setUsers(newUsers);
	};

const deleteUsers = () => {
		setUsers(users.filter((user) => user.activo));
	};

return (
    <>
    <div class="Container">
		<Buttons newUser={newUser} deleteUsers={deleteUsers}/>
		<div class="container-card">
			<UsersList users={users} cambiarActivo={cambiarActivo}/>
		</div>
    </div>
    </>
	)
}

export default App
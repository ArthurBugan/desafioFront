const Home = {
	render: () => {
		function searchUser() {
			console.log('Clicou 2');
		}

		return `<main class="main">
			<input class="main__input" autoFocus></input>
			<button type="button" onclick="${() => console.log('Teste')}">Procurar</button>
		</div>`
	}
};

export default Home;
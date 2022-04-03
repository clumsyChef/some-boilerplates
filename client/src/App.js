const App = () => {
	const data = async () => {
		const fetchData = await fetch("http://localhost:5000/somedata");
		const convertToJson = await fetchData.json();
		console.log(convertToJson);
	};

	return (
		<div className="App">
			<h1>This is a heading</h1>
			<button onClick={data}>Get Data</button>
		</div>
	);
};

export default App;

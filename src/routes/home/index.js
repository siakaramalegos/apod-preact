import { h, Component } from 'preact';
import style from './style';
import { API_KEY } from '../../../.env'

const BASE_URL = 'https://api.nasa.gov/planetary/apod'

class Home extends Component {
	componentDidMount() {
		fetch(`${BASE_URL}?api_key=${API_KEY}`)
			.then( res => res.json())
			.then( data => console.log(data))
	}

	render() {
		return (
			<div class={style.home}>
				<h1>Home</h1>
				<p>This is the Home component.</p>
			</div>
		)
	}
}

export default Home;

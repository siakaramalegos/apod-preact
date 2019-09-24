import { h, Component } from 'preact';
import style from './style';
import { API_KEY } from '../../../.env'
import Apod from '../../components/apod';

const BASE_URL = 'https://api.nasa.gov/planetary/apod'

class Home extends Component {
	state = {
		apod: {}
	}

	componentDidMount() {
		fetch(`${BASE_URL}?api_key=${API_KEY}`)
			.then( res => res.json())
			.then( data => this.setState({ apod: data }))
	}

	render(props, { apod }) {
		return (
			<div class={style.home}>
				<h1>Astronomy Picture of the Day</h1>
				<Apod data={apod} />
			</div>
		)
	}
}

export default Home;

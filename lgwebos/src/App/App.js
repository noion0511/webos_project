import kind from '@enact/core/kind';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import Repeater from '@enact/ui/Repeater';
import { movie } from '../components/Movies';
import { search } from '../components/Searches';
import Scroller from '@enact/ui/Scroller';
import Button from '@enact/ui/Button';
import Icon from '@enact/ui/Icon';
import { Whatch } from './whatch2.png';

import css from './App.module.less'

const movies = ['1st', '2nd', '3rd', '4th']


const AppBase = kind({
	name: 'App',

	styles: {
        css
    },

	render: function(props){
		return (
			<div className ={css.app} /*{props.className}*/>
				<div>
					<center>
						<img className ={css.logo} src={Whatch}></img>
						<h2>Whatch</h2>
					<div className="search">
						<input type="text"></input>
						<Button><img className={css.test} src="https://image.flaticon.com/icons/png/64/483/483356.png"></img></Button>						
						
					</div>
					<Repeater childComponent = {movie} indexProp='index'>
						{movies}
					</Repeater>
					</center>
				</div>
				<div>
					<center>
					<h2 className={css.black}>Categories</h2>
					<Button size={css.test2}><img src="https://m.media-amazon.com/images/G/01/IMDb/genres/Comedy._CB1513316167_SX233_CR0,0,233,131_AL_.jpg"></img></Button>
					<Button size={css.test2}><img src="https://m.media-amazon.com/images/G/01/IMDb/genres/Romance._CB1513316168_SX233_CR0,0,233,131_AL_.jpg"></img></Button>
					<Button size={css.test2}><img src="https://m.media-amazon.com/images/G/01/IMDb/genres/Drama._CB1513316168_SX233_CR0,0,233,131_AL_.jpg"></img></Button>
					<Button size={css.test2}><img src="https://m.media-amazon.com/images/G/01/IMDb/genres/Animation._CB1513316167_SX233_CR0,0,233,131_AL_.jpg"></img></Button>
					<Button size={css.test2}><img src="https://m.media-amazon.com/images/G/01/IMDb/genres/Comedy-Romance._CB1513316167_SX233_CR0,0,233,131_AL_.jpg"></img></Button>
					<br></br>
					<Button size={css.test2}><img src="https://m.media-amazon.com/images/G/01/IMDb/genres/Sci-Fi._CB1513316168_SX233_CR0,0,233,131_AL_.jpg"></img></Button>
					<Button size={css.test2}><img src="https://m.media-amazon.com/images/G/01/IMDb/genres/Action._CB1513316166_SX233_CR0,0,233,131_AL_.jpg"></img></Button>
					<Button size={css.test2}><img src="https://m.media-amazon.com/images/G/01/IMDb/genres/Mystery._CB1513316168_SX233_CR0,0,233,131_AL_.jpg"></img></Button>
					<Button size={css.test2}><img src="https://m.media-amazon.com/images/G/01/IMDb/genres/Adventure._CB1513316166_SX233_CR0,0,233,131_AL_.jpg"></img></Button>
					<Button size={css.test2}><img src="https://m.media-amazon.com/images/G/01/IMDb/genres/Action-Comedy._CB1513316166_SX233_CR0,0,233,131_AL_.jpg"></img></Button>
					<br></br>
					<Button size={css.test2}><img src="https://m.media-amazon.com/images/G/01/IMDb/genres/Horror._CB1513316168_SX233_CR0,0,233,131_AL_.jpg"></img></Button>
					<Button size={css.test2}><img src="https://m.media-amazon.com/images/G/01/IMDb/genres/Thriller._CB1513316169_SX233_CR0,0,233,131_AL_.jpg"></img></Button>
					<Button size={css.test2}><img src="https://m.media-amazon.com/images/G/01/IMDb/genres/Crime._CB1513316167_SX233_CR0,0,233,131_AL_.jpg"></img></Button>
					<Button size={css.test2}><img src="https://m.media-amazon.com/images/G/01/IMDb/genres/Fantasy._CB1513316168_SX233_CR0,0,233,131_AL_.jpg"></img></Button>
					<Button size={css.test2}><img src="https://m.media-amazon.com/images/G/01/IMDb/genres/Superhero._CB1513316168_SX233_CR0,0,233,131_AL_.jpg"></img></Button>
					</center>
					<br></br>
				</div>
				
			</div>
		);
	}
});

const App = ThemeDecorator(AppBase);

export default App;
export {App, AppBase};
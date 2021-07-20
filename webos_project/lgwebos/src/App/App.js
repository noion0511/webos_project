import kind from '@enact/core/kind';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';
import Repeater from '@enact/ui/Repeater';
import { movie } from '../components/Movies';
import { search } from '../components/Searches';
import Scroller from '@enact/ui/Scroller';
import Button from '@enact/ui/Button';
import Icon from '@enact/ui/Icon';

import css from './App.module.less'

const movies = ['1', '2', '3', '4', '5', '6', '7', '8']


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
						<img className ={css.logo} src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"></img>
					<div className="search">
						<input type="text"></input>
						<Button iconComponent= {search} size="test"></Button>
						<div className={css.test}> <Button><img className={css.test2} src="https://image.flaticon.com/icons/png/32/158/158740.png"></img></Button>						
						</div>
					</div>
					<Repeater childComponent = {movie} indexProp='index'>
						{movies}
					</Repeater>
					</center>
				</div>
				
			</div>
		);
	}
});

const App = ThemeDecorator(AppBase);

export default App;
export {App, AppBase};
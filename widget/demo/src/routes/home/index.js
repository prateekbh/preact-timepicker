import { h, Component } from 'preact';
import Card from 'preact-material-components/Card';
import 'preact-material-components/Card/style.css';
import 'preact-material-components/Button/style.css';
import style from './style';
import npmInfo from '../../../../package.json';

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				<div class={style.header}>
					<h1>{npmInfo.name} @ {npmInfo.version}</h1>
					<a class={style.ghicon} href={npmInfo.homepage} />
				</div>
				<div class={style.body}>
					<h2 class=" mdc-typography--title">Introduction</h2>
					<div class=" mdc-typography--body">
						<div>This packageprovides a clock UI for selecting time. This resembles and is based on the Android's native timepicker.</div>
						<div>The clock is built with SVG and hence is fully customizable with CSS.</div>
					</div>
					<h2 class=" mdc-typography--title">Props</h2>
					<div>
						<ul>
							<li>
								<div class={`${style.propheading} mdc-typography--caption`}>Size</div>
								<div class=" mdc-typography--body">Tells the size of the clock rendered.</div>
							</li>
							<li>
								<div class={`${style.propheading} mdc-typography--caption`}>onHoursSelect</div>
								<div class=" mdc-typography--body">Event callback when the user selects hours.</div>
							</li>
							<li>
								<div class={`${style.propheading} mdc-typography--caption`}>SionMinutesSelectze</div>
								<div class=" mdc-typography--body">Event callback when the user selects minutes.</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

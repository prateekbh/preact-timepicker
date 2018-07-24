import { h, Component } from 'preact';
import Button from 'preact-material-components/Button';
import Dialog from 'preact-material-components/Dialog';
import Typography from 'preact-material-components/Typography';
import 'preact-material-components/Typography/style.css';
import 'preact-material-components/Dialog/style.css';
import 'preact-material-components/Button/style.css';
import Timepicker from '../../../../src/components/my-component';
import style from './style';
import npmInfo from '../../../../package.json';

export default class Home extends Component {
	constructor(){
		super();
		const date = new Date();
		this.state = {
			hours: date.getHours() % 12,
			minutes: date.getMinutes(),
			AM: true
		};
	}
	render() {
		return (
			<div class={style.home}>
				<div class={style.header}>
					<h1>{npmInfo.name} @ {npmInfo.version}</h1>
					<a class={style.ghicon} target="blank" href={npmInfo.homepage} />
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
								<div class={`${style.propheading} mdc-typography--subtitle1`}>Size</div>
								<div class=" mdc-typography--body">Tells the size of the clock rendered.</div>
							</li>
							<li>
								<div class={`${style.propheading} mdc-typography--subtitle1`}>onHoursSelect</div>
								<div class=" mdc-typography--body">Event callback when the user selects hours.</div>
							</li>
							<li>
								<div class={`${style.propheading} mdc-typography--subtitle1`}>onMinutesSelect</div>
								<div class=" mdc-typography--body">Event callback when the user selects minutes.</div>
							</li>
						</ul>
						<Button primary raised onClick={()=>{
							this.scrollingDlg.MDComponent.show();
						}}>
							Show Demo
						</Button>
						<Dialog class={style.dialog} ref={scrollingDlg => {this.scrollingDlg=scrollingDlg;}}>
							<Dialog.Header>Choose alarm time</Dialog.Header>
							<Dialog.Body>
								<div class={style.center}>
									<Typography headline4 onClick={() => {
										this.picker_.showHours();
									}}>{this.state.hours}</Typography>
									:
									<Typography headline4 onClick={() => {
										this.picker_.showMinutes();
									}}>{this.state.minutes}</Typography>

									<Typography headline4 onClick={() => {
										this.setState({
											AM: !this.state.AM
										});
									}}> {this.state.AM ? 'AM': 'PM'}</Typography>
								</div>
								<Timepicker size={250} ref={picker => this.picker_ = picker}
									onHoursSelect={hours => {
										this.setState({hours})
									}}
									onMinutesSelect={minutes => {
										this.setState({minutes})
									}}
								/>
							</Dialog.Body>
							<Dialog.Footer>
								<Dialog.FooterButton cancel>Decline</Dialog.FooterButton>
								<Dialog.FooterButton accept>Accept</Dialog.FooterButton>
							</Dialog.Footer>
						</Dialog>
					</div>
				</div>
			</div>
		);
	}
}

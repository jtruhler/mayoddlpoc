import {Component, Prop, h} from '@stencil/core';

@Component({
	tag: 'mc-button',
	styleUrl: 'button.scss',
	shadow: true,
})
export class Button {
	@Prop() type: 'button' | 'submit' | 'reset';
	@Prop() disabled: boolean;

	render() {
		return (
			<button part='button' type={this.type} disabled={this.disabled}>
				<slot />
			</button>
		);
	}
}

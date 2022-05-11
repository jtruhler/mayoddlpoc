import {Component, Prop, getAssetPath, h} from '@stencil/core';

@Component({
	tag: 'mc-masthead',
	styleUrl: 'masthead.scss',
	shadow: true,
	assetsDirs: ['./assets'],
})
export class Masthead {
	@Prop({reflect: true}) logo: string;
	@Prop({reflect: true}) imgtitle: string;
	@Prop({reflect: true}) nav;

	render() {
		return (
			<header>
				<div class='logo'>
					<a href='/'>
						<img src={getAssetPath(`/assets/${this.logo}`)} alt={this.imgtitle} />
					</a>
				</div>

				<nav>
					{this.nav.map(nav => (
						<mc-link label={nav.label} href={nav.href} exportparts='a'></mc-link>
					))}
				</nav>

				<mc-button class='plain' exportparts='button'>
					Menu
				</mc-button>
			</header>
		);
	}
}

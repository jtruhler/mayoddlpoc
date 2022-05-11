import { Component, Prop, h } from "@stencil/core";

@Component({
    tag: 'mc-hero',
    styleUrl: 'hero.scss',
    scoped: true
})

export class Hero {
    @Prop({reflect: true}) buttonlabel: string;
    @Prop({reflect: true}) href: string;
    @Prop({reflect: true}) headingtext: string;
    @Prop({reflect: true}) text: string;
    @Prop({reflect: true}) photodesktop: string;
    @Prop({reflect: true}) photomobile: string;
    @Prop({reflect: true}) lazy: string;

    render() {
        return (
            <div class="hero">
                <mc-picture photodesktop={this.photodesktop} photomobile={this.photomobile} alt={this.headingtext} lazy={this.lazy} class="hero"></mc-picture>
                <div class="text">
                    <h1>{this.headingtext}</h1>
                    <p>{this.text}</p>
                    <mc-link href={this.href} label={this.buttonlabel} class="button ghost white"></mc-link>
                </div>
            </div>
        );
    }
}
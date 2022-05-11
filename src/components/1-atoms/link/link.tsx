import { Component, Prop, h } from "@stencil/core";

@Component({
    tag: 'mc-link',
    styleUrl: 'link.scss',
    shadow: true
})

export class Link {
    @Prop({reflect: true}) label: string;
    @Prop({reflect: true}) href: string;

    render() {
        return (
            <a href={this.href} part="a">{this.label}</a>
        );
    }
}
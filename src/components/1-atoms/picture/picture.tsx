import { Component, Prop, h } from "@stencil/core";

@Component({
    tag: 'mc-picture',
    styleUrl: 'picture.scss',
    shadow: true,
    assetsDirs: ['./assets']
})

export class Picture {
    @Prop({reflect: true}) photodesktop: string;
    @Prop({reflect: true}) photomobile: string;
    @Prop({reflect: true}) alt: string;
    @Prop({reflect: true}) lazy: string;

    // Check to see if lazy loading is not needed 
    lazyLoad() {
        let lazyCheck;
        if (this.lazy == 'false') {
            lazyCheck = '';
        } else {
            lazyCheck = 'lazy';
        }
        return lazyCheck;
    }

    render() {  
        return (
            
            <picture part="picture">
                <source srcSet={this.photodesktop} media="(min-width: 768px)" />
                <img src={this.photomobile} alt={this.alt}  loading={this.lazyLoad()} />
            </picture>
        );
    }
}
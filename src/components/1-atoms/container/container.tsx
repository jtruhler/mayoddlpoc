import { Component,  h } from "@stencil/core";

@Component({
    tag: 'mc-container',
    styleUrl: 'container.scss',
    scoped: true
})

export class Container {
    render() {
        return (
            <div class="wrapper">
                <div class="container">
                    <slot />
                </div> 
            </div>          
        );
    }
}
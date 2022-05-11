import { Component, h, Prop } from "@stencil/core";

@Component({
    tag: 'mc-feature',
    styleUrl: 'feature.scss',
    shadow: true
})

export class feature {
    @Prop({reflect: true}) data;
    @Prop({reflect: true}) sectionheader: string;
   
    // Check the heading level of the component 
    checkHeader(headertext) {
        let header;
        if (!this.sectionheader) {
            header = <h2> {headertext} </h2>;
        } else {
            header = <h3> {headertext} </h3>;
        }
        return header;
    }

    // Check to see what style to use for the button 
    displayType() {
        let display;
        if (!this.sectionheader) {
            display = 'feature';
        } else {
            display = 'support';
        }
        return display;
    }

    // Check to see what style to use for the button 
    checkButton() {
        let buttonClass;
        if (!this.sectionheader) {
            buttonClass = 'button outlineblack';
        } else {
            buttonClass = 'clickable';
        }
        return buttonClass;
    }

    // Check to see if there is a section header 
    checkSection(header) {
        let section;
        if (this.sectionheader) {
            section = <h2> {header} </h2>;
        } else {

        }
        return section;
    }
    
    render() {
        return ( 
            <div class="feature" data-type={this.displayType()}>
                {this.checkSection(this.sectionheader)}
                <div class="feature-container">
                {this.data.map((data) =>
                    
                    <div class="item">
                        <div class="image">
                            <mc-picture photodesktop={data.photodesktop}  photomobile={data.photomobile} alt={data.alt} lazy={data.lazy} class="square"></mc-picture></div>
                        <div class="content">
                            {this.checkHeader(data.header)}   
                            <p>{data.intro}</p>   
                            <span innerHTML={data.links} class="inline-multi-links"></span>
                            <mc-link href={data.href} label={data.linktext} class={this.checkButton()}></mc-link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
    }
}



// render() {
//     return <Host>
//       {this.items.map(item => {
//         const newChildren = this.doSomeProcessing(item.children);

//         return newChildren.map((child) => (
//           <div>{child}</div>
//         ));
//       })}
//     </Host>
//   }



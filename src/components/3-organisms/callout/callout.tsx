import { Component, h, Prop } from "@stencil/core";

@Component({
    tag: 'mc-callout',
    styleUrl: 'callout.scss',
    shadow: true
})

export class feature {
    @Prop({reflect: true}) aheading: string;
    @Prop({reflect: true}) atext: string;
    @Prop({reflect: true}) ahref: string;
    @Prop({reflect: true}) abuttonlabel: string;

    @Prop({reflect: true}) bheading: string;
    @Prop({reflect: true}) btext: string;
    @Prop({reflect: true}) bhref: string;
    @Prop({reflect: true}) bbuttonlabel: string;

    @Prop({reflect: true}) cheading: string;
    @Prop({reflect: true}) ctext: string;
    @Prop({reflect: true}) chref: string;
    @Prop({reflect: true}) cbuttonlabel: string;

    @Prop({reflect: true}) dheading: string;
    @Prop({reflect: true}) dtext: string;
    @Prop({reflect: true}) dhref: string;
    @Prop({reflect: true}) dbuttonlabel: string;
   
    render() {
        return ( 
            <div class="callout">
                <div class="box a">
                    <a href={this.ahref}><h2>{this.aheading}</h2></a>
                    <p>{this.atext}</p>
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="arrow-right">
                    <title>arrow-right</title>
                    <polygon points="22.71 8.29 21.29 9.71 26.59 15 2 15 2 17 26.59 17 21.29 22.29 22.71 23.71 30.41 16 22.71 8.29">
                    </polygon>
                    </svg>
                </div>
                <div class="box b">
                    <a href={this.ahref}><h2>{this.bheading}</h2></a>
                    <p>{this.btext}</p>
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="arrow-right">
                    <title>arrow-right</title>
                    <polygon points="22.71 8.29 21.29 9.71 26.59 15 2 15 2 17 26.59 17 21.29 22.29 22.71 23.71 30.41 16 22.71 8.29">
                    </polygon>
                    </svg>
                </div>
                <div class="box c">
                    <a href={this.ahref}><h2>{this.cheading}</h2></a>
                    <p>{this.ctext}</p>
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="arrow-right">
                    <title>arrow-right</title>
                    <polygon points="22.71 8.29 21.29 9.71 26.59 15 2 15 2 17 26.59 17 21.29 22.29 22.71 23.71 30.41 16 22.71 8.29">
                    </polygon>
                    </svg>
                </div>
                <div class="box d">
                <a href={this.ahref}><h2>{this.dheading}</h2></a>
                    <p>{this.dtext}</p>
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" class="arrow-right">
                    <title>arrow-right</title>
                    <polygon points="22.71 8.29 21.29 9.71 26.59 15 2 15 2 17 26.59 17 21.29 22.29 22.71 23.71 30.41 16 22.71 8.29">
                    </polygon>
                    </svg>
                </div>
            </div>
        )
    }
}





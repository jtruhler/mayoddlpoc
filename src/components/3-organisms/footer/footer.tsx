import { Component, h } from "@stencil/core";

@Component({
    tag: 'mc-footer',
    styleUrl: 'footer.scss',
    shadow: true
})

export class Footer {
    render() {
        return (
            <footer>
                <mc-link label="Back to top" href="#" exportparts="a"></mc-link>
                <p>
                Nunc efficitur quam leo, ac tincidunt velit lobortis id. Etiam nec mi pellentesque, iaculis arcu et, eleifend nisl. Donec tempus pretium turpis non consequat. Phasellus finibus finibus dolor et tristique. Curabitur elementum, nulla ut facilisis blandit, eros massa varius metus, ut laoreet massa nunc quis lectus.
                </p>

                <p>&copy; 1998-2020 XYZ Company. All rights reserved.</p>
            </footer>
        );
    }
}
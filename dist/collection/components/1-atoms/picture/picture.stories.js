import * as Utils from '/src/stories/StencilStorybookUtils';


export default {
    title: 'Picture',
    parameters: {
        
    },
    decorators: [
    ]
};
//
// DEFINE PROPERTIES, ETC FOR COMPONENT
//
const PROPS = ['photodesktop','photomobile','alt','lazy'];

//
// TEMPLATE
//
const Template = args => {
    const el = document.createElement('mc-picture');
    Utils.bindProps(el, PROPS, args);
    return el;
}
//
// STORIES
//
export const Default = Template.bind({});
Default.args = {
    photodesktop: 'https://sportsmedicine.mayoclinic.org/wp-content/uploads/2020/12/hero-home-footer-mobile-1120.jpg',
    photomobile: 'https://sportsmedicine.mayoclinic.org/wp-content/uploads/2020/12/hero-home-footer-1120.jpg',
    alt: 'Alt text',
    lazy: false
}
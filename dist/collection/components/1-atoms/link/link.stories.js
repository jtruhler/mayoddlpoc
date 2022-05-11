import * as Utils from '/src/stories/StencilStorybookUtils';

export default {
    title: 'Link',
    parameters: {
        actions: {
            handles: ['tapped']
        }
    },
    decorators: [
    ]
};
//
// DEFINE PROPERTIES, ETC FOR COMPONENT
//
const PROPS = ['label','href'];

//
// TEMPLATE
//
const Template = args => {
    const el = document.createElement('mc-link');
    Utils.bindProps(el, PROPS, args);
    return el;
}
//
// STORIES
//
export const Default = Template.bind({});
Default.args = {
    label: 'Link text',
    href: 'someurl'
}
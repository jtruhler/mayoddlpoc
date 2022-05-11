import * as Utils from '/src/stories/StencilStorybookUtils';

export default {
    title: 'Button',
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
const PROPS = ['label'];

//
// TEMPLATE
//
const Template = args => {
    const el = document.createElement('mc-button');
    Utils.bindProps(el, PROPS, args);
    return el;
}
//
// STORIES
//
export const Default = Template.bind({});
Default.args = {
    label: 'Button label'
}

Default.story = {
    parameters: {
        design: {
           type: 'figma',
           url: 'https://www.figma.com/file/RRchamG9ZBnOYwTkexFlIt/Button?node-id=0%3A1'
        }
     }
}

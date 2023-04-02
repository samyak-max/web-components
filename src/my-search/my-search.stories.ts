import "./my-search";

export default {
    title: 'Components/My Search',
    component: 'my-search',
    args: {
        label: 'Search Workflow' ,
        default: '🙂',
        ['--font-size']: '1rem',
        ['--padding']: '0.25rem'
    },
    parameters: {
        actions: {
            handles: ['search'],
        },
    },
};

const Template = (args: any) => `
    <my-search label="${args.label}" argTypes={{ onClick: { action: 'clicked' } }}>${args.default}</my-search>
`;
// const IconTemplate = (args: any) => `
//     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.0/font/bootstrap-icons.css" />
//     <my-search label="${args.label}">${args.default}</my-search>
// `;

export const Default: any = Template.bind({});
// export const Icon: any = IconTemplate.bind({});


Default.args = {};
// Icon.args = {
//     default: "<i class=\"bi bi-search\"></i>"
// };
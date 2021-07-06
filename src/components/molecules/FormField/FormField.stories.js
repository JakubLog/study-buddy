import FormField from './FormField';

const object = {
  title: 'components/molecules/FormField',
  component: FormField,
};

export default object;

const template = (args) => <FormField name="story" id="story" {...args} />;

export const Default = template.bind({});
Default.args = {
  label: 'Label',
  type: 'text',
};

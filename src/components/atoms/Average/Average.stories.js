import Average from './Average';

const object = {
  title: 'components/atoms/average',
  component: Average,
};

export default object;

const template = (args) => <Average {...args} />;

export const badGrades = template.bind({});
badGrades.args = {
  average: 2.0,
};

export const mediumGrades = template.bind({});
mediumGrades.args = {
  average: 3.5,
};
export const goodGrades = template.bind({});
goodGrades.args = {
  average: 5.0,
};

import NewsArticle from './NewsArticle';

const object = {
  title: 'components/organisms/NewsArticle',
  component: NewsArticle,
  argTypes: {
    image: {
      options: [null, 'https://picsum.photos/200'],
      control: { type: 'boolean' },
    },
  },
};

export default object;

const template = (args) => <NewsArticle {...args} />;

export const Default = template.bind({});
Default.args = {
  title: 'StoryBook',
  category: 'New technologies',
  feed: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam quis justo ut elit rutrum mollis eu ac sapien. Mauris lobortis iaculis tempor. Sed gravida interdum lectus id venenatis. Integer et molestie est, vitae scelerisque urna. Sed dui nunc, sollicitudin nec purus at, congue suscipit quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam non sagittis eros. Sed a arcu sed metus interdum varius a nec arcu. Pellentesque maximus mollis nibh, ut ultricies diam condimentum eu. Sed et tempor nisi. Quisque pulvinar ligula nulla, viverra fringilla turpis aliquet a.',
};

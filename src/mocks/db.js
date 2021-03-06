import { factory, primaryKey } from '@mswjs/data';
import faker from 'faker';
import { getDate } from 'helpers/getDate';

const group = ['A', 'B', 'C'];

faker.seed(123);

const generateAverage = () => faker.datatype.number({ min: 1, max: 6, precision: 0.1 });
const generateGroup = (index) => group[index];

export const db = factory({
  student: {
    id: primaryKey(faker.datatype.uuid),
    name: () => faker.fake('{{name.firstName}} {{name.lastName}}'),
    attendance: () => `${faker.datatype.number({ min: 0, max: 100 })}%`,
    average: () => generateAverage(),
    group: () => generateGroup(faker.datatype.number({ min: 0, max: 2 })),
    course: () => faker.fake('{{random.word}} {{random.word}}'),
    grades: () => [
      {
        subject: 'Business',
        average: generateAverage(),
      },
      {
        subject: 'Science Intelligence',
        average: generateAverage(),
      },
      {
        subject: 'Programming',
        average: generateAverage(),
      },
    ],
  },
  group: {
    id: primaryKey(faker.datatype.uuid),
    name: () => '',
  },
  events: {
    id: primaryKey(faker.datatype.uuid),
    name: () => faker.fake('{{random.word}}'),
    content: () => faker.fake('{{random.words}}'),
    group: () => generateGroup(faker.datatype.number({ min: 0, max: 2 })),
  },
  user: {
    id: primaryKey(faker.datatype.uuid),
    name: () => 'Jakub Sobczak',
    login: () => 'cool@gmail.com',
    password: () => 'admin',
  },
  note: {
    id: primaryKey(faker.datatype.uuid),
    title: () => 'lorem ipsum dolor sit amet',
    content: () => 'lorem ipsum dolor sit amet',
  },
  message: {
    id: primaryKey(faker.datatype.uuid),
    group: () => generateGroup(faker.datatype.number({ min: 0, max: 2 })),
    title: () => 'Lorem ipsum',
    description: () => 'Lorem ipsum dolor sit amet',
    author: () => 'Service Admins',
    date: () => getDate(),
  },
  todo: {
    id: primaryKey(faker.datatype.uuid),
    title: () => 'Lorem ipsum',
    description: () => 'Lorem ipsum dolor',
    isActive: () => true,
  },
});

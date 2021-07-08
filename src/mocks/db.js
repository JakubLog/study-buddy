import { factory, primaryKey } from '@mswjs/data';
import faker from 'faker';

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
        subject: 'Act',
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
  user: {
    id: primaryKey(faker.datatype.uuid),
    name: () => 'Jakub Sobczak',
    login: () => 'cool@gmail.com',
    password: () => 'admin',
  },
});

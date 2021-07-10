import '@testing-library/jest-dom';
import { setupServer } from 'msw/node';
import { handlers } from 'mocks/handlers/handlers';
import { db } from 'mocks/db';

const server = setupServer(...handlers);

const createStudents = (count = 15) => {
  for (let i = 0; i < count; i++) {
    db.student.create();
  }
};

createStudents();

db.group.create({ name: 'A' });
db.group.create({ name: 'B' });
db.group.create({ name: 'C' });

db.user.create();

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

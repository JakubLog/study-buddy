import { handlers } from './handlers/handlers';
import { setupWorker } from 'msw';
import { db } from './db';

export const worker = setupWorker(...handlers);

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
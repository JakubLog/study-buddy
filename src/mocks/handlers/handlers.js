import { students } from 'mocks/data/students';
import { groups } from 'mocks/data/groups';
import { rest } from 'msw';

export const handlers = [
  rest.get('/allStudents/', (req, res, ctx) => {
    return res(
      ctx.status('200'),
      ctx.json({
        students,
      })
    );
  }),
  rest.get('/group/', (req, res, ctx) => {
    return res(
      ctx.status('200'),
      ctx.json({
        groups,
      })
    );
  }),
  rest.get('/students/:group', (req, res, ctx) => {
    if (req.params.group) {
      const filteredUsers = students.filter((student) => student.group === req.params.group);
      return res(
        ctx.status('200'),
        ctx.json({
          students: filteredUsers,
        })
      );
    }
    return res(
      ctx.status('200'),
      ctx.json({
        students,
      })
    );
  }),
];

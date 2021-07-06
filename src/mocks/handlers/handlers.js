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
  rest.get('/student/:id', (req, res, ctx) => {
    if (req.params.id) {
      const studentData = students.find((student) => student.id === req.params.id);
      if (!studentData) {
        return res(
          ctx.status('404'),
          ctx.json({
            error: 'No matching records!',
          })
        );
      }
      return res(
        ctx.status('200'),
        ctx.json({
          students: studentData,
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

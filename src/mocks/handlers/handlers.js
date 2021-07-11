import { students } from 'mocks/data/students';
import { rest } from 'msw';
import { db } from 'mocks/db';
import { authenticateRequest } from 'mocks/helper';

const userSanitize = (data) => {
  const { id, password, ...sanitized } = data;
  return sanitized;
};

export const handlers = [
  rest.get('/allStudents/', (req, res, ctx) => {
    const allStudents = db.student.getAll();
    return res(
      ctx.status('200'),
      ctx.json({
        students: allStudents,
      })
    );
  }),
  rest.get('/group/', (req, res, ctx) => {
    const allGroups = db.group.getAll();
    return res(
      ctx.status('200'),
      ctx.json({
        groups: allGroups,
      })
    );
  }),
  rest.get('/students/:group', (req, res, ctx) => {
    if (req.params.group) {
      const filteredUsers = db.student.findMany({
        where: {
          group: {
            equals: req.params.group,
          },
        },
      });
      return res(
        ctx.status('200'),
        ctx.json({
          students: filteredUsers,
        })
      );
    }
  }),
  rest.get('/student/:id', (req, res, ctx) => {
    if (req.params.id) {
      const studentData = db.student.findFirst({
        where: {
          id: {
            equals: req.params.id,
          },
        },
      });
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
  rest.post('/login', (req, res, ctx) => {
    const user = db.user.findFirst({
      where: {
        login: {
          equals: req.body.login,
        },
      },
    });
    if (user.password === req.body.password) {
      const token = btoa(user.login);
      localStorage.setItem('__be_token__', token);
      return res(ctx.status('200'), ctx.json({ ...userSanitize(user), token }));
    }
    return res(
      ctx.status('403'),
      ctx.json({
        error: 'No matching records!',
      })
    );
  }),
  rest.get('/me', (req, res, ctx) => {
    if (authenticateRequest(req)) {
      const user = db.user.getAll();
      return res(ctx.status(200), ctx.json({ ...userSanitize(user) }));
    }
    return res(ctx.status(401));
  }),
  rest.get('/events/:group', (req, res, ctx) => {
    const events = db.events.findMany({
      where: {
        group: {
          equals: req.params.group,
        },
      },
    });
    if (events) {
      return res(
        ctx.status(200),
        ctx.json({
          events,
        })
      );
    }
    return res(ctx.status(404), ctx.json({ error: 'Group not found' }));
  }),
];

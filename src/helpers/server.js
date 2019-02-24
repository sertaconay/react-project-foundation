const hapi = require('hapi');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const Joi = require('joi');


const server = hapi.server({
  port: 4000,
  host: 'localhost',
  routes: {
    cors: true,
  },
});

const init = async () => {
  server.route([
    {
      method: 'POST',
      path: '/user/get',
      handler: async (request, reply) => {
        const userJson = await fs.promises.readFile(path.join(__dirname, '../data/user.json'));
        const userData = JSON.parse(userJson);
        const { payload } = request;

        if (userData.username === payload.username && userData.password === payload.password) {
          const somethingWithMd5 = crypto.createHash('md5').update(userData.username).digest('hex');
          return reply.response({ status: 'success', token: somethingWithMd5, data: { ...userData } }).code(200);
        }

        return reply.response({ status: 'failure', message: 'no user info' }).code(422);
      },
      options: {
        validate: {
          payload: {
            username: Joi.string().required().min(3),
            password: Joi.string().required().min(3),
          },
        },
      },
    },
  ]);

  await server.start();
  console.log(`up and running at ${server.info.uri}`);
};

init();

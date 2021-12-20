module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'd67079906081a809c382cced83626456'),
  },
});

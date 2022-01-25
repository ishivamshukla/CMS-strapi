module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f9427c968898f91118ed3492add54649'),
  },
});

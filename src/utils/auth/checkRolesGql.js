const boom = require('@hapi/boom');

function checkRolesGql(user, ...roles) {
  if (!roles.includes(user.role)) {
    boom.unauthorized('your role is not allow');
  }
}

module.exports = checkRolesGql;

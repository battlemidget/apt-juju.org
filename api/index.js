"use strict";

let UserRoutes = require("./users/routes");

let api = {
  register: (server, options, next) => {
    server.route(UserRoutes);
  }
};

api.register.attributes = {
  name: 'apiPlugin',
  version: "1.0.0"
};

module.exports = api;

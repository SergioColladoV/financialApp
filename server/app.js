require('dotenv').config();
const express = require('express');
const app = express();

// CONFIGS
require('./configs/mongoose.config')
require('./configs/debug.config')
require('./configs/preprocessor.config')(app)
require('./configs/locals.config')(app)
require('./configs/middleware.config')(app)
require('./configs/passport.config')(app)
require('./configs/passport')(app)

// ROUTES
const index = require('./routes/index.route');
app.use('/', index);

const authRoutes = require('./routes/auth.route');
app.use('/auth', authRoutes);

// EXPORT
module.exports = app;

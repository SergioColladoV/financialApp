require("dotenv").config();
const express = require("express");
const app = express();

// CONFIGS
require("./configs/mongoose.config");
require("./configs/debug.config");
require("./configs/preprocessor.config")(app);
require("./configs/locals.config")(app);
require("./configs/middleware.config")(app);
require("./configs/passport.config")(app);
require("./configs/passport")(app);

// ROUTES
app.use("/auth", require("./routes/auth.routes"));
app.use("/api", require("./routes/incomes.routes"));
// app.use("/api", require("./routes/expenses.routes"));

// EXPORT
module.exports = app;

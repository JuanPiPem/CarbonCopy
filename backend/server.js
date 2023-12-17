const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const routes = require("./routes/index.routes");
const morgan = require("morgan");
const cors = require("cors");
const db = require("./db");
const envs = require("./config/envs");

app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/", routes);

const PORT = process.env.PORT || 3001;
db.sync({ force: false }).then(() => {
  app.listen(envs.PORT, () => {
    console.log(`Server is running on port ${PORT} 🚀`);
  });
});

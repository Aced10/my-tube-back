const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");

dotenv.config();

const app = express();

app.listen(process.env.PORT || 4200, () => {
  console.log(`Server is ready on port ${process.env.PORT ?? 4200}`);
});

app.use(cors());

app.use(bodyParser.json({ limit: "50mb", extended: true }));

app.use("/api/videos", require("./routes/videosRoutes"));
app.use("/api/users", require("./routes/loginRoutes"));

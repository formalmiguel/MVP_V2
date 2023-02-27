const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");

app.use(express.static("../client/public"));
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Web server running on: http://localhost:${PORT}`);
});

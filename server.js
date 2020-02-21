const express = require("express");

const app = express();

//body parser
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

//Companies routes
app.use("/api/companies", require("./routes/api/companies"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

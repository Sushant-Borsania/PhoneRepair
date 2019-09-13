const express = require("express");
const cors = require("cors");
const path = require("path");
const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

sgMail.setApiKey(process.env.API_KEY);

app.use(cors());

//welcome page
app.get("/", (req, res) => {
  res.send("welcome to the sendgrid mail - test");
});

//email page
app.post("/phoneRepair/address", (req, res) => {
  const { Reference, Email, FirstName, LastName, Address, permit, company, color, model, issues, cost, date, time } = req.body.data;
  //sendgrid reqs
  const msg = {
    to: Email,
    cc: "cerebellum.flr@gmail.com",
    from: "sushant.yt@gmail.com",
    templateId: "d-724a46bd9d8e4b2ea388b56706d4f7a7",
    dynamic_template_data: {
      FirstName: FirstName,
      Email: Email,
      company: company,
      model: model,
      color: color,
      issues: issues,
      Address: Address,
      permit: permit,
      city: "Edmonton",
      cost: cost,
      date: date,
      time: time,
      Reference: Reference
    }
  };
  sgMail.send(msg);
  res.send("Data received");
});

if (process.env.NODE_ENV === "production") {
  // Serve any static files
  // app.use(express.static(path.join(__dirname, "client/build")));
  app.use(express.static("client/build"));
  // Handle React routing, return all requests to React app
  app.get("*", function(req, res) {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));

//    // "dev": "run-p dev:**",
// "dev:server": "nodemon server.js",
// "dev:app": "cd client && npm run start",
// "build:app": "cd client && npm run build",


// "heroku-postbuild": "cd client && npm install && npm install --only=dev --no-shrinkwrap && npm run build"
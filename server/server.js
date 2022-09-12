const express = require('express');
const routes = require('./routes');
const path = require('path');
const helpers = require('./utils/helpers');
const client = require('./config/connection');
require("dotenv").config({ path: path.join(__dirname, "..", ".env") });
const { authMiddleware } = require('./utils/auth');

console.log(process.env.DB_NAME);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
	req.client = client;
	next();
});

app.use(authMiddleware);
app.use(routes);

app.listen(PORT, () => { 
  console.log(`Server running on port ${PORT}`); 
});
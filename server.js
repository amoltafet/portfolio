const PORT = process.env.PORT || 3000;
const express = require('express')
const app = express();

const path = require('path');

app.use(express.json());

// serving static files
app.use(express.static(path.join(__dirname, 'public')));


app.listen(PORT, () => console.log(`Server is stated on 3000`));
const express = require('express');
const cors = require('cors');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

let users = [
    {
        id: 1,
        name: 'Juan Dela Cruz',
        role: 'Student'
    },
    {
        id: 2,
        name: 'Hedrian Mendoza',
        role: 'Faculty'
    }
]

let random = [
    {
        id: 1,
        number: 0
    }
]

app.get('/api/user', (req, res) => {
    res.json(users);
})

app.get('/api/random', (req, res) => {
    res.json(random);
})


app.listen(PORT, () => {
    console.log('Server running 8080');
})   
const express = require('express');
const cors = require('cors');

const app = express();



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

app.get('/api/user', (req, res) => {
    res.json(users);
})


app.listen(8080, () => {
    console.log('Server running 8080');
})   
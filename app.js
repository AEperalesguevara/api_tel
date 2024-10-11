const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const app = express();

const prisma = new PrismaClient();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.get('/api/persons', async (req, res) => {
    const persons = await prisma.person.findMany();
    res.json(persons);
});


app.get('/info', async (req, res) => {
    const persons = await prisma.person.findMany();
    const currentDate = new Date();  
    const numPersons = persons.length;  

    const infoPage = `
        <p>Phonebook has info for ${numPersons} people</p>
        <p>${currentDate}</p>
    `;
    
    res.send(infoPage); 
});


app.get('/api/persons/:id', async (req, res) => {
    const id = Number(req.params.id);
    const person = await prisma.person.findUnique({
        where: { id: id }
    });

    if (person) {
        res.json(person);
    } else {
        res.status(404).json({ error: 'Person not found' });
    }
});

app.delete('/api/persons/:id', async (req, res) => {
    const id = Number(req.params.id);
    
    try {
        await prisma.person.delete({
            where: { id: id }
        });
        res.status(204).end();
    } catch (error) {
        res.status(404).json({ error: 'Person not found' });
    }
});


app.post('/api/persons', (req, res) => {
    console.log(req.body); 
    const { name, number } = req.body;

    const newPerson = {
        id: Math.floor(Math.random() * 10000), 
        name,
        number,
    };

    persons.push(newPerson); 
    res.status(201).json(newPerson); 
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

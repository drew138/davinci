import express from 'express';
const router = express.Router();
<<<<<<< HEAD
import db from '../config/database';
import anuncioTable from '../models/anuncio';

// Get all publications
router.get('/', (req, res) => {
    anuncioTable.findAll()
        .then(records => {
            console.log(records);
            res.status(200).json({msg: 'success'});
        })
        .catch(err => console.log(err));
    
})

// Get a single publication
router.get('/', (req, res) => {
    const record = req.body;
    
    anuncioTable.find(record)
        .catch(err => console.log(err));
})

// Create a publication
router.post('/', (req, res) => {
    const record = req.body;
    
    anuncioTable.create(record)
        .catch(err => console.log(err));
})

// Delete a publication
router.put('/', (req, res) => {
    const record = req.body;
    
    anuncioTable.update(record)
        .catch(err => console.log(err));
})

// Delete a publication
router.delete('/', (req, res) => {
=======
import anuncioTable from '../models/anuncio';

// Get all publications
router.get('/anuncio/', async (req, res) => {
    const records = await anuncioTable.findAll()
        .catch(err => console.log(err));
    res.status(200).json({msg: 'success'});
})

// Get a single publication
router.get('/anuncio/:id/', async (req, res) => {
    const id = req.params.id;
    
    const record = await anuncioTable.find({ id })
        .catch(err => console.log(err));
    
    res.status(200).json({record: record});
})

// Create 
router.post('/anuncio/', async (req, res) => {
    const info = req.body;
    
    const record = await anuncioTable.create(info)
        .catch(err => console.log(err));
})

// Update
router.put('/anuncion/:id/', async (req, res) => {
    const info = req.body;
    
    const record = await anuncioTable.update(info)
        .catch(err => console.log(err));
})

// Delete
router.delete('/anuncio/:id/', (req, res) => {
>>>>>>> bc89ade88faa1ceffb04f4da20496f838b4950f9
    const record = req.body;
    
    anuncioTable.delete(record)
        .catch(err => console.log(err));
})

module.exports = router;
const router = require('express').Router();
// const notes = require('../lib/notes');
const fs = require('fs');
const path = require('path');


// This route gets all the notes from DB
router.get('/notes', (req, res) => {
    try{
        let notes = JSON.parse(fs.readFileSync(`${__dirname}/db/db.json`, "utf-8")); // get notes from db 
        
        return res.status(200).json({
            status: 'success',
            data: {
                notes
            }
        })
    } catch(err){
        console.log(`Did not work ======> ${err}`);
    }
});

// route that gets one note from DB
router.get('/notes/:id', (req, res) => {
    console.log(req.params.id);
    let notesArray = [];
    try{
        
        // get all notes from db 
        let notes = JSON.parse(fs.readFileSync(`${__dirname}/db/db.json`, "utf-8"));
        // iterating through notes.notes[] 
        // getting each note
        notes.notes.map(note => { 
            notesArray.push(note) // pushing each note into our empty array notesArray[]
        })
        // 1. find note
        let correctNote = notesArray.find(x => x.id === req.params.id);
        console.log(`The note found is: ===========${JSON.stringify(correctNote)}`);

        // return note
        return res.status(201).json({
            status: 'success',
            data: {
                note: correctNote
            }
        })
    }catch(err){
        console.log(err);
    }
})

// router.post('/notes', (req, res) => {
//     notes.addNotes(req.body).then(notes => 
//         res.json(notes))
//         .catch(err => res.status(400).json(err))
// });

// router.delete('/notes/:id', (req, res) => {
//     notes.deleteNotes(req.params.id).then(() => 
//     res.json({ ok:true}))
//     .catch(err => res.status(400).json(err))
// });


module.exports = router;
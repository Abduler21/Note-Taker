const fs = require('fs');
const dbPath = require('../db/db.json')
const path = require('path');
// const { create } = require('domain');

exports.getNotes = () => {
    try{
        let notes = fs.readFileSync(dbPath, "utf-8");
        console.log(notes);
    } catch(err){
        console.log(`Did not work ======> ${err}`);
    }
}

exports.checkNote = (note)=> {
    if (!note.title || !note.text) {
        return false;
    } return true;
}

exports.addNotes = (note, notesArray) => {
    notesArray.push(note);
    fs.writeFileSync(path.join(__dirname, './db/db.json'), JSON.stringify({ notes: notesArray }, null, 2));
    return note;
}

exports.deleteNotes = (notesArray) => {
    fs.writeFileSync(path.join(__dirname, './db/db.json'), JSON.stringify({ notes: notesArray }, null, 2));
}


const { Router } = require('express')
const router = Router()

const { 
    renderNoteForm, 
    createNewNote, 
    renderNotes, 
    renderEditForm, 
    updateNote, 
    deleteNote 
} = require('../controllers/notes.controller')

//Create new note
router.get('/notes/add', renderNoteForm)

router.post('/notes/new-note', createNewNote)

// View all note
router.get('/notes', renderNotes)

//Edit note
router.get('/notes/edit/:id', renderEditForm)

router.put('/notes/edit/:id', updateNote)

//Delet note
router.delete('/notes/delete/:id', deleteNote)

module.exports = router
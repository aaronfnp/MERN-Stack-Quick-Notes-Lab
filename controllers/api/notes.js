const Note = require('../../models/note')

module.exports = {
    index,
    show,
    create,
    delete: deleteOne
};

async function index(req, res) {
    console.log(req.user._id)
    // NEED TO FIND BY USER PLS
    const notes = await Note.find({user: req.user._id}).sort('-createdAt').exec();
    res.json(notes);
}

async function show(req, res) {
    const note = await Note.findById(req.params.id);
    res.json(note);
}

async function create(req, res) {
    try {
        const newNote = await Note.create( req.body );
        console.log(newNote);
        res.json(newNote);
    } catch (error) {
        console.error('Error adding note:', error);
        res.status(500).json({ error: 'Failed to add note' });
    }
}

async function deleteOne(req, res) {
    try {
        const note = await Note.findById(req.params.id);
        if (!note) {
            return res.status(404).json({ error: 'Note not found' });
        }
        await Note.deleteOne(note);
        res.json(note);
    } catch (error) {
        console.error('Error deleting note:', error);
        res.status(500).json({ error: 'Failed to delete note' });
    }
}
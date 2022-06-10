var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
    {
        genre: { type: String, required: true, enum: ['Fiction', 'Sci-Fi', 'Non Fiction', 'War'], default: 'Fiction' },
    }
);

// Virtual for genre's URL
GenreSchema
    .virtual('url')
    .get(function () {
        return '/catalog/genre/' + this._id;
    });

//Export model
module.exports = mongoose.model('Genre', GenreSchema);

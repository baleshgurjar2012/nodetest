var mongoose = require('mongoose');


var GenreInstanceSchema = new mongoose.Schema({

    name:{ type:string, required:true, max:100, min:3},

});


// Virtual for bookinstance's URL
GenreInstanceSchema
.virtual('url')
.get(function () {
  return '/catalog/Genre/' + this._id;
});

module.exports = mongoose.model('Genre', GenreInstanceSchema);

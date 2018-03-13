var mongoose = require('mongoose');
var PostSchema = new mongoose.Schema({
        posstype: String,
        userid: String,
        tags: String,
        inspiredby: [String],
        pollquestion: String,
        activestatus: Boolean,
        ismultiplechoice : Boolean,
        choices : [String],

});

module.exports = mongoose.model('posts', PostSchema);

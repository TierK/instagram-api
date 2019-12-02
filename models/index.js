const mongoose = require('mongoose');

mongoose
     .connect("mongodb://heroku_qfll00pp:s1a6g33o99rjgt1sbf3p9uk5lb@ds349618.mlab.com:49618/heroku_qfll00pp", {useNewUrlParser: true})
	.catch(() => process.exit(1));

require('./user');
require('./post');
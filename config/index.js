const config = {
    mongoUri: process.env.MONGODB_URI || "mongodb://heroku_4nrl7n1g:d6m1n6th9j5qin14ji2ihptmv9@ds349628.mlab.com:49628/heroku_4nrl7n1g",
    port: process.env.PORT || 4000,
    jwtSecret: process.env.JWT_SECRET || 'a7s9qvbvcouqc'
};

module.exports = config;
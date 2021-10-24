require('dotenv').config({ path: './config/.env' });
// url stored in .env
const url = process.env.url;
// config/database.js
module.exports = {
	url: url,
	dbName: 'notes',
};

// ;

//mongodb+srv://savageAuth:pIuybFhikT6dREN7@cluster0.qbdrb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

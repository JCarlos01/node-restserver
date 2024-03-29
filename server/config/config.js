/// =================
// Puerto
// ==============

process.env.PORT = process.env.PORT || 3000;

//===============
// Entorno
//================

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//===============
// Vencimiento del token
//================

process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;


//===============
// SEED de autenticación
//================

process.env.SEED = process.env.SEED || 'este-es-el-seed-produccion';

//=======================
// Base de datos
// =====================

let urlDB;

if (process.env.NODE_ENV == 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = process.env.MONGO_URI;
}

process.env.URLDB = urlDB;

//=======================
// Google Client ID
// =====================

process.env.CLIENT_ID = process.env.CLIENT_ID || '557314053482-j61poccbp8ebv5e8fg8llm5lvrp274np.apps.googleusercontent.com';
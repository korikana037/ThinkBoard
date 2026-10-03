require('dotenv').config();

const app = require('./app');

const PORT = process.env.PORT || 3000;

const connectDB = require('./config/db');

const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`server started successfully at ${PORT}`);
        });
    } catch (error) {
        console.error('The error is: ', error.message);
        process.exit(1);
    }
}

startServer()
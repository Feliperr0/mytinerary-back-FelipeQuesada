import mongoose from "mongoose";






async function databaseConnection() {
    try {
        await mongoose.connect(process.env.URI_MONGO)
        console.log('Database Connected')
    }
    catch (error) {
        console.log(error)
    }
}

databaseConnection()

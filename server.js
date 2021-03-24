// MODULES
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config0;

// APP
const app = express();
const PORT = process.env.PORT || 3000;
const MONGOURI = process.env.MONGOURI;

// ROUTES
import rootRouter from "./routes/root.js";


// MONGOOSE
mongoose.connect(MONGOURI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

// LISTEN
app.listen(PORT, () => {
	console.log(`server running: localhost/${PORT}`);
});

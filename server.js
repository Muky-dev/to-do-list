// MODULES
import express from "express";
import mongoose from "mongoose";
import handlebars from "express-handlebars";
import dotenv from "dotenv";
dotenv.config()

// APP
const app = express();
const PORT = process.env.PORT || 3000;
const MONGOURI = process.env.MONGOURI;

// HANDLEBARS
app.engine('handlebars', handlebars({
	defaultLayout: 'main',
}));
app.set('view engine', 'handlebars');

// ROUTES
import rootRouter from "./routes/root.js";
app.use("/", rootRouter);

// MONGOOSE
mongoose.connect(MONGOURI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', error => console.error(error));
db.once('open', () => {
    console.log("database connected");
});

// LISTEN
app.listen(PORT, () => {
	console.log(`server running: localhost:${PORT}`);
});
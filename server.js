// MODULES
import express from "express";


// APP
const app = express();
const PORT = process.env.PORT || 3000;

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

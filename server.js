// MODULES
import express from "express";


// APP
const app = express();
const PORT = process.env.PORT || 3000;


// LISTEN
app.listen(PORT, () => {
	console.log(`server running: localhost:${PORT}`);
});

import express from "express";
import cors from "cors"; // Reikalingas, kad pasileistu Back ir Front serveriai
import Basketball from "./basketball.js";

const app = express();
app.use(cors());

// Random number generator
function randomNum(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Date generator
function getDate() {
	const timeElapsed = Date.now();
	const today = new Date(timeElapsed);
	return today.toDateString().slice(4);
}

// Time generator
function getTime() {
	const d = new Date();
	return d.getHours() + ":" + d.getMinutes();
}

function getStartData() {
	return {
		round: "Round 26",
		date: getDate(),
		stadium: "Peace And Friendship Stadium",
		time: getTime(),
		team1: "Olympiacos Piraeus",
		team1rez: 0,
		team2: "Anadolu Efes Istanbul",
		team2rez: 0,
	};
}

function getUpdatedData() {
	return {
		team1rez: randomNum(0, 120),
		team2rez: randomNum(0, 120),
	};
}

app.get("/", (req, res) => {
	res.json(getStartData());
});

app.get("/update", (req, res) => {
	res.json(getUpdatedData());
});

const rezult = new Basketball();

app.get("/checkscore", (req, res) => {
	res.json(rezult);
});

app.listen(3001); // Server port

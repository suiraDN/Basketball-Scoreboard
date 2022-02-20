import express from "express";
import cors from "cors";
import Krepsinis from "./krepsinis.js";

const app = express();
app.use(cors());

function randomNum(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getDate() {
	const timeElapsed = Date.now();
	const today = new Date(timeElapsed);
	return today.toDateString().slice(4);
}

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
		team1rez: randomNum(0, 99),
		team2rez: randomNum(0, 99),
	};
}

app.get("/", (req, res) => {
	res.json(getStartData());
});

app.get("/update", (req, res) => {
	res.json(getUpdatedData());
});

const rezultatas = new Krepsinis();
// console.log(rezultatas);

app.get("/checkscore", (req, res) => {
	res.json(rezultatas);
});

app.listen(3001);

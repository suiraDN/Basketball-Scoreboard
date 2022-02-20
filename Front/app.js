fetch("http://localhost:3001/")
	.then((res) => res.json())
	.then((jsonObj) => {
		console.log(jsonObj);

		// document.querySelector(".event-round").innerHTML = `${jsonObj.round}`;
		document.querySelector(".event-date").innerHTML = `${jsonObj.date}`;
		document.querySelector(".event-stadium").innerHTML = `${jsonObj.stadium}`;
		document.querySelector(".event-time").innerHTML = `${jsonObj.time}`;

		// Teams
		document.querySelector(".team1").innerHTML = `${jsonObj.team1}`;
		document.querySelector(".team2").innerHTML = `${jsonObj.team2}`;

		// Teams Score
		document.querySelector(".rez1").innerHTML = `${jsonObj.team1rez}`;
		document.querySelector(".rez2").innerHTML = `${jsonObj.team2rez}`;
	});

function updateData() {
	fetch("http://localhost:3001/checkscore/")
		.then((res) => res.json())
		.then((jsonObj) => {
			document.querySelector("#team1-rez").innerHTML = `${jsonObj.komanda1}`;
			document.querySelector("#team2-rez").innerHTML = `${jsonObj.komanda2}`;
			document.querySelector(
				".event-round"
			).innerHTML = `Round ${jsonObj.kelinys}`;

			// Remove text color
			document.querySelector("#team1-rez").classList.remove("rez-color--green");
			document.querySelector("#team2-rez").classList.remove("rez-color--green");

			// Priskiriam spalva pagal rezultata
			if (jsonObj.komanda1 > jsonObj.komanda2) {
				document.querySelector("#team1-rez").classList.add("rez-color--green");
			}
			if (jsonObj.komanda2 > jsonObj.komanda1) {
				document.querySelector("#team2-rez").classList.add("rez-color--green");
			}
		});
}

// "Reniew" button listener
document.querySelector(".btn-view").addEventListener("click", updateData);

function timeout() {
	setTimeout(function () {
		updateData();
		timeout();
	}, 5000);
}

// run regular updates
timeout();

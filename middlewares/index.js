const express = require("express");
const app = express();

app.use(express.json()); // middleware to parse json data
function userMiddleware(req, res, next) {
	const username = req.headers.username;
	const password = req.headers.password;
	if (username != "abhishek" && password != "pass") {
		res.status(403).json({
			message: "user doesn't exist ",
		});
	} else {
		next();
	}
}


function kidneyMiddleware(req, res, next) {
	const kidneyId = req.query.kidneyId;
	if (kidneyId != 1 && kidneyId != 2) {
		res.status(403).json({
			message: "Kidney doesn't exist",
		});
	} else {
		next();
	}
}
app.get("/checkup", userMiddleware, (req, res) => {
	// do some logic here

	res.send("Your test report is ready");
});

app.get("/kidney-check", kidneyMiddleware, (req, res) => {
	// do some logic here
	console.log("control is reaching here ");
	res.send("Your kidneys are fine");
});

app.listen(3000, () => {
	console.log("Server is running on port 3000");
});

var
updata = 0;
data = [
    ["clothing", ["shopping", "clothing"]],
    ["clothes", ["shopping", "clothing"]],
    ["apple", ["food", "fruit"]],
    ["orange", ["color", "warm color", "fruit", "orange", "fruit", "citrus", "danger"]],
    ["banana", ["tropical", "food", "yellow", "berry", "fruit"]],
    ["lime", ["fruit", "food", "green", "citrus"]],
    ["blueberr", ["berry", "blue", "fruit"]], // no "y" for plural version
    ["grape", ["berry", "fruit", "food"]],
    ["lemon", ["citrus", "yellow", "food", "fruit"]],
    ["pants", ["clothing", "shopping", "legs"]],
    ["eat", ["food", "mouth"]],
	["ate", ["food", "mouth"]],
	["strawberr", ["food", "fruit", "red"]], // no "y" for plural version
	["nice", ["positive"]],
	["kind", ["positive"]],
	["good", ["positive"]],
	["love", ["positive", "romance", "love"]],
	["like", ["positive"]],	
	["yummy", ["positive", "food"]],
	["tasty", ["positive", "food"]],
	["fun", ["positive"]],
	["red", ["color", "warm color", "danger", "anger", "love", "romance"]], // orange is way up at the top
	["yellow", ["color", "warm color", "danger", "happy"]],
	["green", ["color", "cold color", "disgust", "luck", "life", "nature"]],
	["blue", ["color", "cold color", "sadness", "wisdom", "freedom"]],
	["purple", ["color", "cold color", "magic", "mystery"]],
	["pink", ["color", "warm color", "love", "romance"]],
	["?", ["question"]],
	["hello", ["greeting"]],
	["hey there", ["greeting"]],
	["meet you", ["greeting"]],
	["meeting you", ["greeting"]],
	["lol", ["positive"]],
	["l.o.l", ["positive"]],
	["qwertyy", ["creator"]],
	["artificial idiot", ["me", "artificial intelligence"]],
	["mister", ["male", "formal"]],
	["mr", ["male", "formal"]],
	["ms", ["female", "formal"]],
	["mx", ["non-binary", "formal"]],
	["miss", ["female", "formal"]],
	["dad", ["parent", "male", "family"]],
	["mom", ["parent", "female", "family"]],
	["parent", ["parent", "family"]],
	["father", ["parent", "male", "family"]],
	["mother", ["parent", "female", "family"]],
	["brother", ["sibling", "male", "family"]],
	["sister", ["sibling", "female", "family"]],
	["sibling", ["sibling", "family"]],
	["grandpa", ["grandparent", "male", "family"]],
	["grandma", ["grandparent", "female", "family"]],
	["date", ["romance", "love"]],
	["dating", ["romance", "love"]],
	["hate", ["negative"]],
	["dislike", ["negative"]],
	["not", ["not"]]
],
userinput = "",
results = [];
/*
while (true) {
    userinput = prompt("enter a word...");
    if (userinput === "exit") {
        break;
    }
    userinputmeaning = prompt("what does that mean?");
    data.push(userinput);
    datameaning.push(userinputmeaning);
}
*/
document.head.innerHTML = `
<title>artificial idiot</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="icon" href="logo.png">
<style>
html {
	--active: #96bbff;
	--bg: #202020;
	--border: #898989;
	--content-bg: #151515;
	--red: #ff3a3a;
}
body {
	font-family: system-ui, -apple-system, BlinkMacSystemFont, Ubuntu, Arial, sans-serif, monospace;
	background-color: var(--bg);
	color: #ffffff;
	color-scheme: dark;
	margin: 20px;
}
h1 {
	border-bottom: solid 1px var(--border);
	margin-bottom: 10px;
}
#results {
	height: calc(100vh - 300px);
	overflow-y: scroll;
}
textarea {
	width: calc(100% - 26px);
	height: 200px;
	resize: none;
	border-radius: 10px;
	border: dashed 1px var(--border);
	transition: 0.2s;
	padding: 12px;
	font-size: inherit;
	font-family: inherit;
}
textarea:focus {
	border: solid 1px var(--active);
	outline: none;
}
::selection {
	background-color: var(--active);
	color: #000000;
}
::-moz-selection {
	background-color: var(--active);
	color: #000000;
}
a {
	color: var(--active);
	text-decoration: none;
	cursor: pointer;
}
a:hover {
	text-decoration: underline;
}
#github-link {
	position: relative;
    top: 10px;
    margin-right: 10px;
	width: 35px;
}
a::selection {
	text-decoration: underline;
}
a::-moz-selection {
	text-decoration: underline;
}
#offensive {
	color: #0000;
	font-weight: bold;
}
#offensive.show {
	color: var(--red);
}
content div {
	width: calc(60% - 40px);
	margin-left: 20%;
	background: var(--content-bg);
	border-radius: 30px;
	padding: 20px;
	margin-top: 20px;
}
content {
	display: block;
	margin-top: calc(50vh - 140px);
	min-height: calc(100vh - calc(50vh - 80px));
}
.print {
	display: none;
}
#submit {
	display: block;
}
button {
	margin-top: 10px;
	background-color: var(--active);
	color: #000000;
	padding: 14px 0;;
	width: 100%;
	border: none;
	font-size: inherit;
	font-family: inherit;
	border-radius: 10px;
	cursor: pointer;
}
.fun button {
	animation: fun-bg 3s linear 0s infinite normal forwards;
}
.fun a {
	animation: fun 3s linear 0s infinite normal forwards;
}
#header {
	background-color: var(--bg);
	position: fixed;
	top: 0;
	z-index: 100;
	width: 95%;
	left: 2.5%;
}
footer span {
	font-size: 14px;
    color: #6f6f6f;
	margin-right: 20px;
}
.right {
	float: right;
}
.header-button {
	margin-left: 20px;
	float: right;
}
#prompt-div {
	display: block;
}
#results-div {
	display: none;
}
.answer #results-div {
	display: block;
}
@keyframes fun {
	0% {
		color: rgb(255, 0, 0);
	}
	16.5% {
		color: rgb(255, 255, 0);
	}
	33% {
		color: rgb(0, 255, 0);
	}
	50% {
		color: rgb(0, 255, 255);
	}
	66% {
		color: rgb(0, 0, 255);
	}
	82.5% {
		color: rgb(255, 0, 255);
	}
	100% {
		color: rgb(255, 0, 0);
	}
}
@keyframes fun-bg {
	0% {
		background-color: rgb(255, 0, 0);
	}
	16.5% {
		background-color: rgb(255, 255, 0);
	}
	33% {
		background-color: rgb(0, 255, 0);
	}
	50% {
		background-color: rgb(0, 255, 255);
	}
	66% {
		background-color: rgb(0, 0, 255);
	}
	82.5% {
		background-color: rgb(255, 0, 255);
	}
	100% {
		background-color: rgb(255, 0, 0);
	}
}
::-webkit-scrollbar {
	width: 8px;
}
::-webkit-scrollbar-button {
	display: none;
}
::-webkit-scrollbar-thumb {
	border-radius: 10px;
	background-color: var(--border);
}
@media (max-width: 800px), (cursor: coarse) {
	content div {
		width: calc(100% - 40px);
		margin-left: 0;
	}
	#submit {
		display: block;
	}
	#header {
		width: calc(100% - 40px);
		left: 20px;
	}
	content {
		margin-top: 70px;
	}
}
@media print {
	body {
		background: #ffffff;
		color: #000000;
	}
	content div {
		width: calc(100% - 40px);
		margin-left: 0;
		padding: 0;
		background: #ffffff;
	}
	.dont-print {
		display: none;
	}
	#submit {
		display: none;
	}
	#userinput {
		border: none;
		background-color: inherit;
		padding: 0;
		color: inherit;
		height: 100px;
	}
	#results {
		height: fit-content;
		overflow: hidden;
	}
	.print {
		color: #000000;
		display: block;
	}
	content {
		margin-top: 0;
	}
}
</style>
`;
document.body.innerHTML = `
<div class="print"><h1>artificial idiot results</h1><p>artificial idiot is a program by qwertyy. they are viewable at https://github.com/qwertyy-dev.</p><span>prompt:</span></div>
<div id="header"><p class="dont-print">artificial idiot<a class="header-button" href="https://github.com/qwertyy-dev/ai">github</a><a class="header-button" href="https://github.com/qwertyy-dev">creator</a></p></div>
<content>
<div id="prompt-div">
<textarea id="userinput"></textarea>
<button id="submit" onclick="ai();" class="dont-print">submit</button>
</div>
<div id="results-div">
<h1 class="dont-print">results</h1>
<ul id="results"></ul>
<button onclick="print();" class="dont-print">print</button>
</div>
</content>
<footer class="dont-print"><a href="https://github.com/qwertyy-dev/ai"><img id="github-link" src="github-mark-white.svg" alt="github"></a><span>updata ` + updata.toString() + '</span></footer>';

var urlprompt = new URLSearchParams(window.location.search).get("prompt"),

inputelement = document.getElementById("userinput");
inputelement.focus();

if (urlprompt !== null) {
	inputelement.value = urlprompt;
	ai();
}

if (window.location.href.includes("fun")) {
	document.body.classList.add("fun");
}

function ai() {
	if (inputelement.value === "") {
		document.body.classList.remove("answer");
	} else {
		document.body.classList.add("answer");
	}
	var
	resultsdiv = document.getElementById("results"),
	userinput = " " + inputelement.value.toLowerCase();

	resultsdiv.innerHTML = "";

	for (var i = 0; i < data.length; i++) {
		if (userinput.includes(data[i][0]+" ") || userinput.includes(" "+data[i][0]) || userinput === data[i][0]) {
			for (var j = 0; j < userinput.split(data[i][0]).length-1; j++) {
				resultsdiv.innerHTML += "<li>" + data[i][1].join("</li><li>") + "</li>";
			}
		}
	}

	if (!resultsdiv.innerHTML.includes("<li>")) {
		resultsdiv.innerHTML = "<span>there's nothing here...</span>"
	}

	// thanks, stack overflow
	var refresh = window.location.protocol + "//" + window.location.host + window.location.pathname + "?prompt=" + inputelement.value;    
	window.history.pushState({ path: refresh }, "", refresh);
}

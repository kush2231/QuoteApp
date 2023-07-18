import { MY_API_KEY } from './config.js';

fetch("https://quotes15.p.rapidapi.com/quotes/random/?language_code=en", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "quotes15.p.rapidapi.com",
		"x-rapidapi-key": MY_API_KEY
	}
})
.then(response => response.json())
.then(response => {
    // console.log(response);
	// let a = response.c
    document.getElementById('quote').innerHTML = response.content;
	document.getElementById('author').innerHTML = '- ' + response.originator.name + ' - ';	   //document.getElementById('abcd').innerHTML = a;
   // document.getElementById('author').innerHTML = '- ' + response.originator.name + ' -';
})
.catch(err => {
	console.log(err);
});
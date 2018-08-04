var numoFsquare = 6;
var colors = generaterandomcolors(6);


var squares = document.querySelectorAll(".square");
var pickedColor = pickcolor();
var colordisp = document.getElementById("colordisp");
var message = document.querySelector("#message")
colordisp.textContent = pickedColor;
var h1 = document.querySelector("h1");
var resetbtn = document.querySelector("#reset");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");

easybtn.addEventListener("click", function(){
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	numoFsquare = 3;
	colors = generaterandomcolors(numoFsquare);
	pickedColor = pickcolor();
	message.textContent = "";
	colordisp.textContent = pickedColor;
	for(var i=0;i<squares.length;i++)
	{
		if(colors[i])
		{
			squares[i].style.background = colors[i];
		}
		else
			squares[i].style.display = "none";
	}
});
hardbtn.addEventListener("click", function(){
	easybtn.classList.remove("selected");
	hardbtn.classList.add("selected");
	numoFsquare = 6;
	message.textContent = "";
	colors = generaterandomcolors(numoFsquare);
	pickedColor = pickcolor();
	colordisp.textContent = pickedColor;
	for(var i=0;i<squares.length;i++)
	{
			squares[i].style.background = colors[i];
			squares[i].style.display = "block";
	}
});

resetbtn.addEventListener("click", function(){
	colors = generaterandomcolors(numoFsquare);
	pickedColor = pickcolor();
	colordisp.textContent = pickedColor;
	message.textContent = "";
	this.textContent = "NEW COLORS";
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
});

for(var i=0;i<squares.length;i++)
{
	squares[i].style.background = colors[i];
	squares[i].addEventListener("click", function(){
		var clickedcolor = this.style.background;
		if(clickedcolor === pickedColor){
			// alert("correct!");
			// console.log(clickedcolor, pickedColor);
			message.textContent = "Correct";
			changecolor(clickedcolor);
			h1.style.background = clickedcolor;
			resetbtn.textContent = "Play Again?";
		}
		else
		{
			// console.log(clickedcolor, pickedColor);
			this.style.background = "black";
			message.textContent = "Try Again";
		}
			
	});
}
function changecolor(color){
	for(var i=0;i<squares.length;i++)
		squares[i].style.background = color;
}

function pickcolor() {
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}
function generaterandomcolors(num){
	// body...
	var arr = [];
	for(var i=0;i<num;i++)
	{
		arr.push(randomcolor())
	}
	return arr;
}
function randomcolor()
{
	 var r = Math.floor(Math.random()*256);
	 var g = Math.floor(Math.random()*256);
	 var b = Math.floor(Math.random()*256);
	 return "rgb("+r+", "+g+", "+b+")";
}
var slideIndex = 1;
showDivs(slideIndex);

setInterval(function(){
previousornext(1)},2000);

function previousornext(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("myHobbies");
    if (n > x.length){
		slideIndex = 1
	}
    if (n < 1) {
		slideIndex = x.length
	} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}

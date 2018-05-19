var slideIndex = 1;
// alert("a");

function slidePlus(plus,numberPageMax) {


    var element = document.getElementsByClassName("site-slider")[0];
    
    var pictrureBackground = getComputedStyle(element).getPropertyValue("background-image");
    
    var numberCurrent = plus +1;
  
    if(numberCurrent>numberPageMax  ){
        numberCurrent = 1;
        // alert("lớn hơn");
    } else if(numberCurrent==0 ){
        numberCurrent = numberPageMax;
        // alert("nhỏ hơn");
    }
    // alert(numberCurrent);

    element.style.backgroundImage = "url('img/"+numberCurrent+".jpg')";

}
function imgBig(obj) {      
    src = obj.src                         //thumb/bmi-calculator.gif
    src = src.replace("thumb", "image");  //image/bmi-calculator.gif
    //obj.src = src   
    //alert(src)
    let image = document.getElementById("imgPopup");
    image.src = src 
}

function imgHide() {
    let image = document.getElementById("imgPopup");
    image.src =""
}

/*
function imgSmall(obj) {                  // not in use  
    src = obj.src                         //image/bmi-calculator.gif
    src = src.replace("image", "thumb");  //thumb/bmi-calculator.gif
    obj.src = src 
}
*/

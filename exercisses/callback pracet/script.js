//var btn = document.querySelector("#btn");
//btn.addEventListener("click", function (){
//                    alert("hello how are you")
//                     }) 


//function design(callback) {
//    setTimeout(callback, 2000);
//    console.log("i design at the first");
//};
//
//function newdesign() {
//    console.log("newdesign");
//    
//}
//
//function redesign() {
//    console.log("redesign")
//}
//
//design(newdesign);
//redesign();

function design(isSuc, isFail) {
    console.log("i design at the first")
    var redesign = true;
    if (redesign) {
        isSuc();
        setTimeout(isSuc, 1000);
    } else{
        setTimeout(isFail, 2000);
    }
}

function newdesign() {
    console.log("new design");

}


function redesign() {
    console.log("redesign")
}

design(redesign, newdesign);


function paperThick (distance){
    var fold = 0;
    var newthick = 0.0001;
    for(var i = 0; newthick < distance; i++){
        newthick = newthick * 2;
        fold++
    }
        if(distance <= 0){
            return null
        }else {
            return fold
        }
    }
   
  console.log(paperThick( - 0.0016));








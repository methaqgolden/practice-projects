//write a function that takes in 2 arguments

//the arguments are the temperature and weather

//if the weather is rainy and the temperature is greater than 15 say bring umbrella

//if the weather is rainy and the temperature is less than 15 say bring umbrella and jacket

//if the weather is sunny and the temperature is greater than 15 wear a t shirt


function name(temperature, weather) {

    if(temperature >= 15 &&  weather == "rainy") {
        console.log("bring umbrella");
    }else if(temperature < 15 &&  weather == "rainy") {
       console.log("bring umbrella and jacket"); 
    }else if(temperature >= 15 && weather == "sunny") {
        console.log("wear a t shirt");
    }else{
        console.log("go to the beach")
    }
        
        
}
name(10, "sunny")
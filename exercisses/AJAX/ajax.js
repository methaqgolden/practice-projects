//var xhr = new XMLHttpRequest();
//xhr.onreadystatechange = function () {
//    if(xhr.readyState == 4 && xhr.status == 200) {
//        var jsonData = xhr.responseText;
//        var data = JSON.parse(jsonData);
//        var name = data.name;
//        console.log(data)
//        document.getElementById("demo").innerHTML = "JSON results: " + jsonData;
//        document.getElementById("demo1").innerHTML = "Parsed JSON's 'name' property: " + data.results[0].name;
//        spaceshipurl = data.starships[0];
//        console.log(spaceshipurl);
//    }
//};
//xhr.open("GET", "http://pokeapi.co/api/v2/pokemon", true);  
//xhr.send();

//$.get('http://swapi.co/api/people/1/', function(data){
//   $('#name').append('name: ' + data.name)
//   $('#haircolor').append('haircolor: ' + data.hair_color)
// })
$.get('http://pokeapi.co/api/v1/pokedex/1/', function(data){
   $('#pokemon').append('name: ' + data.name);
    for(var i = 0; i < data.pokemon.length; i++){
        $('#pokemon').prepend("<li>" + data.pokemon[i].name + "</li>")
    }
    
    
   
 })
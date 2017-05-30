var num = 1;
function msgGenerator() {
    var trashTalk = ["Drink Yughurt", "Eating Pizza", "Go to Sleep"];
    var index = Math.floor(Math.random() * trashTalk.length)
    return trashTalk[index];
}
Number = 1;
$('form').on('submit', function (e) {
    e.preventDefault();
    var newName = $('form').find('input[type="text"]').val();
    var newGame = $('form').find('input[type="text1"]').val();
    var newDate = $('form').find('input[type="date"]').val();
    var newScore = $('form').find('input[type="number"]').val();
    var newTask = (Number)++;
    
    
    var check = $("#check").is(':checked');
    if (check === true) {

        var trash = msgGenerator();
        
    } else {
        var trash = '';
    }

    $('table').append('<tr> <td>' + newTask + '</td> + <td>' + newName + '</td> + <td>' + newGame + '</td> + <td>' + newDate + '</td> + <td>' + newScore + '</td> + <td>' + trash + '</td></tr>')
});

$(document).ready(function(){
    $("#submit").click(function(){
        var form = $("form");
        form.animate({height: '500px', opacity: '0.4'}, "slow");
        form.animate({width: '800px', opacity: '0.8'}, "slow");
        form.animate({height: '500px', opacity: '0.4'}, "slow");
        form.animate({width: '800px', opacity: '0.8'}, "slow");
    });
});
$('#submit').on('click', function() {
    $('#buzzer').get(0).play();
});

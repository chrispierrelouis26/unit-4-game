
//variables
var random_result;
var loss = 0;
var win = 0;
var previous = 0;
var current = 0;

// images
var resetAndStart = function (){

    $(".crystals").empty();

    var images = ["crystal1.jpg ", 
    "crystal2.jpg",
    "crystal3.jpg",
    "crystal4.jpg",
];


random_result = Math.floor(Math.random() * (120 -18 ) + 18);

$("#result").html("Random Result: " + random_result);


for(var i = 0; i < 4; i++){

    var random = Math.floor(Math.random() * 12) + 1;
    var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
        });
        
        crystal.css({
            "background-image": "url('" + images[i] + "')",
            "background-size": "cover"
        });
        crystal.html(random);

    $(".crystals").append(crystal);

    }
    
    // $("#previous").html("Total score :" + previous);


}

resetAndStart();

//events
$(document).on("click", ".crystal" ,function () {

    var num = parseInt($(this).attr("data-random"));
    
    previous+= num;

    $("#previous").text(previous);

    $("previous").html(previous);

    console.log(previous);

    if(previous > random_result ){

        loss++;

        $("#loss").html("You lose! " + loss);

        previous = 0;
    
        resetAndStart();
    }

        else if(previous === random_result){

            win++;

            $("#win").html("You win: " + win);

            previous = 0;

            resetAndStart();
        }

        else if(current === random_result){

            previous ++;

            $("#current").html("You win: " + win);

            resetAndStart();
        }
    

});

// game with 4 crystals and random results
// every crystal needs random number 
//  a new random number generated everytime win or lose
// to the crystals
// when any crystal clicked , should add with the previous 
// until it reaches therandom result
// if it is not equal game starts over
// if equal score increases a win 
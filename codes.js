let timeElapsed = 0.0;
let sequence = [];

let updateTimer = function() {
    timeElapsed += 0.5;
}

let playSound = function(code) {
    if (code == 'red') {
        red.play();
    } else if (code == 'green') {
        green.play();
    } else if (code == 'blue') {
        blue.play();
    } else if (code == 'yellow') {
        yellow.play();
    } else if (code == 'negative') {
        negative.play();
    }

    if (code == 'plus') {
        plus.play();
    } else if (code == 'minus') {
        minus.play();
    } else if (code == 'divided by') {
        dividedby.play();
    } else if (code < 0) {
        negative.play();
        code *= -1;
        setTimeout(playSound, 1000, code);
    } else if (code == 0)
        zero.play();
    else if (code == 1)
        one.play();
    else if (code == 2)
        two.play();
    else if (code == 3)
        three.play();
    else if (code == 4)
        four.play();
    else if (code == 5)
        five.play();
    else if (code == 6)
        six.play();
    else if (code == 7)
        seven.play();
    else if (code == 8)
        eight.play();
    else if (code == 9)
        nine.play();
    else if (code == 10)
        ten.play();
    else if (code == 11)
        eleven.play();
    else if (code == 12)
        twelve.play();
    else if (code == 13)
        thirteen.play();
    else if (code == 14)
        fourteen.play();
    else if (code == 15)
        fifteen.play();
    else if (code == 16)
        sixteen.play();

}

let timer;

let startTimer = function() {

    setTimeout(playSound, 1000, sequence[0]);
    timer = setInterval(updateTimer, 500);

}

let x = 0;

let easy = function() {

    x = 4;

}

let med = function() {

    x = 6;

}

let hard = function() {


    x = 8;

}

let possible_targets = ["red", "blue", "green", "yellow"];

let last_index;

let makeSequence = function() {

    sequence = [];
    for (let i = 0; i < x; i++) {
        let random_index = Math.floor(Math.random() * possible_targets.length);
        if (i > 0) {
            if (last_index == random_index) {
                if (random_index == 0) {
                    random_index++;
                } else {
                    random_index--;
                }
            }
        }
        sequence.push(possible_targets[random_index]);
        last_index = random_index;
    }

}

let currentIndex = 0;

let goToNextIfCodeIsRight = function(code) {

    if (code.data == sequence[currentIndex]) {
        currentIndex++;
        right.play();

        var random_number = (Math.random() >= 0.5);

        if (random_number) {
            setTimeout(playSound, 2000, sequence[currentIndex]);
        } else if (sequence[currentIndex] == "red") {
            setTimeout(voice_operation, 2000, 1);
        } else if (sequence[currentIndex] == "blue") {
            setTimeout(voice_operation, 2000, 2);
        } else if (sequence[currentIndex] == "green") {
            setTimeout(voice_operation, 2000, 3);
        } else if (sequence[currentIndex] == "yellow") {
            setTimeout(voice_operation, 2000, 4);
        }
    }

    if (currentIndex == sequence.length) {
        document.getElementById("time").innerHTML = "Your time was: " + String(timeElapsed) + "s!";
        win.play();
        clearInterval(timer);
    }

}

function voice_operation(scan_number) {

    var operation_1 = Math.floor(Math.random() * 3) + 1;
    var reverse_1;
    var min_next;

    end_number = scan_number;
    switch (operation_1) {
        case 1:
            end_number += second_number = Math.floor(Math.random() * 2) + 1;
            reverse_1 = "minus";
            min_next = 1;
            break;
        case 2:
            end_number -= second_number = Math.floor(Math.random() * 2) + 1;
            reverse_1 = "plus";
            min_next = 1;
            break;
        case 3:
            end_number *= second_number = Math.floor(Math.random() * 2) + 1;
            reverse_1 = "divided by";
            min_next = 3;
            break;
    }

    var operation_2;
    if (min_next == 1) {
        operation_2 = Math.floor(Math.random() * 3) + 1;
    } else {
        operation_2 = 3;
    }
    var reverse_2;

    switch (operation_2) {
        case 1:
            end_number += first_number = Math.floor(Math.random() * 2) + 1;
            reverse_2 = "minus";
            break;
        case 2:
            end_number -= first_number = Math.floor(Math.random() * 2) + 1;
            reverse_2 = "plus";
            break;
        case 3:
            end_number *= first_number = Math.floor(Math.random() * 2) + 1;
            reverse_2 = "divided by";
            break;
    }

    first_sign = reverse_2;
    second_sign = reverse_1;

    setTimeout(playSound, 1000, end_number);

    if (end_number < 0) {
        setTimeout(playSound, 3000, first_sign);
        setTimeout(playSound, 4000, first_number);
        setTimeout(playSound, 5000, second_sign);
        setTimeout(playSound, 6000, second_number);
    } else {
        setTimeout(playSound, 2000, first_sign);
        setTimeout(playSound, 3000, first_number);
        setTimeout(playSound, 4000, second_sign);
        setTimeout(playSound, 5000, second_number);
    }
}

let T1 = setInterval(() => {

    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    if (randomNumber <= 77) {
        if (randomNumber % 2 == 0) {
            console.log("Number is " + randomNumber + "(Even)");
        }
        else {
            console.log("Number is " + randomNumber + "(Odd)");
        }
    }
    else {
        console.log("Number is " + randomNumber + ":Timmer is stop.");
        clearInterval(T1);
    }



}, 2000);
let tic = {};

const arrColor = [
    "Blue", "Green", "Cyan", "Indigo", "DimGray", "red", "Yellow", "Crimson",
    "Blue", "Green", "Cyan", "Indigo", "DimGray", "red", "Yellow", "Crimson"
];


const rand = (array) => {
    for (var j, x, i = array.length; i; j = parseInt(Math.random() * i), x = array[--i], array[i] = array[j], array[j] = x);
    //return true;
};



let arbb = [{}, {}, 1];
const game = (colorT, d) => {

    if (arbb[2] === 1) {
        arbb[0] = colorT;
        arbb[2] = 2;

        return;
    }
    if (arbb[2] === 2) {
        arbb[1] = colorT;
        //alert(arbb);
        if (arbb[0].color === arbb[1].color && arbb[0].order !== arbb[1].order) {
            //alert("true");
            arbb[2] = 1;
            return ["y", +arbb[0].order, +arbb[1].order];
        } else {
            arbb[2] = 1;

            return ["n", +arbb[0].order, +arbb[1].order];
        }
    }
};






const TimerStart = () => {
    // alert("ryey");
    let hour = 0;
    let minute = 0;
    let second = 0;
    const myClock = () => {
        if (second < 59) { second++ } else {
            second = 0;
            minute++
        }
        if (minute < 59) {} else {
            minute = 0;
            hour++
        }

        timesend(hour, minute, second);
    };
    tic = setInterval(function() {
        myClock();
    }, 1000);

};
function hour(min) {
    if(typeof min ==="number" && min >= 0 && min <= 59) {
        console.log("this is number");
        if(min >= 0 && min <=15) {
            console.log("1st quarter");
        }
        else if (min >= 16 && min <= 30) {
        console.log("2nd  quarter");
        }
    }
}
hour(23);
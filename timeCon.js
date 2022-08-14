function timeToString(time){

    if(time < 60000){
        return (time/1000).toFixed(0).toString()+" "+"seconds";
    }
    else if(time >=60000 && time < 3600000){
        let sec = time/1000;
        let min = Math.ceil( sec/60);

        return min.toString()+" "+"minutes"
    }
    else{
        let sec = time/1000;
        let min = sec/60;
        let hour = min/60;
        return hour.toString()+" "+"hours"
    }
}

module.exports = timeToString;
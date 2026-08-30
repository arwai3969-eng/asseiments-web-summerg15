function looping(startNum, endNum, breakNum, continueNum) {
    
    if (
        startNum == undefined || 
        endNum == undefined || 
        breakNum == undefined || 
        continueNum == undefined ||
        isNaN(startNum) || isNaN(endNum) || isNaN(breakNum) || isNaN(continueNum)
    ) {
        alert("please enter 4 numbers");
        return; 
    }
    else{

        for (var i = startNum; i <= endNum; i++) {

        
        if (i == continueNum) {
            continue;
        }

       
        if (i == breakNum) {
            break;
        }

       console.log(i)

    }
    
    }

    
}
looping(1,9,6,7);
looping(1,9)

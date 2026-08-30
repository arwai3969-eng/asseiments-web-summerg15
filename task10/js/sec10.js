
var s="";
var degree=prompt("enter your degree")
if(degree==""||degree==null){

    alert('please enter your degree')
}
else if(degree>100){
    console.log("invalid")
}
else if(degree>=90 && degree<=100){

    console.log("Excellent")
}
else if(degree>=80 && degree<=90){

    console.log("very good")
}
else if(degree>=70 && degree <=80){

    console.log("good")
}
else{

    console.log("failed")
}







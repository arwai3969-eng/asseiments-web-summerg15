var course=["html","css","js","bootstrap"]
var newc=prompt("choose course please")

var cIndex = course.findIndex(function(course) {
    return course == newc;
});
if(cIndex != -1){

    alert("This course taken!")
}
else{

    course.push(newc)
    alert("course added🤩")
}
console.log(course)
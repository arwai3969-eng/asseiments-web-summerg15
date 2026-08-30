var courses=["html","css","js","bootstrap"]
 var courseName =prompt ("choose a course")
 if(courseName=="")
 {
    alert("please choose course");

}
 else if (courses.includes(courseName)) {
    alert("this course is taken");

} 

else {
    courses.push(courseName);
    console.log(courses);

 }

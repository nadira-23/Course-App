const mongoose=require('mongoose')
const courseSchema=mongoose.Schema({
   image:String,
    courseId:String,
courseName:String,
courseCategory:String,
courseDescription:String,
courseFee:Number

})
const courseData=mongoose.model('coursedata',courseSchema);
module.exports=courseData;
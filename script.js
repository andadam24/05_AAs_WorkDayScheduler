$(".saveBtn").on("click",function(){
  var textinput= $(this).siblings("textarea").val()
  var hour= $(this).siblings("textarea").attr("id")
 localStorage.setItem(hour,textinput)

})
for (let index = 9; index < 18; index++) {
  $("#" + index).val(localStorage.getItem(index))
  
}

$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"))

$("textarea").each(function(){
  var textareaHour = $(this).attr("id")
  textareaHour = parseInt(textareaHour);
  var currentHour = moment().hours()
  
  if(textareaHour < currentHour){
    $(this).addClass("past")
  }else if( textareaHour === currentHour){
    $(this).addClass("present")
  }else {
    $(this).addClass("future")
  }
})

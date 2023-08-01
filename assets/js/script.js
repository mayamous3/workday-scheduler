//Display today's date at the top of the page under calendar desc.
//Date needs to include full month and day of week names.
var today = new Date();
console.log(today);
let now = today.toLocaleDateString('en-us', { weekday:"long", month:"long", day:"numeric"});
console.log(now)
document.getElementById("currentDay").textContent =  now

//ready function used to ensure page has rendered.
//save button is listening for a click.
$(document).ready(function () {
    
    // load data from local storage
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
  
    //save items in local storage when save button clicked
  $(".saveBtn").on("click", function () {
     
      var appointment = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");

      // save appointment in local storage
      localStorage.setItem(time, appointment);
  })

  blockColors();

    function blockColors()  {
    //get hours from current date
    var hourActual = today.getHours()
    console.log(hourActual)

    $(".time-block").each(function () {
        //use regex to clear all non - digit values from string, and Parse as Int
        var hourBlock = parseInt($(this).attr("id").replace(/^\D+/g, ''));
        console.log(hourBlock)
        if (hourBlock < hourActual) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (hourBlock > hourActual) {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }    
        else  {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        }      
    })
}
})

//button for clearing local storage
$("#clear").on("click", function () {
    localStorage.clear();
    // reset scheduled items to empty after clearing local storage
    $(".description").val("");
});

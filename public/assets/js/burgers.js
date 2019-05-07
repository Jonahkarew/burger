$(document).ready(function(){

$("#burgerForm").on("submit", function(event){

  //make the user inputted burger sync to the database and appear in burgers to eat column


  event.preventDefault();
  console.log("burger submitted")

  var burgerData = {
    burger_name: $("#burgerInput").val().trim()
  }

  $.ajax({
    url: "/api/burgers",
    method: "POST",
    data: burgerData
  }).then(function(){
    location.reload();
  })
  .catch(err => console.log(err))

})

//eat a burger, set devoured = true
$(".eat-burger").on("click", function(){
  var burgerId = $(this).attr("data-id");
  var devoured = $(this).attr("data-devoured");

  $.ajax({
    url: "/api/burgers/" + burgerId,
    method: "PUT",
    data: {
      devoured: devoured
    }
  }).then(() => location.reload())
})



















})
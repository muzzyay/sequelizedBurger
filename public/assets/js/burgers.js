// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".devour-btn").on("click", function (event) {
        var id = $(this).data("id");
        var newInfo = { 
            customer_name: $("#customer").val().trim(),
            devoured: true
        }



        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newInfo

        }).then(
            function () {

                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $("#submit-btn").on("click", function (event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger").val().trim(),

        };
        

        if (newBurger.burger_name.length > 3) {
            $.ajax("/api/burgers", {
                type: "POST",
                data: newBurger
            }).then(
                function () {
                    location.reload();
                }
            );
        }else{
            alert("Enter a burger name!");
        }

        

    });

    $(".delete-btn").on("click", function(event){
        event.preventDefault();
        var theId = $(this).data("id");

        $.ajax("/api/burgers/"+theId, {
            type: "DELETE"
        }).then(function(){
            location.reload();
        })
    });


});

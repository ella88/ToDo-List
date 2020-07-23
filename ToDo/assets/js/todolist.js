// when entered a new input, append it to the list
$("input[type='text']").keypress(function(evt) {
    // when press enter
    if (evt.which === 13) {
        var entered = $("input").val();
        $("ul").append("<li><span><i class='fa fa-trash'></i></span>" + entered + "</li>");
        $(this).val("");
    }
})

// when click the list, it marked as completed, click again, back to normal
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
})

// when clicked trash, remove the list, with a fading effect
$("ul").on("click", "span", function() {
    $(this).parent().fadeOut(500, function() {
        this.remove();
    });
})

// when click the plus button, the new task box show and hide
$(".fa-pencil").click(function() {
    $("input[type='text']").fadeToggle()
})
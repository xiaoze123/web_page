
$(document).ready(function(){
    $("#hide").click(function(){
        $("form").hide();
    });
    $("#show").click(function(){
        $("form").show();
    });
});
$("#sld label input").click(function(){
    $(this).parents("label").toggleClass("chd");
})
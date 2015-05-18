
$(document).ready(function(){
    $("#hide").click(function(){
        $("form").hide();
    });
    $("#show").click(function(){
        $("form").show();
    });
});
$("#container_check_box label").click(function(){
    if($(this).find("input").attr("checked")){
        $(this).find("input").removeAttr("checked");
    }else{
        $(this).find("input").attr("checked","checked");
    }
    $(this).toggleClass("chd");
    return false;
})
//$(document).ready(function(){
//    $("input:checkbox").each(function(){
//        $(this).click(function(){
//            //alert($(this).attr('checked'));
//            $(this).toggleClass('label_on');
//        });
//    });
//});
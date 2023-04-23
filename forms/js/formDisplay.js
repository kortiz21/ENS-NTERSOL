$(document).ready(function(){
    $('input[type="radio"]').click(function(){
        var demovalue = $(this).val();
        $("div.hiddenFields").hide();
        $("#show"+demovalue).show();
    });
    $('input[type="reset"]').click(function(){
        $("div.hiddenFields").hide();
    });
});

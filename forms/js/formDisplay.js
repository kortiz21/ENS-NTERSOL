$(document).ready(function(){
    $('input[type="radio"]').click(function(){
        var demovalue = $(this).val();
        $("div.hiddenFields").hide();
        $("#show"+demovalue).show();
    });
});

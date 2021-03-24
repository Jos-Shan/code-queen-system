$(function(){
    // dashboard

    $("#sidebarCollapse").click(function(){
    $("#sidebar").toggleClass('active');
    $(".content-wrapper").toggleClass('content-toggle')
    });

    // date picker
    $('#dob').datepicker({
        format: 'mm-dd-yyyy'
    });
});
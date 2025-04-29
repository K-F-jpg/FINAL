$(document).ready(function(){
    // $('.sus').click(function(){
    //     alert('erm what the sigma')
    // })

    // $('.optionI').on('click', function () { 
    //     const $newDiv = $('<div>'); 
    //     $newDiv.html('<p>what the sigma</p>'),
    //     $newDiv.html('<p>hello there</p>'); 
    //     $('.container').append($newDiv); 
    // }); 

    // $('.newDiv').on('click', function () { 
    //     const $newestDiv = $('<div>'); 
    //     $newestDiv.html('<p>hello again</p>'); 
    //     $('.container').append($newDiv); 
    // }); 

    // $('.optionI').click(function () {
    //     $('.test_itemI').show();
    //     $('.test_itemII').show();
    //     $('.test_itemI').insertBefore('.optionI');
    //     // $('.optionI').after('.test_itemII');
    // })

    // $('.optionII').click(function (){
    //     $('.optionII, .optionI').hide();
    // })

    // $('.container').click(function() {
    //     $('.container').css('background-color', 'red');
    // })

    $('.start').click(function () {
        $('.optionI').show();
        $('.optionII').show();
        $('.optionI').insertBefore('.start');
        $('.optionII').insertAfter('.start');
        // $('.start').css('background-color', 'white', 'border', '3px solid blue');
    })

    $('.optionI').click(function() {
        $('.school').insertBefore('.optionI');
        $('.school').show();
    })

    $('.restart').click(function (){
        $('.optionI, .optionII, .school').hide();
    })
    
})
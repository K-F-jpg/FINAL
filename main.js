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
        $('.restart').show();
        $('.optionI').insertBefore('.start');
        $('.optionII').insertAfter('.start');
        $(".start").attr('src', 'MEDIA/AFTER COLORED.png');
        // $('.start').css('background-color', 'white', 'border', '3px solid blue');
    })

    //important for hiding elements
    $('.optionI').click(function() {
        $('.school').insertBefore('.optionI');
        $('.school').show();
        $('.s1, .s2, .s3').show();
        $('.optionII, .life, .life_sub, .assignmentsI, .life_sub2, .life_sub3, .texting_non_war_related_plans').hide();
    })

    $('.optionII').click(function() {
        $('.life').insertAfter('.optionII');
        $('.life').show();
        $('.l1, .l2, .l3').show();
        $('.school, .assignmentsI, .optionI, .assignmentsII, .assignmentsIII').hide()
    })

    $('.l1').click(function (){
        $('.art').show();
        $('.restart').show();
    })
    
    $('.l2').click(function() {
        $('.life_sub').insertAfter('.life');
        $('.life_sub').show();
        $('.l1, .l3, .assignmentsI').hide();
    })

    $('.s1').click(function() {
        $('.assignmentsI').insertBefore('.school');
        $('.assignmentsI').show();
        $('.s2, .s3').hide();
    })

    $('.a1').click(function() {
        alert("are you sure you want to take this? you cannot exit the test after starting.");
        // $('.a1').attr("href", "https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        // $link.attr("href", "https://www.youtube.com/watch?v=dQw4w9WgXcQ");
    })

    $('.s2').click(function() {
        $('.assignmentsII').insertBefore('.school');
        $('.assignmentsII').show();
        $('.s1, .s3').hide();
    })
    $('.a3, .a2_1').click(function() {
        $('.homework').show();
    })
    $('.a2_2').click(function() {
        alert("This class starts at 9:15AM. The commute will take about 15 minutes. Best to get going now.");
    })

    $('.s3').click(function() {
        $('.assignmentsIII').insertBefore('.school');
        $('.assignmentsIII').show();
        $('.s1, .s2').hide();
    })

    // $(".q-left").hover(function () {
    //     $(".start").attr('src', 'MEDIA/LEFT.png');
    // });
    // //to return to normal
    // $(".start").hover(function () {
    //     $(".start").attr('src', 'MEDIA/BEFORE COLORED.png');
    // });

    //if this doesnt work im crashing out (again)
    // $.when($('.start').click).then(function() {
    //     $(".q-left").hover(function () {
    //         $(".start").attr('src', 'MEDIA/LEFT.png');
    //     });
    //     $(".q-right").hover(function () {
    //         $(".start").attr('src', 'MEDIA/RIGHT.png');
    //     });
    // });

    //v2
    $(".start").on('click', function() {
        $(".q-left").hover(function () {
            $(".start").attr('src', 'MEDIA/LEFT.png');
        });
        $(".q-right").hover(function () {
            $(".start").attr('src', 'MEDIA/RIGHT.png');
        });
        $(".start").hover(function (){
            $('.start').attr('src', 'MEDIA/AFTER COLORED.png');
        });
    })

    $('.restart').on('click', function (){
        $('.optionI, .optionII, .school, .restart, .life, .life_sub, .assignmentsI, .art, .life_sub2, .life_sub3, .homework, .assignmentsII, .assignmentsIII, .texting_non_war_related_plans').hide();
        $(".start").attr('src', 'MEDIA/BEFORE COLORED.png');
        $(".q-left").hover(function () {
            $(".start").attr('src', 'MEDIA/BEFORE COLORED.png');
        });
        $(".q-right").hover(function () {
            $(".start").attr('src', 'MEDIA/BEFORE COLORED.png');
        });
        $(".start").hover(function (){
            $('.start').attr('src', 'MEDIA/BEFORE COLORED.png');
        });
    })

    $('.g1').click(function() {
        alert('redirecting to THE OVERWORLD');
    })
    $('.g2').click(function() {
        alert('redirecting to Roblox!');
    })

    $('.l3').click(function(){
        $('.life_sub2').show();
        $('.l1, .l2').hide();
    })
    $('.f1').click(function() {
        $('.life_sub3').show();
        $('.f2').hide();
    })
    $('.f2').click(function() {
        $("#declined")[0].play();
        // setTimeout(whatTheSigma, 1200); //will see if I can figure this out later
        alert('Stacy is currently unavailable! Please leave a message at the tone.');
    })
    $('.f1_1').click(function() {
        $("#calling")[0].play();
        $('.f1_2').hide();
    })
    $('.f1_2').click(function() {
        $('.texting_non_war_related_plans').show();
        $('.f2').hide();
        $('.f1_1').hide();
    })
    
})
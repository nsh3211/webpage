// this is relevant to entire page,, when u scroll the banner for the nav bar pops up :) 

$(document).ready(function(){
    $(window).scroll(function(){
        if (this.scrollY > 20){
            $('.nav').addClass("sticky")
        }
        else{
            $('.nav').removeClass("sticky")
        }

        if(this.scrollY>500){
            $('.scroll-up-btn').addClass("show")
        }

        else{
            $('.scroll-up-btn').removeClass("show")
        }
    });

    //part that makes the scroll up button work 
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});

    });

    //type animation
    var typed = new Typed(".typing",{
        strings:["Programmer","Developer","Student"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".popo",{
        strings:["TobeUpdated!","To Be Updated!", "Work in Progress..."],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });



    //when u click the button (when screen small) itll toggle btwn actual page & the nav menu 
    $('.menu-btn').click(function(){
        $('.nav .nav-list').toggleClass("active"); 
        // changes the three bar button to a cross button (after the initial button is clicked on)
        $('.menu-btn i').toggleClass("active"); 

    })
    

});







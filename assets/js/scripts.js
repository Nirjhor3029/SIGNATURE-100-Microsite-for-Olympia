$( document ).ready(function() {

    var position = 0;

    // $('#viewport .screen').nicescreen();

    // console.log( "ready!" );
    $(".btn-primary").on("mousedown",()=>{
        $(".btn-primary").css("box-shadow", "none");
    });
    $(".btn-primary").on("mouseup",()=>{
        $(".btn-primary").css("box-shadow", "4px 5px 14px -4px var(--color-btn-primary)");
    });


    // Page load with transaction
    $(".forest").on("click",()=>{
        forest();
    });
    $(".fsctm").on("click",()=>{
        fsctm();
    });
    $(".aluminumfree").on("click",()=>{
        aluminumfree();
    });
    $(".co2").on("click",()=>{
        co2();
    });
    $(".recyclable").on("click",()=>{
        recyclable();
    });

    // Indicator
    $(".left").on("click",()=>{
        nextPrev(-1);
    });
    $(".icon-home").on("click",()=>{
        home();
    });
    $(".right").on("click",()=>{
        nextPrev(1);
    });

    function nextPrev(nextPrev) { //  left = -1, right = 1 , home = 0
        if (nextPrev > 0) {
            position++;
        }else if(nextPrev < 0){
            position--;
        }
        else{
            // position++;
        }
        switch (position) {
            case 1:
                forest();
                break;
            case 2:
                fsctm();
                break;
            case 3:
                aluminumfree();
                break;
            case 4:
                co2();
                break;
            case 5:
                recyclable();
                break;
            default:
                home();
                break;
        }
    }

    function home() {
        let section = $("#section-2");
        section.find(".content")
            .css('transform','scale(1) translate(0, 0)');
        position = 0;
        showrightArrow();

        // Change the content
        removeAllBackgroundImage();
        section.addClass("home-page-bg");
        $(".page-content").addClass("hide");
    }
    function forest() {
        let section = $("#section-2");
        section.find(".content")
            .css('transform','scale(1.2) translate(50vw, -50vh)')
            .addClass("animation-smooth");
        position = 1;
        showAllArrow();

        // Change the content
        removeAllBackgroundImage();
        section.addClass("forest-page-bg");
        $(".page-content").addClass("hide");
        $(".forest-page-content").removeClass("hide");
    }
    function fsctm() {
        let section = $("#section-2");
        section.find(".content")
            .css('transform','scale(1.2) translate(55vw, 30vh)')
            .addClass("animation-smooth");
        position = 2;
        showAllArrow();

        // Change the content
        removeAllBackgroundImage();
        section.addClass("fsc-page-bg");
        $(".page-content").addClass("hide");
        $(".fsc-page-content").removeClass("hide");

    }
    function aluminumfree() {
        let section = $("#section-2");
        section.find(".content")
            .css('transform','scale(1.2) translate(4vw, 65vh)')
            .addClass("animation-smooth");
            // .css('opacity',0)
            // .css({"-webkit-transform":"translate(100px,100px)"})
        position = 3;
        showAllArrow();
        
        // Change the content
        removeAllBackgroundImage();
        section.addClass("aluminum-free-page-bg");
        $(".page-content").addClass("hide");
        $(".aluminum-free-page-content").removeClass("hide");
    }
    function co2() {
        let section = $("#section-2");
        section.find(".content")
            .css('transform','scale(1.2) translate(-50vw, 30vh)')
            .addClass("animation-smooth");
        position = 4;
        showAllArrow();
        
        // Change the content
        removeAllBackgroundImage();
        section.addClass("co2-page-bg");
        $(".page-content").addClass("hide");
        $(".co2-page-content").removeClass("hide");
    }
    function recyclable() {
        let section = $("#section-2");
        section.find(".content")
            .css('transform','scale(1.2) translate(-50vw, -50vh)')
            .addClass("animation-smooth");
        position = 5;
        showleftArrow();
        
        // Change the content
        removeAllBackgroundImage();
        section.addClass("recyclable-page-bg");
        $(".page-content").addClass("hide");
        $(".recyclable-page-content").removeClass("hide");
    }

    function showAllArrow() {
        $(".right").removeClass("hide");
        $(".left").removeClass("hide");
    }
    function showleftArrow() {
        $(".left").removeClass("hide");
        $(".right").addClass("hide");
    }
    function showrightArrow() {
        $(".left").addClass("hide");
        $(".right").removeClass("hide");

    }

    function removeAllBackgroundImage() {
        let section = $("#section-2");
        section.removeClass("home-page-bg forest-page-bg fsc-page-bg aluminum-free-page-bg co2-page-bg recyclable-page-bg");
    }

    // button click
    $(".btn-fsctm").on("click",()=>{
        fsctm();
    });
    $(".btn-Alu-free").on("click",()=>{
        aluminumfree();
    });
    $(".btn-co2").on("click",()=>{
        co2();
    });
    $(".btn-recyclable").on("click",()=>{
        recyclable();
    });
});
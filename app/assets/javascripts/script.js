$(document).ready(function(){
        $(".select").dropdown({ "dropdownClass": "my-dropdown", "optionClass": "my-option awesome" });
	$(".select").dropdown({ "autoinit" : ".select" });
	$.material.init();

	$('#banner_slider').before('<div id="nav2">').cycle({
                fx:           'fade',
                sync:          1,
                containerResize: 1,
                pause:         1,
                pager:         '#nav2',
                timeout:       2000,
                speed:         1200, 
                requeueOnImageNotLoaded: true, 
                slideResize:   0,
                fit:           1   
	});


        $('.select-block').addClass('hide');
        if($("#contactlist").val()== 'a'){
                $('.pane-1').removeClass('hide').addClass('show');
        }
        $("#contactlist").change(function(){
                if($(this).val()== 'a'){
                       $('.select-block').removeClass('show').addClass('hide');
                       $('.pane-1').removeClass('hide').addClass('show');
                }
                if($(this).val()== 'b'){
                       $('.select-block').removeClass('show').addClass('hide');
                       $('.pane-2').removeClass('hide').addClass('show');
                }
                if($(this).val()== 'c'){
                       $('.select-block').removeClass('show').addClass('hide');
                       $('.pane-3').removeClass('hide').addClass('show');
                }
                if($(this).val()== 'd'){
                       $('.select-block').removeClass('show').addClass('hide');
                       $('.pane-4').removeClass('hide').addClass('show');
                }
                if($(this).val()== 'e'){
                       $('.select-block').removeClass('show').addClass('hide');
                       $('.pane-5').removeClass('hide').addClass('show');
                }
                
        });
});


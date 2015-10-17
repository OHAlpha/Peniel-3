/* to show chars remaining for comments */
$(document).ready(function () {
    $('textarea').on("propertychange keyup input paste",
    function () {
        var limit = $(this).data("limit");
        var remainingChars = limit - $(this).val().length;
        if (remainingChars <= 0) {
            $(this).val($(this).val().substring(0, limit));
        }
        $(this).next('span').text(remainingChars<=0?0:remainingChars);
    });
});


/*
function maxLengthCheck(object)
  {
    if (object.value.length > object.maxLength)
      object.value = object.value.slice(0, object.maxLength)
  }
*/

$("document").ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 185) {
            $('.search_options').addClass("sticky");
			$('.scrollhide').addClass("stickyhide");
			$('.pad').removeClass("pad");
        } else {
            $('.search_options').removeClass("sticky");
			$('.scrollhide').removeClass("stickyhide");
			$('.pad').addClass("pad");
        }
    });
});
$(function() {
    form_validation();
});

function submit_form() {
    $("#contact-form").submit();
}

function form_validation() {
    $("#contact-form").submit(function(event) {
        var fname_id = $('#name');
        var fname = fname_id.val();
        var fname_error = fname_id.data("error");
        if (!(fname == '')) {
            fname_id.parent().parent().find(".error").empty();
            fname_id.parent().parent().removeClass("has-error");
        } else {
            fname_id.parent().parent().find(".error").empty();
            fname_id.parent().parent().find(".error").append(fname_error);
            fname_id.parent().parent().addClass("has-error");
            event.preventDefault();
        }
        var email_id = $('#email');
        var email = $('#email').val();
        var email_error = $("#email").data("error");
        var wrong_email_error = $("#email").data("wrong");

        function checkEmail(email) {
            var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (!regex.test(email)) {
                email_id.parent().parent().find(".error").empty();
                email_id.parent().parent().find(".error").append(wrong_email_error);
                email_id.parent().parent().addClass("has-error");
                event.preventDefault();
                return false;
            } else {
                return true;
            }
        }
        if ((email == '')) {
            email_id.parent().parent().find(".error").empty();
            email_id.parent().parent().find(".error").append(email_error);
            email_id.parent().parent().addClass("has-error");
            event.preventDefault();
        } else if (!(email == '')) {
            if ((checkEmail(email))) {
                email_id.parent().parent().find(".error").empty();
                email_id.parent().parent().removeClass("has-error");
            }
        }
        var saddress_id = $('#comment');
        var saddress = saddress_id.val();
        var saddress_error = saddress_id.data("error");
        if (!(saddress == '')) {
            saddress_id.parent().find(".error").empty();
            saddress_id.parent().removeClass("has-error");
        } else {
            saddress_id.parent().find(".error").empty();
            saddress_id.parent().find(".error").append(saddress_error);
            saddress_id.parent().addClass("has-error");
            event.preventDefault();
        }
        var checkbox_id = $('#notify_me');
        var checkbox = checkbox_id.val();
        var checkbox_error = checkbox_id.data("error");
        if ($('#notify_me').parent().parent().find('input[type="checkbox"]').is(':checked')) {
            checkbox_id.parent().parent().find(".error").empty();
            checkbox_id.parent().parent().removeClass("has-error");
        } else {
            $result = 0;
            checkbox_id.parent().parent().find(".error").empty();
            checkbox_id.parent().parent().find(".error").append(checkbox_error);
            checkbox_id.parent().addClass("has-error");
            event.preventDefault();
        }
    });
}

function submit_radios(a) {
    var chk_st = 0;
    for (i = 1; i <= a; i++) {
        if (document.getElementById('chkk' + i).checked == true) {
            chk_st = 1;
        }
    }
    if (chk_st != 1) {
        document.getElementById('radio_error_show1').innerHTML = 'Please select an answer';
    } else {
        document.getElementById('radio_error_show1').innerHTML = '';
    }
}


$(function() {
    $('.label_check').click(function() {
        setupLabel();
    });
    setupLabel();
});

function setupLabel() {
    if ($('.label_check input').length) {
        $('.label_check').each(function() {
            $(this).removeClass('c_on');
        });
        $('.label_check input:checked').each(function() {
            $(this).parent('label').addClass('c_on');
        });
    };
}
$(function() {
    $('.label_radio').click(function() {
        setupLabel2();
    });
    setupLabel2();
});

function setupLabel2() {
    if ($('.label_radio input').length) {
        $('.label_radio').each(function() {
            $(this).removeClass('c_on');
        });
        $('.label_radio input:checked').each(function() {
            $(this).parent('label').addClass('c_on');
        });
    };
}


function change_back_color(a) {
    if (a == 1) {
        document.getElementById('changing_back').style.background = '#ebe8de';
    }
    if (a == 2) {
        document.getElementById('changing_back').style.background = '#fff';
    }
}



/* mp3 audio */
var yourAudio = document.getElementById('yourAudio'),
	ctrl = document.getElementById('audioControl');
ctrl.onclick = function () {
	/* Update the Button */
	var pause = ctrl.innerHTML === 'Pause';
	
	/* This changes the style from display:none to display:block */
	document.getElementById("yourAudio").style.display="block";
	
	ctrl.innerHTML = pause ? 'Listen' : 'Pause';
	/* Update the Audio */
	var method = pause ? 'pause' : 'play';
	yourAudio[method]();
	/* Prevent Default Action */
	return false;
};

function show_comments(){$('#showcomments').slideToggle();}
function show_comments_two(){$('#showcommentstwo').slideToggle();}
function show_discussion(){$('#showdiscussion').slideToggle();}
function show_comment_form(a) {
    $('#commment_form' + a).slideToggle();
}

/* this is for comment ajax */
$(function() {

$(".submit").click(function() {

var name = $("#name").val();
var email = $("#email").val();
	var comment = $("#comment").val();
		var post_id = $("#post_id").val();
		var book = $("#book").val();
		var chapter = $("#chapter").val();
		var notify = $("#notify").val();
    var dataString = 'name='+ name + '&email=' + email + '&comment=' + comment + '&book=' + book + '&chapter=' + chapter + '&notify=' + notify +'&post_id=' + post_id;
	
	if(name=='' || email=='' || comment=='')
     {
    alert('Please complete each field');
     }
	else
	{
	$("#flash").show();
	$("#flash").fadeIn(400);
$.ajax({
		type: "POST",
  url: "../commentajax.php",
   data: dataString,
  cache: false,
  success: function(html){
 
  $("ul#update").append(html);
  $("ul#update li:last").fadeIn("slow");
  document.getElementById('email').value='';
   document.getElementById('name').value='';
    document.getElementById('comment').value='';
	document.getElementById('book').value='';
	document.getElementById('chapter').value='';
	document.getElementById('notify').value='';
	$("#name").focus();
 
  $("#flash").hide();
	
  }
 });
}
return false;
	});
});

/* this is for logged in quick comment reply */
$('#commentreply').keydown(function() {
var key = e.which;
if (key == 13) {
// As ASCII code for ENTER key is "13"
$('#commentreply').submit(); // Submit form code
}
});
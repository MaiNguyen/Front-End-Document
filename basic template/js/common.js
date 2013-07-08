/*--------------------------------------------------

  roll over  [ mouseUp: _up,  mouseOver: _over ]

--------------------------------------------------*/

$(function()
{
	if(document.getElementsByTagName)
	{
		var images = document.getElementsByTagName("img");
		for(var i=0; i < images.length; i++)
		{
			if(images[i].getAttribute("src").match("_up."))
			{
				images[i].onmouseover = function()
				{
					this.setAttribute("src", this.getAttribute("src").replace("_up.", "_over."));
				}
				images[i].onmouseout = function()
				{
					this.setAttribute("src", this.getAttribute("src").replace("_over.", "_up."));
				}
			}
		}
	}
});



/*--------------------------------------------------

  pagetop

--------------------------------------------------*/

var scrolltotop=
{
	setting: { startline: 300 },
	state: { isvisible:false, shouldvisible:false },

	togglecontrol:function()
	{
		var scrolltop=jQuery(window).scrollTop()

		this.state.shouldvisible=(scrolltop>=this.setting.startline)? true : false
		if (this.state.shouldvisible && !this.state.isvisible)
		{
			jQuery("#pageTop").fadeIn("fast");
			this.state.isvisible=true;
		}
		else if (this.state.shouldvisible==false && this.state.isvisible)
		{
			jQuery("#pageTop").fadeOut("fast");
			this.state.isvisible=false;
		}
	},

	init:function()
	{
		jQuery(document).ready(function($)
		{
			jQuery("#pageTop").hide();
			var mainobj=scrolltotop;

			$(window).bind('scroll resize', function(e)
			{
				mainobj.togglecontrol();
			})
		})
	}
}
scrolltotop.init();


$(function()
{
	$("#pageTop a").click(function()
	{
		$('html,body').animate(
			{ scrollTop: $($(this).attr("href")).offset().top },
			'slow',
			'swing',
			function()
			{
            location.hash = '';
        	}
        );
		return false;
	})
});



/*--------------------------------------------------

  scroll top fixed

--------------------------------------------------*/

$(function()
{
	var gnavHeight = $('#gnav').height();
	var gnavOffset = $('#gnav').offset();
	var headerHeight = $('#header').height();
	var footerHeight = $('#footer').height();
	var bottomPos = $(document).height() - $(window).height() - footerHeight;
	var showFlug = false;

	$(window).scroll(function ()
	{
		if ($(this).scrollTop() >= bottomPos)
		{
			$('#pageTop').css('position', 'absolute');
			$('#pageTop').css('bottom', footerHeight + 'px');
			$('#gnav').css('position', 'relative');
		}
		else
		{
			$('#pageTop').css('position', 'fixed');
			$('#pageTop').css('bottom', '0');
			$('#gnav').css('position', 'fixed');
		}
	});
	
	$(window).scroll(function ()
	{
		if($(window).scrollTop() > gnavOffset.top)
		{
			$('#gnav').css('position', 'fixed');
			$('#gnav').css('top', '0');
		}
		else
		{
			$('#gnav').css('position', 'absolute');
			$('#gnav').css('top', headerHeight + 'px');
		}
	});
	
	$(window).resize(function()
	{
		bottomPos = $(document).height() - $(window).height() - footerHeight;
		setSize();
	});

});

function setSize()
{
	var headerHeight = $('#header').height();
	
	// get window size
	var winW = $(window).width();
	var winH = $(window).height();
	
	if (winW<962)
	{
		$('#gnav').css('left', '0');
		$('#gnav').css('margin-left', '0');
	}
	else
	{
		$('#gnav').css('left', '50%');
		$('#gnav').css('margin-left', '-481px');
	};
	
}



/*--------------------------------------------------

  print button

--------------------------------------------------*/

$(function() {
    $('#btPrint').hover(
	    function(){  
			$(".accordion").animate({"width": "103px"}, "fast");
		},
		function(){
			$(".accordion").animate({"width": "33px"}, "normal");
		}
    );
});




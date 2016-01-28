'use strict';

var screenWidth = $(window).width();  //屏幕宽度
var itime = null;
var n = 0;

$(function () {
	$('body').on('click', function () {
		location.href = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.hoolai.us&g_f=991653';
	}).bind('touchmove', function (e) {
		e.preventDefault();
	});

	if (screenWidth < 340) {
		$('.slogan_1').html('Us 可以和亲密的人一起记录');
	}

	$('.img-box').css('width', function () {
		return ($(this).find('li').length * screenWidth);
	}).find('li').css('width', screenWidth + 'px');

	clearInterval(itime);
	itime = setInterval(function () {
		n++;
		if (n == 4) {
			n = 0;
		}
		$('.img-box').css('transform', 'translate3d(-' + (screenWidth * n) + 'px,0,0)').css('WebkitTransform', 'translate3d(-' + (screenWidth * n) + 'px,0,0)');
	}, 7000);
});



var controller = new ScrollMagic();
var width = $(window).width();
var height = $(window).height();
var once = {
	p1: false,
	p2: false,
	p3: false,
	p4: false,
	p5: false,
	p6: false,
	p7: false,
	p8: false,
	p9: false,
	p10: false,
	p11: false,
	p12: false,
	p13: false
};

/*** 1 ***/
function scene_1() {
	if (!once.p1) {
		setTimeout(function() {
			$('#section-1 .section-box').removeClass('hidden').addClass('show');
			var logo = TweenMax.from('.logo', 0.3, {
				y: - height,
				z: 0,
				ease: Quad.easeIn
			});
			var tip1 = TweenMax.from('.tip-1', 0.4, {
				y: height,
				z: 0,
				ease: Quad.easeIn
			});
			var money1 = TweenMax.from('.money-1', .4, {
				left: - width,
				z: 0,
				ease: Linear.easeNone
			});
			var money2 = TweenMax.from('.money-2', .4, {
				left: width,
				z: 0,
				ease: Linear.easeNone
			});
			var money3 = TweenMax.from('.money-3', 1.2, {
				y: - height - 200,
				z: 0,
				ease: Quad.easeIn,
				repeat: 5
			});

			//var scene = new TimelineMax().add(logo).add(tip1).add([money1,money2]).add(money3);
		},
		300);
	}
	once.p1 = true;
}

/*** 2 ****/

function scene_2(){
	if (!once.p2) {
		setTimeout(function() {
			$('#section-2 .section-box').removeClass('hidden').addClass('show');
			var kitchener = TweenMax.from('.kitchener', 0.3, {
				y: - height,
				z: 0,
				ease: Linear.easeNone
			});
			var desktop = TweenMax.from('.desktop', 0.5, {
				y: - height,
				z: 0,
				ease: Linear.easeNone
			});
			var shadow = TweenMax.from('.shadow', 0.8, {
				alpha: 0,
				z: 0,
				ease: Linear.easeNone
			});
			var food = TweenMax.from('.food', 0.6, {
				y: - height,
				z: 0,
				ease: Linear.easeNone
			});
			var trashcan = TweenMax.from('.trashcan', 0.3, {
				left: - width,
				z: 0,
				ease: Linear.easeNone
			});
			var board = TweenMax.from('.board', 0.3, {
				left: width,
				z: 0,
				ease: Linear.easeNone
			});
			var freeFood = TweenMax.from('.freeFood', 0.3, {
				y: height,
				z: 0,
				ease: Linear.easeNone
			});
			var tip2 = TweenMax.from('.tip2', 0.5, {
				y: height,
				z: 0,
				ease: Linear.easeNone
			});
			//var scene = new TimelineMax().add(kitchener).add([desktop,shadow]).add(food).add([trashcan,board]).add(freeFood).add(tip2);
		},
		300);
	}
	once.p2 = true;
}

/**** 3 ****/

function scene_3() {
	if (!once.p3) {
		setTimeout(function() {
			$('#section-3 .section-box').removeClass('hidden').addClass('show');
			var boy = TweenMax.from('.boy', 0.2, {
				y: - height,
				z: 0,
				ease: Quad.easeIn
			});
			var fitness1 = TweenMax.from('.fitness1', 0.3, {
				y: - height,
				z: 0,
				ease: Quad.easeIn
			});
			var fitness2 = TweenMax.from('.fitness2', 0.5, {
				y: - height,
				z: 0,
				ease: Quad.easeIn
			});
			var trashcan = TweenMax.from('.trashcan3', 0.4, {
				y: - height,
				z: 0,
				ease: Linear.easeNone
			});
			var fitness3 = TweenMax.from('.fitness3', 0.4, {
				y: - height,
				z: 0,
				ease: Quad.easeIn
			});
			var fitness4 = TweenMax.from('.fitness4', 0.3, {
				y: - height,
				z: 0,
				ease: Linear.easeNone
			});

			var tip_3 = TweenMax.from('.tip-3', 0.6, {
				y: height,
				z: 0,
				ease: Quad.easeIn
			});
			var tip3 = TweenMax.from('.tip3', 0.7, {
				y: height,
				z: 0,
				ease: Quad.easeIn
			});

			//var scene = new TimelineMax().add([fitness1,fitness2,trashcan]).add([fitness3,fitness4]).add(boy).add(tip_3).add(tip3);
		},
		300);
	}
	once.p3 = true;
}

/*** 4 ***/

function scene_4() {
	if (!once.p4) {
		setTimeout(function() {
			$('#section-4 .section-box').removeClass('hidden').addClass('show');
			var door = TweenMax.from('.door', 0.3, {
				y: - height,
				z: 0,
				ease: Quad.easeIn
			});

			var tip_4 = TweenMax.from('.tip-4', 0.5, {
				y: height,
				z: 0,
				ease: Quad.easeIn
			});
			var tip4 = TweenMax.from('.tip4', 0.6, {
				y: height,
				z: 0,
				ease: Quad.easeIn
			});

			//var scene = new TimelineMax().add(door).add(tip_4).add(tip4);
		},
		300);
	}
	once.p4 = true;
}

/*** 5 ***/
function scene_5() {
	if (!once.p5) {
		setTimeout(function() {
			$('#section-5 .section-box').removeClass('hidden').addClass('show');
			var boy5 = TweenMax.from('.boy5', 0.5, {
				left: - width,
				z: 0,
				ease: Quad.easeIn
			});
			var girl5 = TweenMax.from('.girl5', 0.5, {
				left: width,
				z: 0,
				ease: Quad.easeIn
			});
			var car5 = TweenMax.from('.car5', 0.7, {
				left: - width,
				z: 0,
				ease: Quad.easeIn
			});

			var tip_5 = TweenMax.from('.tip-5', 0.6, {
				y: height,
				z: 0,
				ease: Quad.easeIn
			});
			var tip5 = TweenMax.from('.tip5', 0.7, {
				y: height,
				z: 0,
				ease: Quad.easeIn
			});

			//var scene = new TimelineMax().add([boy5,girl5]).add(car5).add(tip_5).add(tip5);
		},
		300);
	}
	once.p5 = true;
}

/*** 6 ***/
function scene_6() {
	if (!once.p6) {
		setTimeout(function() {
			$('#section-6 .section-box').removeClass('hidden').addClass('show');
			var tree1 = TweenMax.from('.tree-1', 0.5, {
				y: - height,
				z: 0,
				ease: Quad.easeIn
			});
			var tree2 = TweenMax.from('.tree-2', 0.5, {
				y: - height,
				z: 0,
				ease: Quad.easeIn
			});
			var welcome = TweenMax.from('.welcome', 0.3, {
				y: - height,
				z: 0,
				ease: Quad.easeIn
			});
			var tip_6 = TweenMax.from('.tip-6', 0.6, {
				y: height,
				z: 0,
				ease: Quad.easeIn
			});
			var tip6 = TweenMax.from('.tip6', 0.7, {
				y: height,
				z: 0,
				ease: Quad.easeIn
			});

			//var scene = new TimelineMax().add(welcome).add([tree1,tree2]).add(tip_6).add(tip6);
		},
		300);
	}
	once.p6 = true;
}
/*** 7 ***/ 
function scene_7() {
	if (!once.p7) {
		setTimeout(function() {
			$('#section-7 .section-box').removeClass('hidden').addClass('show');
			var box = TweenMax.from('.recom-box', 0.3, {
				y: - height,
				scale: 0,
				z: 0,
				ease: Quad.easeIn
			});
			var person = TweenMax.from('.recom-person', 0.4, {
				scale: 0,
				alpha: 0,
				z: 0,
				ease: Quad.easeIn
			});
			var shadow = TweenMax.from('.shadow7', 0.5, {
				alpha: 0,
				z: 0,
				ease: Quad.easeIn
			});
			var handle = TweenMax.from('.recom-handle', 0.4, {
				scale: 0,
				z: 0,
				ease: Linear.easeNone
			});
			var circle = TweenMax.from('.recomm-circle', 0.6, {
				y: - height,
				z: 0,
				ease: Linear.easeNone
			});
			var taper = TweenMax.from('.recomm-taper', 0.4, {
				y: - height,
				z: 0,
				ease: Quad.easeIn
			});
			var word = TweenMax.from('.recomm-word', 0.6, {
				y: height,
				z: 0,
				ease: Linear.easeNone
			});
			var tip = TweenMax.from('.tip7', 0.7, {
				y: height,
				z: 0,
				ease: Quad.easeIn
			});
			//var scene = new TimelineMax().add(person).add(box).add(shadow).add(handle).add(word).add(tip).add([circle,taper]);
		},
		300);
	}
	once.p7 = true;
}

/*** 8 ***/
function scene_8() {
	if (!once.p8) {
		setTimeout(function() {
			$('#section-8 .section-box').removeClass('hidden').addClass('show');
			var desk = TweenMax.from('#section-8 .tech-desk', 0.3, {
				y: - height,
				z: 0,
				ease: Linear.easeNone
			});
			var chair = TweenMax.from('#section-8 .tech-chair', 0.4, {
				scale: 0,
				z: 0,
				ease: Linear.easeNone
			});
			var shadow = TweenMax.from('#section-8 .shadow8', 0.4, {
				alpha: 0,
				z: 0,
				ease: Linear.easeNone
			});
			var person = TweenMax.from('#section-8 .tech-person', 0.5, {
				y: - height,
				z: 0,
				ease: Linear.easeNone
			});
			var map = TweenMax.from('#section-8 .tech-map', 0.4, {
				scale: 0,
				z: 0,
				ease: Linear.easeNone
			});
			var laptop = TweenMax.from('.tech-laptop', 0.5, {
				left: width,
				z: 0,
				ease: Linear.easeNone
			});
			var trash = TweenMax.from('.tech-trash', 0.5, {
				left: - width,
				z: 0,
				ease: Linear.easeNone
			});
			var word1 = TweenMax.from('.tech-word1', 0.6, {
				left: - width,
				z: 0,
				ease: Linear.easeNone
			});
			var word2 = TweenMax.from('.tech-word2', 0.6, {
				left: width,
				z: 0,
				ease: Linear.easeNone
			});
			var tip = TweenMax.from('#section-8 .tip8', 0.7, {
				y: height,
				z: 0,
				ease: Linear.easeNone
			});
			//var scene1 = new TimelineMax().add(desk).add(shadow).add(chair).add([map,person]).add([laptop,trash]).add([word1,word2]).add(tip);
		},
		300);
	}
	once.p8 = true;
}

/*** 9 ***/
function scene_9() {
	if (!once.p9) {
		setTimeout(function() {

			$('#section-9 .section-box').removeClass('hidden').addClass('show');
			var chart = TweenMax.from('#section-9 .opr-chart', 0.5, {
				height: 0,
				z: 0,
				ease: Linear.easeNone
			});
			var kpi = TweenMax.from('#section-9 .opr-kpi', 0.3, {
				scale: 0,
				z: 0,
				ease: Linear.easeNone
			});
			var shadow = TweenMax.from('#section-9 .shadow9', 0.5, {
				alpha: 0,
				z: 0,
				ease: Linear.easeNone
			});
			var person = TweenMax.from('#section-9 .opr-person', 0.5, {
				y: - height,
				z: 0,
				ease: Linear.easeNone
			});
			var desk = TweenMax.from('#section-9 .opr-desk', 0.4, {
				scale: 0,
				z: 0,
				ease: Linear.easeNone
			});
			var taper = TweenMax.from('.opr-taper', 0.5, {
				left: - width,
				z: 0,
				ease: Linear.easeNone
			});
			var shield = TweenMax.from('.opr-shield', 0.3, {
				left: width,
				z: 0,
				ease: Linear.easeNone
			});
			var word1 = TweenMax.from('.opr-word1', 0.6, {
				left: - width,
				z: 0,
				ease: Linear.easeNone
			});
			var word2 = TweenMax.from('.opr-word2', 0.6, {
				left: width,
				z: 0,
				ease: Linear.easeNone
			});
			var tip = TweenMax.from('#section-9 .tip10', 0.7, {
				y: height,
				z: 0,
				ease: Linear.easeNone
			});
			//var scene1 = new TimelineMax().add(desk).add(person).add(chart).add(kpi).add([taper,shield]).add([word1,word2]).add(tip);
		},
		300);
	}
	once.p9 = true;
}

/*** 10 ***/
function scene_10() {
	if (!once.p10) {
		setTimeout(function() {
			$('#section-10 .section-box').removeClass('hidden').addClass('show');
			var mapbg = TweenMax.from('#section-10 .mapbg', 0.3, {
				y: - height,
				z: 0,
				ease: Linear.easeNone
			});
			var busperson = TweenMax.from('#section-10 .busperson', 0.4, {
				y: - height,
				z: 0,
				ease: Quad.easeIn
			});
			var shadow = TweenMax.from('#section-10 .shadow10', 0.5, {
				alpha: 0,
				z: 0,
				ease: Quad.easeIn
			});
			var cmpdesk = TweenMax.from('#section-10 .cmpdesk', 0.3, {
				y: - height,
				z: 0,
				ease: Linear.easeNone
			});
			var trip = TweenMax.from('.trip', 0.3, {
				scale: 0,
				z: 0,
				ease: Linear.easeNone
			});
			var left_car = TweenMax.from('.left-car', 0.5, {
				y: - height,
				z: 0,
				ease: Linear.easeNone
			});
			var right_taper = TweenMax.from('.right-taper', 0.5, {
				y: - height,
				z: 0,
				ease: Linear.easeNone
			});
			var bs_word1 = TweenMax.from('.bs-word1', 0.6, {
				left: - width,
				z: 0,
				ease: Quad.easeIn
			});
			var bs_word2 = TweenMax.from('.bs-word2', 0.6, {
				left: width,
				z: 0,
				ease: Quad.easeIn
			});
			var tip = TweenMax.from('#section-10 .tip10', 0.7, {
				y: height,
				z: 0,
				ease: Quad.easeIn
			});
			// var tip1 = TweenMax.from('.plat-mng', 0.3, {left: width, z:0, ease: Linear.easeNone});
			// var tip2 = TweenMax.from('.storage-mng', 0.3, {left: -width, z:0, ease: Linear.easeNone});
			// var tip2 = TweenMax.from('.market-mng', 0.3, {left: width, z:0, ease: Linear.easeNone});
			// var tip4 = TweenMax.from('.forum-mng', 0.3, {left: -width, z:0, ease: Linear.easeNone});
			//var scene1 = new TimelineMax().add(mapbg).add(cmpdesk).add(shadow).add(busperson).add(trip).add(left_car).add(right_taper).add([bs_word1,bs_word2]).add(tip);//.add([tip1,tip2,tip3,tip4]);
		},
		300);
	}
	once.p10 = true;
}

/*** 11 ***/
function scene_11() {
	if (!once.p11) {
		setTimeout(function() {
			$('#section-11 .section-box').removeClass('hidden').addClass('show');
			var whitewash = TweenMax.from('.whitewash', 0.3, {
				y: - height,
				z: 0,
				ease: Linear.easeNone
			});
			var person = TweenMax.from('.person', 0.4, {
				y: - height,
				z: 0,
				ease: Quad.easeIn
			});
			var shadow = TweenMax.from('.shadow11', 0.5, {
				alpha: 0,
				z: 0,
				ease: Linear.easeNone
			});
			var desk = TweenMax.from('.desk', 0.3, {
				y: - height,
				z: 0,
				ease: Linear.easeNone
			});
			var easel = TweenMax.from('.easel', 0.5, {
				y: - height,
				z: 0,
				ease: Linear.easeNone
			});
			var taper = TweenMax.from('.taper', 0.3, {
				y: - height,
				z: 0,
				ease: Linear.easeNone
			});
			var car = TweenMax.from('.car', 0.3, {
				y: - height,
				z: 0,
				ease: Linear.easeNone
			});
			var pencil = TweenMax.from('.pencil', 0.3, {
				y: - height,
				z: 0,
				ease: Linear.easeNone
			});
			var pallet = TweenMax.from('.pallet', 0.3, {
				y: - height,
				z: 0,
				ease: Linear.easeNone
			});
			var zhao_words = TweenMax.from('.zhao-words', 0.6, {
				left: - width,
				z: 0,
				ease: Quad.easeIn
			});
			var sheji_words = TweenMax.from('.sheji-words', 0.6, {
				left: width,
				z: 0,
				ease: Quad.easeIn
			});
			var tip = TweenMax.from('.tip11', 0.7, {
				y: height,
				z: 0,
				ease: Quad.easeIn
			});
			//var scene1 = new TimelineMax().add(whitewash).add(person).add(shadow).add([desk, easel]).add([taper,car,pencil,pallet]).add([zhao_words,sheji_words]).add(tip);
		},
		300);
	}
	once.p11 = true;
}

/*** 12 ***/

function scene_12() {
	setTimeout(function() {
		$('#section-12 .hand').removeClass('hidden').addClass('show');
		var hand1 = TweenMax.from('.hand', 1, {
			y: height,
			z: 0,
			ease: Linear.easeNone,
			repeat: 1
		});
	},
	1000);
};
var scenes = [scene_1,scene_2,scene_3,scene_4,scene_5,scene_6,scene_7,scene_8,scene_9,scene_10,scene_11,scene_12];

/** 微信分享 **/
var IsWeixin = /MicroMessenger/i.test(navigator.userAgent);
if (IsWeixin) {
	WeixinApi.ready(function(Api) {
		// 要分享的数据
		var wxData = {
			"imgUrl": 'http://stoneren.github.io/ks3-job/img/wxshare.png',
			"link": location.href,
			"desc": '有钱，就是这么任性！2015年，金山云一大波职位来袭，你敢接招么？',
			"title": "金山云一大波职位来袭"
		};
		// 分享之后的回调
		var wxCallbacks = {
			ready: function() {},
			cancel: function(resp) {},
			fail: function(resp) {},
			confirm: function(resp) {},
			all: function(resp) {}
		};
		Api.shareToFriend(wxData, wxCallbacks); // 分享给好友
		Api.shareToTimeline(wxData, wxCallbacks); // 分享到朋友圈
	});
}

$(window).on('load', function() {
	$('.next-page').show();
	$('.swiper-container, .swiper-slide').height(height);
	/**
	$('.next-page').click(function() {
		var _currTop = $(window).scrollTop();
		$(window).scrollTop(_currTop + height)
	});
	/**/

	scenes[0]();
	var mySwiper = new Swiper('.swiper-container', {
		mode: 'vertical',
		onSlideChangeEnd: function(swiper, direction) {
			var index = swiper.activeIndex;
			var obj = $(".swiper-slide");
			obj.eq(index).siblings().find(".section-box").addClass('hide');
			obj.eq(index).find(".section-box").removeClass("hide");
			scenes[index]();
		},
		loop: false
	});

});


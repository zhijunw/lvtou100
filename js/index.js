// //个人中心车站信息页面处的tab切换
// window.onload=function(){
// 	//获取左边的客运站属性并赋值
// 	var ohcStation=document.getElementById('hcStation');
// 	var oqsStation=document.getElementById('qsStation');
// 	var oxfStation=document.getElementById('xfStation')
// 	var ocnStation=document.getElementById('cnStation')
// 	//获取右边的对应位置属性并赋值
// 	var oHongCheng=document.getElementById('hongcheng');
// 	var oQingShan=document.getElementById('qingshan');
// 	var oXuFang=document.getElementById('xufang');
// 	var oChangNan=document.getElementById('changnan');
// 	oQingShan.onmouseover=function(){
// 		ohcStation.style.display="none";
// 		oqsStation.style.display="block";
// 	}
// 	oXuFang.onmouseover=function(){
// 		oqsStation.style.display="none";
// 		oxfStation.style.display="block";
// 	}
// }


$('document').ready(function(){
	// banner轮播部分
	//首先定义一个变量indexBanner用来承载背景的宽度;
	//var bannerIco=$('.index-bannerIco').width();
	//var bannerIndex=0;
	// function silder(){
	// 	console.log($('.banner-ico img').length);
	// 	if(bannerIndex>=$('.banner-ico img').length){
	// 		$('.banner-ico').animate('left','0');
	// 		bannerIndex=0;
	// 	}
	// 	else{
	// 		$('.banner-ico').animate('left','-=100%');
	// 		bannerIndex++;
	// 	}
	// }
	// silder();
	var bannerIndex=1;
	function silder(){
		var imgLen=$('.banner-ico img').length
		if(bannerIndex<imgLen){
			bannerIndex++;
		}
		else{
			bannerIndex=1;
		}
		$('.banner-ico img').eq(bannerIndex-1).fadeIn().siblings().fadeOut();
		$('.banner-dot li').eq(bannerIndex-1).addClass('active').siblings().removeClass('active');
	}
	var t=setInterval(silder,2000);
	$('.banner-dot li').mouseover(function(){
		bannerIndex=$(this).index()+1;
		$(this).addClass('active').siblings().removeClass('active');
		$('.banner-ico img').eq(bannerIndex-1).show().siblings().hide();
	});
	$('.index-banner').hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(silder,2000);
	})
	//下一页切换的切换按钮
	$('.banner-next').click(function(){
		silder();
	})
	//上一页切换的切换按钮
	$('.banner-prev').click(function(){
		//alert(111);
		var imgLen=$('.banner-ico img').length;
		if(1<=bannerIndex<=imgLen){
			bannerIndex--;
			if(bannerIndex<1){
				bannerIndex=imgLen
			}
		}
		console.log(bannerIndex);
		$('.banner-ico img').eq(bannerIndex-1).fadeIn().siblings().fadeOut();
		$('.banner-dot li').eq(bannerIndex-1).addClass('active').siblings().removeClass('active');
	})


	//返回顶部
	$(window).scroll(function(){
		//console.log($(this).scrollTop());
		if($(this).scrollTop()>300){
			$('.return-top').show(500);
		}
		else{
			$('.return-top').hide(500);
		}
	})
	$('.return-top').click(function(){
		//document.documentElement.scrollTop=document.body.scrollTop=0;
		$(document.body).animate({scrollTop:0},500);
	})


	//汽车周边游tab切换 
	$('.title-car-list li').click(function(){
		$(this).find('span').addClass('active').parent().siblings().find('span').removeClass('active');
		$('.travel-cont').eq($(this).index()).show().siblings().hide();
	})


	//热门汽车票tab切换
	$('.body-left-list li').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
		$('.body-right ul').eq($(this).index()).show().siblings().hide();
	})


	//点赞效果的切换
	$('.dianzan').click(function(){
		$(this).toggleClass('active');
	})



	//banner处搜索框之出发城市input框
	//文本框获得焦点的时候显示
	$('.stratCity-search').focus(function(){
		//此处判断如果当文本框里面没有内容时点击才会出现城市选择下拉框
		if($(this).val() == ""){
			$('.item-cityTitle').show();
		}
		//当文本框里有内容时再次点击不会出现城市选择下拉框
		else if($(this).val() !=""){
			$('.item-cityTitle').hide();
			$(this).select();
		}
	})
	$('.stratCity-search').keyup(function(){
		if($('.stratCity-search').val()==""){
			$('.item-cityTitle').show();
		}
	})
	$('.stratCity-search').click(function(){
		if($(this).val()!=""){
			$(this).select();
		}
	})
	//文本框失去焦点的时候隐藏
	$('.stratCity-search').blur(function(){
		//失去焦点的时候给一个代码延迟效果
		var ts=$(this);
		setTimeout(function(){
			$('.item-cityTitle').hide();
		},200);
	})
	//选择城市的时候鼠标滑过加上效果
	$('.item-cityContent').delegate('span','mouseenter',function(){
		$(this).css({'background':'#1a8cff','color':'#fff'});
	});
	$('.item-cityContent').delegate('span','mouseleave',function(){
		$(this).css({'background':'','color':''});
	});
	//当点击下面的城市按钮的时候将值传到文本框里面去
	$('.item-cityContent').delegate('span','click',function(){
		var text=$(this).text();
		$('.stratCity-search').val(text);
	})
	//当点击关闭的小XX时即关闭程序
	$('.close-btn').click(function(){
		$(this).parents('.item-cityTitle').hide();
	})


	//banner处搜索框之到达城市input框
	$(".endCity-search").focus(function(){
		if($(this).val()==""){
			$(this).siblings('.end-cityTitle').show();
		}
		else{
			$(this).siblings('.end-cityTitle').hide();
			$(this).select();
		}
	})
	$('.endCity-search').blur(function(){
		var ts=$(this);
		setTimeout(function(){
			ts.siblings('.end-cityTitle').hide();
		},200)
	})
	$('.endCity-search').keyup(function(){
		if($(this).val()==""){
			$(this).siblings('.end-cityTitle').show();
		}
	})
	$('.endCity-search').click(function(){
		if($(this).val()!=""){
			$(this).select();
		}
	})
	$('.end-cityContent').delegate('span','mouseenter',function(){
		$(this).css({'background':'#1a8cff','color':'#fff'});
	});
	$('.end-cityContent').delegate('span','mouseleave',function(){
		$(this).css({'background':'','color':''});
	});
	$('.end-cityContent').delegate('span','click',function(){
		var text=$(this).text();
		$(this).parents('.end-cityTitle').siblings('.endCity-search').val(text);
	})
	//当点击关闭的小XX时即关闭程序
	$('.close-btn').click(function(){
		$(this).parents('.end-cityTitle').hide();
	})



	//后台json数据传值
	//引入后端抛过来的数据
	//console.log(cityData);
	//拆分cityData这个对象
	// cityData={
	// 	result:0,
	// 	code:0,
	// 	data:{
	// 		江西省:[
	// 			{
	// 				cityname: "江西省",
	// 				.......
	// 			}
	// 		],
	// 		湖北省:[
	// 			{
	// 				cityname: "湖北省",
	// 				.......
	// 			}
	// 		],
	// 	},
	// 	message:"";
	// }
	var template="";
	// for(var i in cityData['data']){
	// 	//console.log("省份:"+i);
	// 	//console.log(cityData['data'][i]);
	// 	for(var j in cityData['data'][i]){
	// 		//console.log(j);
	// 		//console.log(cityData['data'][i][j])
	// 		console.log("省份:"+cityData['data'][i][j]['province']);
	// 		console.log("市区:"+cityData['data'][i][j]['cityname']);
	// 		// for(var k in cityData['data'][i][j])
	// 		// 	console.log(cityData['data'][i][j][k]);
	// 	}
	// }
	for(var i in cityData['data']){
		template+="<dl><dt>"+i+"</dt><dd>";
		for(var j in cityData['data'][i]){
			template+="<span>"+cityData['data'][i][j]['cityname']+"</span>";
		}
		template+="</dd></dl>";
	}
	$('.item-CityWrap').html(template);

	// 日期选择
	$('#startTime').click(function(){
		laydate({
			festival: true,//是否显示节日
			format: 'YYYY/MM/DD hh:mm:ss',//日期格式
			istime:true,//是否显示具体时间
			istoday:true,//是否显示今天
			//min:'2016-11-25 00:00:00',//最小日期
			//max:'2016-11-26 00:00:00',//最大日期
			min:laydate.now(),//设定最小日期为今天的日期
			max:laydate.now(10),//设定最大日期为今天日期10天以后的日期
			event:'click',
			choose: function(datas){ //选择日期完毕的回调
    			alert('得到：'+datas);
 			},
 			 
		});
	})
	//设置皮肤
	laydate.skin("dahong");
	$('#startTime').attr('placeholder',laydate.now());//把它的placeholder属性设置为今天的日期时间
})
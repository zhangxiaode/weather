$(function(){
	$(".wTabHd").on("click","li",function(){
		var index=$(this).index();
		$(this).addClass("selected").siblings().removeClass("selected");
		$(".wTabBdBox").eq(index).addClass("selected").siblings().removeClass("selected");
	})
	$(".correlation").find("li").hover(function(){
		$(this).find(".correlationDialog").show();
	},function(){
		$(this).find(".correlationDialog").hide();
	})
	$(".windy").find(".tempChartBox").hover(function(){
		$(this).find(".wcbDialog").show();
	},function(){
		$(this).find(".wcbDialog").hide();
	})
	//获取天气接口数据
	$.ajax({
		url:"./js/weather.json",
		async:true,
		type:"get",
		dataTyle:"json",
		cache:true,
		contentType:"utf-8",
		beforeSend:function(xhr){
		},
		complete:function(XHR, TS){
		},
		success:function(data){
			for (var i = 0; i < $(".correlation").find("li").length; i++) {
				$(".correlation").find("li").eq(i).find(".exhi").text(data.results[0].index[i].title + "：" + data.results[0].index[i].zs);
				$(".correlation").find("li").eq(i).find(".cdCont").find("span").text(data.results[0].index[i].tipt + "：" + data.results[0].index[i].zs);
				$(".correlation").find("li").eq(i).find(".cdCont").find("p").text(data.results[0].index[i].des);
			}
		},
		error:function(){
			alert("未能获取天气数据");
		}
	})
	$.ajax({
		url:"http://v.juhe.cn/weather/index?cityname=%E6%9D%AD%E5%B7%9E&dtype=json&format=1&key=6e2df655e72ea62ea8bcfe0b6dce7798",
		async:true,
		type:"get",
		cache:true,
		contentType:"utf-8",
		beforeSend:function(xhr){
		},
		complete:function(XHR, TS){
		},
		success:function(data){
			console.log(data);
		},
		error:function(){
			alert("未能获取天气数据");
		}
	})
	//24小时温度
	var ctx=document.getElementById("temperatureChartBg").getContext("2d");
    ctx.beginPath();
    ctx.strokeStyle="#fff";
    ctx.lineWidth=0.3;
    for (var i = 0; i <5; i++) {
        ctx.moveTo(0,17.1*(i+1));
        ctx.lineTo(480,17.1*(i+1));
    }                                   
    ctx.stroke();
    var arr=[13,14,12,10,10,11,11,15,13];
    ctx.beginPath();
    ctx.strokeStyle="#fff";
    ctx.fillStyle="rgba(255,255,255,0.1)";
    ctx.lineWidth=1;
    ctx.moveTo(0,(30-arr[0])*17/5);
    for (var i = 0; i < 9; i++) {
        ctx.lineTo(17+56*i,(30-arr[i])*17/5);
    }
    ctx.lineTo(34+56*8,(30-arr[8])*17/5);     
    ctx.lineTo(34+56*8,6*17);     
    ctx.lineTo(0,6*17);
    ctx.moveTo(0,(30-arr[0])*17/5); 
    ctx.stroke();   
    ctx.fill();

	//风力风向
    var ctx=document.getElementById("windyChartBg").getContext("2d");
	ctx.beginPath();
	ctx.strokeStyle="#fff";
	ctx.lineWidth=0.3;
	for (var i = 0; i <5; i++) {
		ctx.moveTo(0,17.1*(i+1));
		ctx.lineTo(480,17.1*(i+1));
	}									
	ctx.stroke();
	var arr=[68,60,51,60,60,51,60,60,60];
	ctx.beginPath();
	ctx.strokeStyle="#fff";
	ctx.lineWidth=1;
	ctx.moveTo(17,arr[0]);
	for (var i = 0; i < 9; i++) {
		ctx.lineTo(17+56*(i+1),arr[i+1]);	
	}			
	ctx.stroke();
})











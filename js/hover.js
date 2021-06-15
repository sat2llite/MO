$(function(){
  var menu=".gnbD .gnb li";
		 
	$(menu).mouseover(function(){
			$(this).css("background","#f8f8f8");
	});
	$(menu).mouseout(function(){
			$(this).css("background","none");
	});

});

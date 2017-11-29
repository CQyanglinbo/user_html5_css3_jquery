
$(document).ready(function() {
	resizeWindow();
	$(window).resize(function() {
		resizeWindow();
	});
})
function resizeWindow() {
	var contentHeight=$(window).height()-80;
	$(".center").height(contentHeight);
	
}
//全选
$(function() {
	$("#clickall").click(function() {
		if(this.checked==true) {
			$("input:checkbox").prop("checked",true);
		}else {
			$("input:checkbox").prop("checked",false);
		}
	});
})

//删除函数
$(function() {
	$('span').click(function() {
		//删除
		var len=$("input:checkbox").length;
		$("input:checkbox").each(function(i) {
			if(this.checked==true) {
				if(i==0) {
						this.checked=false;
				}else {
					$(this).parent().parent().remove();
				}
		 	}
		});
	});
})
//查询函数
$(function() {
	$("#query").click(function() {
		$(".td1").each(function(i) {
			if($("#name").val()==$(this).text()) {
				$(this).parent().show();
			}else {
				$(this).parent().hide();
			}
		});	
	});
})
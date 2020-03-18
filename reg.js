// console.log('abc');
$(function(){
    // console.log('hh');

    //get dom elm
    var $username = $("#userNameInput");
    var $phone = $("#phoneInput");
    var $pwd = $("#pwdInput");
    var $yan1 = $("#yanInput1");
    var $yan2 = $("#yanInput2");
    var $submit = $("#submitInput");

    // 验证码计时
    $('#yanInput2').click(function(){
        var count = 60;
        var timer=setInterval(function() {
          if (count > 1) {
              count--;
              console.log(count);
              $('#yanInput2').val("重新发送(" + count + ")");
              $('#yanInput2').attr('disabled',true); 
          }else {
              $('#yanInput2').val('获取验证码');
              $('#yanInput2').removeAttr("disabled");
              $('#yan_infor').val('请求超时请稍后再试');
              clearInterval(timer);
          }
        }, 1000);     
    })

	$username.click(function(){
    	var $usernameInfo = $('#username_info');
    	$usernameInfo.val('用户名只能为数字、字母、下划线不能为纯数字');
	})
   	$username.blur(function(){
   		console.log('user');
   		var $data=$username.val();
    	var $usernameInfo = $('#username_info');
    	if(!/^[\u4E00-\u9FA5A-Za-z0-9_]+$/.test($data)){
    		$usernameInfo.val('用户名只能为数字、字母、下划线不能为纯数字');
    		return false;
    	}else  if($data==''){
    		$usernameInfo.val('用户名不能为空');
    		return false;
    	}
    	$usernameInfo.html('');
    	return true;
   	})

    $phone.click(function(){
    	var $phoneInfo = $('#phone_info');
    	$phoneInfo.html('用户名只能为数字、字母、下划线不能为纯数字');
	})
	$phone.blur(function(){
		var $data=$("#phoneInput").val();
    	var $phoneInfo = $('#phone_info');
    	if(!/^((13[0-9])|(17[0-1,6-8])|(15[^4,\\D])|(18[0-9]))\d{8}$/.test($data)){
    		$phoneInfo.html('手机号码格式不正确');
    		return false;
    	}
    	$phoneInfo.html('');
    	return true;
	})
    
    $pwd.click(function(){
    	var $pwdInfo = $('#pwd_info');
    	$pwdInfo.html('用户名只能为数字、字母、下划线不能为纯数字');
	})
	$pwd.blur(function(){
		var $data=$("#pwdInput").val();
    	var $pwdInfo = $('#pwd_info');
    	if(!/^[a-zA-Z]\w{5,17}$/.test($data)){
    		$pwdInfo.html('密码格式不正确');
    		return false;
    	}
    	$pwdInfo.html('');
    	return true;
	})	
    	
})
<?php
	header("content-type:text/html;charset=utf-8");
	//接收数据
	$userName=$_POST['userName'];
	$userPass=$_POST['userPass'];
	//数据库处理
		//连接数据库服务器
		$con=mysql_connect("localhost","root","root");
		if(!$con){
			echo("注册失败，服务器异常");
		}else{
			//选择数据库
			mysql_select_db("mobileone",$con);
			//执行sql语句
			$sqlStr1="select * from users where userName='".$userName."' and userPass='".$userPass."'";
			$result1=mysql_query($sqlStr1,$con);

			if(mysql_num_rows($result1)!=1){
				$sqlStr2="insert into users(userName,userPass) values('".$userName."','".$userPass."')";
				$result2=mysql_query($sqlStr2,$con);
			}else{
				echo ("0");
			}
			//关闭服务器
			mysql_close($con);
		}
		if($result2==1){
			echo("1");
		}else{
			echo("0");
		}
			
			
		
		
?>
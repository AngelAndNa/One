<?php
	header("content-type:text/html;charset=utf-8");
	$userName=$_POST('userName');
	$userPass=$_POST('userPass');
	$con=mysql_connect('localhost','root','root');
	if(!$con){
		echo("-1");
	}else{
		mysql_select_db("mobileone",$con);
		$sqlStr="select * from users where userName='".$userName."' and userPass='".$userPass."'";
		$result=mysql_query($sqlStr,$con);
		mysql_close($con);
		if(mysql_num_rows($result)==1){
			echo ("1");
		}else{
			echo ("0");
		}
	}
	

?>

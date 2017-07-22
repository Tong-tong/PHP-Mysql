<?php 
header("Content_type:application/json; charset=utf-8");
//$link=mysql_connect('localhost','root','root');
require_once('db.php');

if(! $link )
{
    die('连接失败: ' . mysqli_error($link));
}
echo '数据库连接成功！';

	mysqli_query($link,"SET NAMES utf8");


//插入新闻
	$newstitle = $_POST['newstitle'];
	$newstype = $_POST['newstype'];
	$newsimg = $_POST['newsimg'];
	$newstime = $_POST['newstime'];
	$newssrc = $_POST['newssrc'];
	$newsid=$_POST['id'];

$sql = "UPDATE newses SET newstitle ='{$newstitle}', newstype = '{$newstype}', newsimg='{$newsimg}', newstime='{$newstime}', newssrc='{$newssrc}'  WHERE id='{$newsid}' ";


mysqli_select_db( $link, 'baidunews' );

	$result = mysqli_query($link,$sql);

if(! $result )
{
  die('无法修改数据: ' . mysqli_error($link));
}

echo "数据修改成功\n";

mysqli_close($link);


/*
if ($link) {
	//插入新闻
	$newstitle = $_POST['newstitle'];
	$newstype = $_POST['newstype'];
	$newsimg = $_POST['newsimg'];
	$newstime = $_POST['newstime'];
	$newssrc = $_POST['newssrc'];
	$newsid=$_POST['id'];


	$sql = "UPDATE `newses` SET `newstitle`=`{$newstitle}`,`newstype`=`{$newstype}`,`newsimg`=`{$newsimg}`,`newstime`=`{newstime}`,`newssrc`=`{$newssrc}` WHERE `id`=`{$newsid}`";

mysqli_query($link,"SET NAMES utf8");


	$result = mysqli_query($link,$sql);

	echo json_encode(array('success'=>$sql));
}

mysqli_close();
*/


 ?>
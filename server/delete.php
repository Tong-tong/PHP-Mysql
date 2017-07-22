<?php 
header("Content_type:application/json; charset=utf-8");
//$link=mysql_connect('localhost','root','root');
require_once('db.php');

if(!$link)
{
    die('连接失败:' . mysqli_error($link));
}
echo '数据库连接成功!';

 mysqli_query($link,"SET NAMES utf8");// 设置编码，防止中文乱码

$newsid = @$_POST['id'];

      
$sql = "DELETE FROM newses WHERE id = '{$newsid}'";

mysqli_select_db( $link,'baidunews');

$retval = mysqli_query( $link, $sql );

/*if(! $retval )
{
  die('无法删除数据: ' . mysqli_error($link));
}

echo "数据删除成功\n";*/

mysqli_close($link);



/*
if ($link) {
	$newsid = $_POST['id'];
	mysqli_select_db( $link, 'baidunews' );

	mysqli_query($link,"SET NAMES utf8");
	$sql = "DELETE FROM `newses` WHERE `newses`.`id` = '{$newsid}'";

	mysqli_query($link,$sql);

	echo json_encode(array('删除状态'=>'成功'));
}

mysqli_close($link);

*/

 ?>
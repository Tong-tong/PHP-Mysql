<?php 
header("Content_type:application/json; charset=utf-8");
//$link=mysql_connect('localhost','root','root');
require_once('db.php');

if(! $link )
{
    die('Could not connect: ' . mysqli_error());
}
echo '数据库连接成功！';

mysqli_query($link , "set names utf8");

	//插入新闻
	$newstitle = $_POST['newstitle'];
	$newstype = $_POST['newstype'];
	$newsimg = $_POST['newsimg'];
	$newstime = $_POST['newstime'];
	$newssrc = $_POST['newssrc'];

 
$sql = "INSERT INTO newses".
        "(newstitle,newstype, newsimg,newstime,newssrc) ".
        "VALUES ".
        "('$newstitle','$newstype','$newsimg','$newstime','$newssrc')";
 
mysqli_select_db( $link, 'baidunews' );
$retval = mysqli_query( $link, $sql );
if(! $retval )
{
  die('无法插入数据: ' . mysqli_error($link));
}
echo "数据插入成功\n";
mysqli_close($link);


 ?>
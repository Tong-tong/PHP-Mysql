<?php 
header("Content_type:application/json; charset=utf-8");
//$link=mysql_connect('localhost','root','root');
require_once('db.php');

if ($link) {

	$newsid =$_GET['id'];


	mysqli_query($link,"SET NAMES utf8");
	$sql = "SELECT * FROM newses WHERE id ='{$newsid}'";
	//$sql = "SELECT * FROM newses";
	
	mysqli_select_db( $link, 'baidunews');

	$result = mysqli_query($link,$sql);

	// if(is_resource($result)){
 //            	 echo '有数据...';
	// 	    	 }else{
	// 			echo '无数据...';
	// 			}
	

	$senddata = array();


	while($row =mysqli_fetch_assoc($result)) {
		
			array_push($senddata,array(
					'id'=>$row['id'],
					'newstype'=>$row['newstype'],
					'newstitle'=>$row['newstitle'],
					'newsimg'=>$row['newsimg'],
					'newstime'=>$row['newstime'],
					'newssrc'=>$row['newssrc']
					
				));
		}

		echo json_encode($senddata);

	//echo json_encode(array('删除状态'=>'成功'));

}
mysqli_close($link);

 ?>
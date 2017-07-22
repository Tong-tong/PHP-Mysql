<?php 
	header("Content_type:application/json; charset=utf-8");
	//$link=mysqli_connect('localhost:3306','root','root');
	require_once('db.php');

	if ($link) {
		//执行成功过程
		
		if (@$_GET['newstype']){

			$newstype=$_GET['newstype'];

			$sql = "SELECT * FROM newses WHERE newstype ='{$newstype}' order by id desc";

		     mysqli_select_db($link,'baidunews');   

		     mysqli_query($link,"SET NAMES utf8");

			$result=mysqli_query($link,$sql);//发送查询语句

		   //     	if(is_resource($result)){
    	// 	     echo '有数据...';
			  //   	 }else{
					// echo '无数据...';
					// }

		        $senddata = array();

				while($row =mysqli_fetch_assoc($result)){
					//echo $row;
					array_push($senddata,array(
							'id'=>$row['id'],
							'newstype'=>$row['newstype'],
							'newstitle'=>$row['newstitle'],
							'newsimg'=>$row['newsimg'],
							'newstime'=>$row['newstime'],
		   					'newssrc'=>$row['newssrc'],		
						));
				}
				echo json_encode($senddata);
	} else{

	mysqli_select_db($link,'baidunews');

	$sql = "SELECT * FROM newses order by id desc";
        mysqli_query($link,"SET NAMES utf8");

		$result=mysqli_query($link,$sql);//发送查询语句

			/*if(is_resource($result)){
             echo '有数据...';
		     }else{
			echo '无数据...';
		}*/

        $senddata = array();

		while($row =mysqli_fetch_assoc($result)){
		
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
	}
}else{
	echo json_encode(array('success' =>'none' ));
	}
	mysqli_close($link);
 ?>
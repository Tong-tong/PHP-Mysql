//打开页面时，发送请求，刷新新闻列表
$(document).ready(function() {
    var $newsTable = $('#newstable tbody');
    refreshNews();

    //添加新闻
    $('#btnsubmit').click(function(e) {
        e.preventDefault(); //取消默认行为

        //输入判断
        if ($('#newstitle').val() === "" || $('#newsimg').val() === "" || $('#newstime').val() === "" || $('#newssrc').val() === "") {
            if ($('#newstitle').val() === "") {
                $('#newstitle').parent().addClass('has-error');
            } else {
                $('#newstitle').parent().removeClass('has-error');
            }


            if ($('#newsimg').val() === "") {
                $('#newsimg').parent().addClass('has-error');
            } else {
                $('#newsimg').parent().removeClass('has-error');
            }


            if ($('#newstime').val() === "") {
                $('#newstime').parent().addClass('has-error');
            } else {
                $('#newstime').parent().removeClass('has-error');
            }


            if ($('#newssrc').val() === "") {
                $('#newssrc').parent().addClass('has-error');
            } else {
                $('#newssrc').parent().removeClass('has-error');
            }

        } else {
            var jsonNews = {
                newstitle: $('#newstitle').val(),
                newstype: $('#newstype').val(),
                newsimg: $('#newsimg').val(),
                newstime: $('#newstime').val(),
                newssrc: $('#newssrc').val(),
            };
            
        // 提交添加
            $.ajax({
                url: './server/insert.php',
                type: 'post',
                data: jsonNews,
                datatype: 'json',
                success: function(data) {
                    $('#newstitle').val('请输入新闻标题'); 
                    $('#newsimg').val('选择图片路径');
                    $('#newstime').val('年/月/日');
                    $('#newssrc').val('请输入新闻来源');
                    refreshNews();
                }
            });
            
            // $.post('./server/insert.php',{
            //      newstitle: $('#newstitle').val(),
            //     newstype: $('#newstype').val(),
            //     newsimg: $('#newsimg').val(),
            //     newstime: $('#newstime').val(),
            //     newssrc: $('#newssrc').val(),
            // },function(data){
            //     console.log(data);
            //     refreshNews();
            // },'JSON'); 
        }
    });


    //删除新闻
    var deleteId = null;
    $newsTable.on('click','.btn-danger', function(e) {
        $('#deleteModal').modal('show');

        deleteId = $(this).parent().prevAll().eq(5).html(); 
        console.log(deleteId);
    });

    $('#deleteModal #confirmDelete').click(function(e) {
        if (deleteId) {
            $.ajax({
                url: './server/delete.php',
                type: 'POST',
                data: {'id':deleteId},
                success: function(data) {
                    console.log('删除成功');
                    $('#deleteModal').modal('hide');
                    refreshNews();
                }
            });
            // $.post('./server/delete.php',{'id':deleteId},function(data){    
            //         console.log('删除成功');
            //         $('#deleteModal').modal('hide');
            //         refreshNews();
            // });
        }
    });

    //修改新闻
    var updateId = null;
    $newsTable.on('click', '.btn-primary', function(e) {
        $('#updateModal').modal('show');
        updateId = $(this).parent().prevAll().eq(5).html();
         console.log(updateId);

        // $.ajax({
        //     url: './server/curnews.php',
        //     type:'GET',
        //     datatype:'JSON',
        //     data: {'id':updateId},
        //     success: function(data) {
        //         $('#unewstitle').val(data[0].newstitle);
        //         $('#unewstype').val(data[0].newstype);
        //         $('#unewsimg').val(data[0].newsimg);
        //         $('#unewssrc').val(data[0].newssrc);
        //         var utime = data[0].newstime.split(' ')[0];
        //         $('#unewstime').val(utime);
        //          // $('#unewstime').val(data[0].newstime);
        //     }
        // });
        
        $.get('./server/curnews.php',{'id':updateId},function(data){
               console.log(data);
                $('#unewstitle').val(data[0].newstitle);
                $('#unewstype').val(data[0].newstype);
                $('#unewsimg').val(data[0].newsimg);
                $('#unewssrc').val(data[0].newssrc);
                var utime = data[0].newstime.split(' ')[0];
                $('#unewstime').val(utime);
                
        },'JSON');
    });

    $('#updateModal #confirmUpdate').click(function(e) {
        $.ajax({
            url: './server/update.php',
            type: 'post',
            data: {
                newstitle: $('#unewstitle').val(),
                newstype: $('#unewstype').val(),
                newsimg: $('#unewsimg').val(),
                newstime: $('#unewstime').val(),
                newssrc: $('#unewssrc').val(),
                id: updateId
            },
            success: function(data) {
                $('#updateModal').modal('hide');
                refreshNews();
            }
        });
        
        // $.post('./server/update.php',{
        //         newstitle: $('#unewstitle').val(),
        //         newstype: $('#unewstype').val(),
        //         newsimg: $('#unewsimg').val(),
        //         newstime: $('#unewstime').val(),
        //         newssrc: $('#unewssrc').val(),
        //         id: updateId
        //     },function(data){
        //          $('#updateModal').modal('hide');
        //           refreshNews();
        //     });
    });


    function refreshNews() {
        //清空所有新闻
        $newsTable.empty();

        $.get('./server/getnews.php', function(data){
            data.forEach(function(item,index,array){
                  var $tdid = $('<td></td>').html(item.id);

                    var $tdtype = $('<td>').html(item.newstype);
                    var $tdtitle = $('<td>').html(item.newstitle);
                    var $tdimg = $('<td>').html(item.newsimg);
                    var $tdtime = $('<td>').html(item.newstime);
                    var $tdsrc = $('<td>').html(item.newssrc);
                    var $tdctrl = $('<td>');
                    var $btnupdate = $('<button>').addClass('btn btn-primary btn-xs').html('修改');
                    var $btndelete = $('<button>').addClass('btn btn-danger btn-xs').html('删除');
                    $tdctrl.append($btnupdate, $btndelete);
                    var $tRow = $('<tr>');
                    $tRow.append($tdid, $tdtype, $tdtitle, $tdimg, $tdtime, $tdsrc, $tdctrl);
                    $newsTable.append($tRow);
            });
        },'JSON');

        // $.ajax({
        //     type: 'GET',
        //     url: './server/getnews.php',
        //     datatype: 'JSON',
        //     // data: {newstype:'type'},
        //     success: function(data) {
        //        data.forEach(function(item,index,array){
        //         //for (var item in data) {
        //             var $tdid = $('<td></td>').html(item.id);
        //             var $tdtype = $('<td>').html(item.newstype);
        //             var $tdtitle = $('<td>').html(item.newstitle);
        //             var $tdimg = $('<td>').html(item.newsimg);
        //             var $tdtime = $('<td>').html(item.newstime);
        //             var $tdsrc = $('<td>').html(item.newssrc);
        //             var $tdctrl = $('<td>');
        //             var $btnupdate = $('<button>').addClass('btn btn-primary btn-xs').html('修改');
        //             var $btndelete = $('<button>').addClass('btn btn-danger btn-xs').html('删除');
        //             $tdctrl.append($btnupdate, $btndelete);

        //             var $tRow = $('<tr>');
        //             $tRow.append($tdid, $tdtype, $tdtitle, $tdimg, $tdtime, $tdsrc, $tdctrl);
        //             $newsTable.append($tRow);
        //         });
        //     }
        // });

    }
});
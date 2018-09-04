// var $serverURL = "{{ path('base_uploadFile') }}";
// var $numLimit = 10;
// var $names ='files[]';
// var BASE_URL="{{ asset('public/webUploader') }}";
var file_demo = function() {

	var uploader_btn = WebUploader.create({

		// swf文件路径
		swf: '../Uploader.swf',

		// 文件接收服务端。
		server: $serverURL,

		// 选择文件的按钮。可选。
		// 内部根据当前运行是创建，可能是input元素，也可能是flash.
		pick: '#picker',

		// 不压缩image, 默认如果是jpeg，文件上传前会压缩一把再上传！
		resize: false,
		accept: {
			title: 'word',
			extensions: 'doc,docx,xls,xlsx,zip,txt,pdf',
			mimeTypes: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,aplication/zip,application/vnd.ms-excel,application/vnd.ms-works,text/plain,application/pdf,application/vnd.ms-powerpoint,application/msword'
		}
	});

	$("#ctlBtn").on("click", function() {
		uploader_btn.upload();
	})

	uploader_btn.on('fileQueued', function(file) {
		console.log(file);
		var $list = $("#thelist2");
		$list.append('<div id="' + file.id + '" class="item">' +
			'<h4 class="info">' + file.name + '</h4>' +
			'<p class="state">等待上传...</p>' +
			'</div>');
	});
	uploader_btn.on('uploadSuccess', function(file) {
		$('#' + file.id).find('p.state').text('已上传');

	});

	uploader_btn.on('uploadError', function(file) {
		console.log(file)
		$('#' + file.id).find('p.state').text('上传出错');
	});

	uploader_btn.on('uploadComplete', function(file) {
		$('#' + file.id).find('.progress').fadeOut();
	});
	uploader_btn.on('uploadProgress', function(file, percentage) {
		var $li = $('#' + file.id),
			$percent = $li.find('.progress .progress-bar');

		// 避免重复创建
		if(!$percent.length) {
			$percent = $('<div class="progress progress-striped active">' +
				'<div class="progress-bar" role="progressbar" style="width: 0%">' +
				'</div>' +
				'</div>').appendTo($li).find('.progress-bar');
		}

		$li.find('p.state').text('上传中');

		$percent.css('width', percentage * 100 + '%');
	});
	uploader_btn.on("uploadSuccess", function(code, data) {
		var imgBox = '<span style="float: left;padding: 9px 15px;position: relative;"><input type="hidden" name="' + urls + '" value="' + data.url + '"/>'+'<input type="hidden" name="' + names + '" value="' + data.name + '"/>' + data.name + '<span  class="close" onclick="this.parentNode.remove();" style="position:absolute;top:3px;right:3px;font-size:14px;color: red;"></span>' + '</span>';
		$("#thelist3").append(imgBox);
	});

}

var ase = 0;
var c = '<div id="uploader2" class="wu-example" style="padding: 10px">\n' +
	'                        <!--用来存放文件信息-->\n' +
	'                        <div id="thelist2" class="uploader-list"></div>\n' +
	'                        <div class="btns">\n' +
	'                            <div id="picker" style="float: left;margin-right: 10px">选择文件</div>\n' +
	'                            <button type="button" id="ctlBtn" class="btn btn-default button bg-blue" style="height: 40px;">开始上传</button>\n' +
	'                        </div>\n' +
	'                    </div>';
$(file_btn).on("click", function() {
	$(".Mask").css("visibility", "visible");
	$(".upload_img_box .content_img_box").append(c);
	file_demo();
	ase++;
})
$("span.close_span").on("click", function() {
	$(".Mask").css("visibility", "hidden");
	var ccc = $(".upload_img_box .content_img_box *");
	ccc.remove();
})
function Detail(params){
	var detail = Ti.UI.createWindow({
		backgroundColor: "green"
	});
	var l = Ti.UI.createLabel({
		top: 10,
		text: params.id
	});
	var bClose = Ti.UI.createButton({
		bottom: 0,
		title: "Close"
	})
	bClose.addEventListener('click', function(){detail.close()});
	
	detail.add(bClose);
	detail.add(l);
	return detail;
};

module.exports = Detail;

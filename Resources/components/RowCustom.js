function RowCustom(params){
	var row = Ti.UI.createTableViewRow({
		_id: 'pippo_'+params.i
	});
	
	var viewBox = Ti.UI.createView({
		layout: 'horizontal',
		width: Ti.UI.SIZE,
		height: Ti.UI.SIZE,
		left:0
	});
	
	var imageLeft = Ti.UI.createImageView({
		image: params.image_url,
		width: '64dp',
		height: '64dp'
	});
	
	var viewMain = Ti.UI.createView({
		layout: 'vertical',
		backgroundColor: "#ccc",
		width: Ti.UI.SIZE	,
		height: Ti.UI.SIZE
	}); 
	
	var lebelTitle = Ti.UI.createLabel({
		text : params.title,
		color : 'red',
		font : {fontSize:18},
		textAlign : 'center',
		left: 0,
		top: 0
	});
	
	var lebelSubtitle = Ti.UI.createLabel({
		text : params.subtitle,
		color : 'red',
		font : {fontSize:14},
		textAlign : 'center',
		left: 0,
		top: 0
	});
	
	viewMain.add(lebelTitle);
	viewMain.add(lebelSubtitle);
	
	var imageImage = Ti.UI.createImageView({
		image: "/images/KS_nav_ui.png",
		width: Ti.UI.SIZE,
		height: Ti.UI.SIZE,
		right: 0
	});
	
	viewBox.add(imageLeft);
	viewBox.add(viewMain);
	
	row.add(viewBox);
	row.add(imageImage);
	
	return row;
};

module.exports = RowCustom;

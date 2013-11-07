var data = [];
/*
data.push({title: "Bla",hasCheck:true});
data.push({title: "Bla1", hasChild: true});
data.push({leftImage: 'KS_nav_ui.png',title: "Bla2",rightImage: 'KS_nav_ui.png'});
data.push({title: "Bla3",hasDetail: true});
*/
var w = Ti.UI.createWindow({
	orientationModes: [
	        Titanium.UI.LANDSCAPE_LEFT,
	        Titanium.UI.LANDSCAPE_RIGHT,
	        Titanium.UI.PORTRAIT
	    	]
});
var t = Ti.UI.createTableView();

for(var i = 0; i < 10; i++){
	var row = Ti.UI.createTableViewRow({
		_id: 'pippo_'+i
	});
	
	var viewBox = Ti.UI.createView({
		layout: 'horizontal',
		width: Ti.UI.SIZE,
		height: Ti.UI.SIZE,
		left:0
	});
	
	var imageLeft = Ti.UI.createImageView({
		image: "/images/KS_nav_ui.png",
		width: Ti.UI.SIZE,
		height: Ti.UI.SIZE
	});
	
	var viewMain = Ti.UI.createView({
		layout: 'vertical',
		backgroundColor: "#ccc",
		width: Ti.UI.SIZE	,
		height: Ti.UI.SIZE
	}); 
	
	var lebelTitle = Ti.UI.createLabel({
		text : 'demoLabel '+i,
		color : 'red',
		font : {fontSize:18},
		textAlign : 'center',
		left: 0,
		top: 0
	});
	
	var lebelSubtitle = Ti.UI.createLabel({
		text : 'subtitle '+i,
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
	
	
	data.push(row);
}

t.setData(data);

// listener
t.addEventListener('click', function(e){
	var id = e.rowData._id;
	
	var detail = Ti.UI.createWindow({
		backgroundColor: "green"
	});
	var l = Ti.UI.createLabel({
		top: 10,
		text: id
	});
	var bClose = Ti.UI.createButton({
		bottom: 0,
		title: "Close"
	})
	bClose.addEventListener('click', function(){detail.close()});
	
	detail.add(bClose);
	detail.add(l);
	detail.open();
});

w.add(t);
w.open();

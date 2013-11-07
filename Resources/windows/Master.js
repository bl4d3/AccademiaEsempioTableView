function Master(){
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
		var RowCustom = require('/components/RowCustom');
		var row = new RowCustom({
			i: i,
			title: 'title ' + i,
			subtitle: 'subtitle ' + i,
			image_url: 'https://addons.opera.com/media/extensions/65/13665/5.0.0-rev1/icons/icon_64x64.png'		
		}); 	
		data.push(row);
	}
	
	t.setData(data);
	
	// listener
	t.addEventListener('click', function(e){
		var Detail = require('/windows/Detail');
		var detail = new Detail({
			id: e.rowData._id
		});
		detail.open();
	});
	
	w.add(t);
	return w;

};

module.exports = Master;

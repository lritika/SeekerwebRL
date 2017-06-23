//datastore.js

app.ds = {};
app.ds.data = [];

//functions
fn.ds = {};

fn.ds.addData = function(username, password) {
	var data = {};
	data.username = username;
	data.password = password;
	app.ds.data.push(data);
};


fn.ds.checkData = function(username, password) {	//no optimizations
	for(var i = 0; i < app.ds.data.length; i++)	{
		if(app.ds.data[i].username == username) {
			if(app.ds.data[i].password == password) {
				return true;
			}
		}
	}
	return false;
}
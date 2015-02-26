var React=require('react');
var Reflux=require("reflux");
var actions=require("./action_name");

var TaskClear=React.createClass({
	onClear:function(name) {
    	console.log('onClear')
		actions.clearDone();
    },
	render:function(){
		return <button onClick={this.onClear}>Clear Done</button>
	}
})
module.exports=TaskClear;
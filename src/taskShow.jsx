var React=require('react');
var Reflux=require("reflux");
var actions=require("./action_name");

var TaskShow=React.createClass({
	onShow:function(name) {
		actions.showAll();
    },
	render:function(){
		return <button onClick={this.onShow}>Show All</button>
	}
})
module.exports=TaskShow;
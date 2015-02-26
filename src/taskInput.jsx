var React=require('react');
var actions=require("./action_name");

var TaskInput=React.createClass({
	add:function(e) {
    	actions.addToDoItem(this.refs.todoitem.getDOMNode().value);
    	this.refs.todoitem.getDOMNode().value='';
    }
	,render:function(){
		return <div>
    		<input ref="todoitem" /><button onClick={this.add}>Add</button>
    	</div>
	}
})
module.exports=TaskInput;
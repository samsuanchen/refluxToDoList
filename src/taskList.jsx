var React=require('react');
var Reflux=require("reflux");
var actions=require("./action_name");
var store=require("./store_name");
var TodoItem=React.createClass({
	onToggle:function(e) {
    	actions.toggleDone(this.props.idx);
    },
    render:function() {
    	if (this.props.data.hide) return <span></span>
		var cls="";
		if(this.props.data.done) cls="done";
		return (<div onClick={this.onToggle} className={cls}>{this.props.data.item}
		</div>);
	}
});
var Tasklist=React.createClass({
	getInitialState:function(){
		return {todos:[]}
	}
    ,onStore:function(todos) {
      this.setState({todos:todos});
    }
    ,mixins: [Reflux.listenTo(store,"onStore")]	
    ,renderItem:function(item,idx) {
    	return <TodoItem data={item} idx={idx} />
    }
    ,render:function(){
		return <div>{this.state.todos.map(this.renderItem)}</div>
	}
})
module.exports=Tasklist;
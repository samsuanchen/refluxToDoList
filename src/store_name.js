var Reflux=require("reflux");
var actions=require("./action_name");

var store=Reflux.createStore({
	listenables: actions,
	todos: [],
	onAddToDoItem:function(toDoItem){
		// if "add" button clicked, add the toDoItem into toDoList
		if(!toDoItem) return;
		this.todos.push({item:toDoItem,done:false,hide:false});
		this.trigger(this.todos);
	},
	onToggleDone:function(idx){
		// if "del i" button clicked, delete the i-th item from toDoList
		//this.todos.splice(idx,1);
		this.todos[idx].done=!this.todos[idx].done;
		this.trigger(this.todos);
	},
	onClearDone:function(){
		// // if "del all" button clicked, delete the all items from toDoList
		this.todos.forEach(function(item){
			if(item.done)item.hide=true;
		});
		this.trigger(this.todos);
	},
	onShowAll:function(){
		// // if "del all" button clicked, delete the all items from toDoList
		this.todos.forEach(function(item){
			if(item.done)item.hide=false;
		});
		this.trigger(this.todos);
	}
});

module.exports=store;
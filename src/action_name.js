var Reflux=require("reflux");

var actions=Reflux.createActions([
	"toggleDone",
	"clearDone",
	"showAll",
	"addToDoItem"
]);
module.exports=actions;
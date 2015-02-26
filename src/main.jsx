var React=require("react");

var TaskInput=require("./taskInput.jsx");
var TaskList=require("./taskList.jsx");
var TaskClear=require("./taskClear.jsx");
var TaskShow=require("./taskShow.jsx");

var maincomponent = React.createClass({
  render: function() {
    return <div>To Do List
      <TaskInput />
      <TaskList />
      <TaskClear />
      <TaskShow />
    </div>;
  }
});
module.exports=maincomponent;
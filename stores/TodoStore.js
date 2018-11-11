import $ from "jquery";
import partial from "lodash/partial";

export default function TodoStore(dataService, userStore){
    "use strict";
    let todos = [];
    let eventEmitter = $.Callbacks();
    
    function fetch() {
      return dataService.get().then(setLocalTodos);
    }

    function setLocalTodos(newTodos){
      todos = newTodos;
      eventEmitter.fire();
    }
    
    function toViewModel(todo){
      return Object.freeze({
        id : todo.id,
        title : todo.title,
        userName : userStore.getById(todo.userId).name
      });
    }
    
    function descById(todo1, todo2){
      return parseInt(todo2.id) - parseInt(todo1.id);
    }

    function queryContainsTodo(query, todo){
      if(query && query.text){
        return todo.title.includes(query.text);
      }
      return true;
    } 
    
    function getBy(query) {
      let top = 25;
      let byQuery = partial(queryContainsTodo, query);
      return todos.filter(byQuery)
                  .map(toViewModel)
                  .sort(descById).slice(0, top);
    }
    
    return Object.freeze({ 
      fetch,
      getBy,
      onChange : eventEmitter.add
    });
 }
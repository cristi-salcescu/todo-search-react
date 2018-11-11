import React from "react";
import ReactDOM from 'react-dom';
import TodoDataService from "./dataaccess/TodoDataService";
import UserDataService from "./dataaccess/UserDataService";
import TodoStore from "./stores/TodoStore";
import UserStore from "./stores/UserStore";
import TodoContainer from "./components/TodoContainer.jsx";

(function startApplication(){
    "use strict";

    let userDataService = UserDataService();
    let todoDataService = TodoDataService();
    let userStore = UserStore(userDataService);
    let todoStore = TodoStore(todoDataService, userStore);
    
    let stores = {
      todoStore,
      userStore
    };
  
    function loadStaticData(){
      return Promise.all([userStore.fetch()]);
    }
	
    function mountPage(){		
      ReactDOM.render(
        <TodoContainer stores={stores} />,
        document.getElementById('root'));
    }

    loadStaticData().then(mountPage);
})();
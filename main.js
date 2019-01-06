import React from "react";
import ReactDOM from 'react-dom';
import TodoGateway from "./gateways/TodoGateway";
import UserGateway from "./gateways/UserGateway";
import TodoStore from "./stores/TodoStore";
import UserStore from "./stores/UserStore";
import TodoContainer from "./components/TodoContainer.jsx";

(function startApplication(){
    const userGateway = UserGateway();
    const todoGateway = TodoGateway();
    const userStore = UserStore(userGateway);
    const todoStore = TodoStore(todoGateway, userStore);
    
    const stores = {
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
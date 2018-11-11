export default function UserStore(dataService){
    "use strict"; 
    let usersMap = [];
    
    let eventEmitter = $.Callbacks();
    
    function fetch() {
      return dataService.get().then(setLocalUsers);
    }

    function setLocalUsers(newUsers){
      usersMap = createMapFrom(newUsers);
      eventEmitter.fire();
    }

    function getById(id){
      return usersMap[id];
    }

    function asMapById(map, value){
      map[value.id] = value;
      return map;
    }

    function createMapFrom(list){
        return list.reduce(asMapById, Object.create(null));
    }
    
    return Object.freeze({ 
      fetch,
      getById,
      onChange : eventEmitter.add
    });
}
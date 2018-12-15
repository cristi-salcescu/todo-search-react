export default function TodoDataService(){
    const url = "https://jsonplaceholder.typicode.com/todos";
    
    function toJson(response){
      return response.json();
    }
    
    function get() {
      return fetch(url).then(toJson);
    }
    
    function add(todo) {
      return fetch(url, {
        method: "POST",
        body: JSON.stringify(todo),
      }).then(toJson);
    }
    
    return  Object.freeze({
      get,
      add
    });
  }
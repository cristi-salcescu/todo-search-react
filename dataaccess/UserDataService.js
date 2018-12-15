export default function UserDataService(){
  const url = "https://jsonplaceholder.typicode.com/users";

  function get() {
    return fetch(url).then(toJson);
  }
  
  function toJson(response){
    return response.json();
  }
  
  return  Object.freeze({
      get
  });
}
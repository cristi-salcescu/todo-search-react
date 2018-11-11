import TodoStore from "../stores/TodoStore";

test("TodoStore can filter by title text", function() {
    //arrage
    let allTodos = [
        { id: 1, title : "title 1" },
        { id: 2, title : "title 2" },
        { id: 3, title : "title 3" }
    ];
    let todoDataService = {
        get : function(){
            return Promise.resolve(allTodos);
        }
    };
    let userStore = {
        getById : function(){
            return  {
                name : "Test"
            };
        }
    };
    let todoStore = TodoStore(todoDataService, userStore);
    let query = { text: "title 1" };
    let expectedOutputTodos = [
        { id: 1, title : "title 1" , userName : "Test"}
    ];

    //act
    todoStore.fetch().then(function makeAssertions(){
        //assert
        expect(expectedOutputTodos).toEqual(todoStore.getBy(query));
    });
});
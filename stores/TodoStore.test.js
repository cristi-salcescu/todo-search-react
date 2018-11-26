import TodoStore from "../stores/TodoStore";

test("TodoStore can filter by title text", function() {
    //arrage
    const allTodos = [
        { id: 1, title : "title 1" },
        { id: 2, title : "title 2" },
        { id: 3, title : "title 3" }
    ];
    const todoDataService = {
        get : function(){
            return Promise.resolve(allTodos);
        }
    };
    const userStore = {
        getById : function(){
            return  {
                name : "Test"
            };
        }
    };
    const todoStore = TodoStore(todoDataService, userStore);
    const query = { text: "title 1" };
    const expectedOutputTodos = [
        { id: 1, title : "title 1" , userName : "Test"}
    ];

    //act
    todoStore.fetch().then(function makeAssertions(){
        //assert
        expect(expectedOutputTodos).toEqual(todoStore.getBy(query));
    });
});
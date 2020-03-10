var AngularHomepage = function () {

  // Entire page
  var page;

  // These reference items which will not change after page-load
  var nameInput;
  var greeting;
  var todoListNewTodoText;
  var todoListNewTodoAdd;

  // These are used to retrieve lists of items which will dynamically change.
  var todoListItemSelector;
  var todoListItemDoneSelector;

  this.get = async function () {
    // We expect the baseUrl to be set appropriately
    page = await browser.get();
    // These reference items which will not change after page-load
    nameInput = element(by.model('yourName'));
    greeting = element(by.binding('yourName'));
    todoListNewTodoText = element(by.model('todoList.todoText'));
    todoListNewTodoAdd = element(by.css('[value="add"]'));

    // These are used to retrieve lists of items which will dynamically change.
    todoListItemSelector = by.repeater('todoList.todoText');
    todoListItemDoneSelector = by.css('.done-true');

  };

  this.setName = async function(name) {
    await nameInput.sendKeys(name);
  };

  this.getGreetingText = function() {
    return greeting.getText();
  };

  // Not async, returns the element
  this.getGreeting = function() {
    return greeting;
  };

  this.setNewTodoText = function (text) {
    todoListNewTodoText.sendKeys(text);
  }

  this.addNetTodoTextToTodoList = function () {
    todoListNewTodoAdd.click()
  } 

  this.getAllTodoListItems = function () {
    return element.all(todoListItemSelector);
  }

  this.getTodoItem = function (index) {
    var todoListItems = getAllTodoListItems();

    // Can click to set as done
    todoListItems[index]
  }

  this.getDoneTodoListItems = function () {
    return element.all(todoListItemDoneSelector);
  }
};
module.exports = new AngularHomepage();

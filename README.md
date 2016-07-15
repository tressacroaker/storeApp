<img src="http://montanacodeschool.com/wp-content/uploads/2015/06/MCS_LOGO_v1.png" width="200" align="right"/>

##Store App

##Purpose
The purpose of this day project is to learn how to use Angular directives and to continue the practice  of developing Angular apps.

##Directions
Fork and clone this repository. Complete all of the following steps. When you have finished, push your code into GitHub.

* Review the code that is already built in your folder. I have setup the backend server and database for you. Don't forget to do an npm install and run mongod.

* Setup the basic structure of your Angular app. Be sure to include the index.html, app.js, mainCtrl.js, and mainServ.js. Let's also create some ui-routes. Be sure to create all of the template files as well.

* Now that everything is set up, let's consider what is needed for an e-commerce store app. We need a place to display items to sell, let's call them widgets. There may be many types of widgets, so in our different views, show let's show a couple of different types of widgets. Also, we need a way to takes those widgets and put them into a shopping cart. This cart will hold these widgets until the user purchases them. If you're daring, you may also setup a login process so that you have your own personal shopping cart.

* In each of your widget selling views, let's display some information regarding each item. Include things like name, image, and cost. Note that in every one of these views, we are using pretty much the same code. This would be a perfect opportunity to use a directive.

* Go ahead and create a directive that uses an html template that you can repeat over and over again. You will need to start off the file similarly to when you use controllers and services. Use the angular.module with the app name and string the directive method onto the angular.module. Include the directive name and a callback function as its arguments. In the callback function return an object with a templateUrl and restrict keys. It should look something like this.

```
angular.module("storeApp")
.directive("itemsList", function(){
  return {
    templateUrl: './../templates/itemsList.html',
    restrict: 'AE'
  };
});
```
* Now, you will be able to replace all of that excessive code with `<items-list></items-list>`. Let's take it one step further. Let's add a controller that determines what items are showed on each view. Inside the controller, include the injectable $state alongside your $scope. Using some logic, let's run through the array of items, which have a specific type, and if the $state.current.name is equal to the type, then push to the $scope.items array to display only a specific type of item on each page.

* So now, when you navigate across each page, you should only see the things that belong on that page.

* Now let's create another directive that represents a button, that, on click, adds the item to a shopping cart. And when you are done, create a view that shows all of the items in your shopping cart.

* Alright, we made some directives. Keep going. Make this app what you want it to be. Go ahead and learn more about all of the other cool features of using custom directives by going to the [Angular Docs](https://docs.angularjs.org/api).

##Continued Practice

If you have more time, style your app or add some new functionality like creating a login. Use this link to [Angular Docs](https://docs.angularjs.org/api) for more infomation.

##Copyright

(c) Montana Code School, 2016.

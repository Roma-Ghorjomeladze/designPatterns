# Design Patterns In Node.JS

## Singleton pattern
    - Signletons are an objects that have single instance with a single point of access.
    - Node.JS module system provides a basic framework for implementing a rudimentary singleton.
### Rudimentary Singleton example in Node.JS
Modules are cached when they are called with require statement. So this means that if we have one module that is called two or more times in one or more separate files, the one instance will be created, cached and used in each file.

**__Example 1__**  
- Check the `Singleton_Object/App.js` file, there is three usage of `CacheRegister.js` module but all changes are made on the same instance.

**__Example 2__**  
- Check the `Singleton_Class/Scoreboard.js` file. Whenever we need to use a module which should be same in different files, we can export from class file not whole class but an instance of the class. In this case that class instance will be cached and used in different places.

### Warning
Different OSs are behaving differently when exporting classes. If the words are same in require statement but the case of the letters is different, those two requires will cause to have two different instances of module.  
`const Scores = require('./Scoreboard');`  
`const Scores = require('./SCOREBOARD');`  
Those two imports will create two different instances of Scoreboard module.

## Factory pattern
### Description ###  
Factory pattern provides one main class which requires a lot of parameters to be passed to create a valid instance. Whenever we need a lot of same kind of instances, it's a bit difficult to provide all parameters for each instances. The solution is Factory pattern. instead of instantiation of generic class, you can create a specific class which will get one or two parameters and the rest of the parameters will be hardcoded inside that instance.  
**__Example 1__**  
- Check the `Factory/Phone.js` and `Factory/iPhoneXR.js` files, Phone class requires a lot's of parameters and it's a bit difficult to provide all parameters every time we'll need specific model with just different serial number. In this case we can create specific class for example `iPhoneXR` which will get just serial number as parameter and the rest of the parameters will be hardcoded in this class. So we will create iphoneXRs easily.

**Abstract Factory pattern**  
If we need three different phones to produce, we can create an abstract class and manage everything there according to the type parameter passed to the factory class. in this case the main logic will be placed in factory class and the file where we will have usage of this factory class will be cleaner. This is called as **Abstract Factory Pattern**

**__Example 2__**  
- check the `Factory/iPhoneFactory.js` file, it's the abstract factory class which accepts two parameters type and serial number, according to the type parameter factory class can create different models of iphone fone. in another files we can use factory class instead of iPhoneXR or iPhoneXs clases.

## Builder pattern
### Description ###  
If we have a class which accepts a lots of parameters, create a builder class for it, we add several setters (those setters should return this) in builder class and we will be able to build the instance with chaining several set methods. In this way we will avoid providing unnecessary parameters to the main class, we will call the setters that we need for the instance.

**__Example 1__**  
- Check the `Builder/Signup/SignupBuilder.js` and `Builder/Signup/App.js` files, SignupBuilder class requires just three parameters to have an instance of it, after we can call needed setters to set specific properties to our instance and at the end we should call the create method which will create an instance of Signup and return to us.

## Control Flow Patterns ##

### Callback pattern
#### Description #### 

- Callback pattern is default pattern for Node.JS. Whenever async operations are running, we can pass a callback to that operation and after completion, the process will call the callback with the result.
- The first argument of the callback should be error and the second one should be result
- **Warning** Sometimes using many callbacks are causing callback hell.

### Promises
- Promise has three states pending, fulfiled and rejected.
### Asyn/Await
- async/await is making code to stop on specific place until asyncronous operation is not finished, so the code is working like it were syncronous.
### Generators
- TO LEARN

## Revealing Module pattern
### Description ### 
- In Node.JS we don't have public and private concepts. If we need to make something not discoverable in the module, we can simply not export it from module.
- Whenever we are working with classes and we need a property in class that should store some private values, we can create the array outside of the class and that array won't be accessible directly.

## Dependency injection
### Description ### 
- Dependency injection is the technic. If you have a service which is used in a lot of places in project, you can create separate module that provides consistant interface and all needed methods. If the business needes will change and you will need to change the service, you  will make changes just in service module. on the other hand you will need to change the service at all, you will create a separate service with same interface and you can replace the old one easily.

## Structural Design Patterns
## Proxy pattern
### Description ### 
- Proxy pattern means restricting direct access on data (object, array, variable). You just can access the data through the proxy and in the proxy you might have some business logic for accessing and modifying specific parts of the data.
- Common usages:
    - Caching
    - Logging
    - Encription
  
## Adapter pattern
### Description ### 
- If there is a service which is used for storing in db, we can create adapter which will have fixed interface, after if we will need to change the service, we can create a new adapter for new service and it'll be used instead of an old adapter. So the change of the service won't be painfull process. 
- When following adapter pattern, change of the service can be acomplished by creating just a new adapter, without any further changes in code (or minimal changes in code).

## Decorator pattern
### Description ### 
- Decorators are extending functionality of already declared functions. Mainly decorator is a function which is returning another function (like Higher order components in React). Untill decorator function returns the main function, it's adding some extra logic to it.
- @Decorator is the keyword which will be added for creating decorators in the future. In project it's possible to have a compiler like babel and create a class which will be decorated with @decorator simbol, at build time it'll be compiled as general higher order function.

## Strategy pattern
### Description ### 
- Strategy pattern is pattern where you have a service which can be plugged without any changes in code. For example you can have different caching strategies like redis, memcache, mongoDB. You can plug specific driver to be used as cache driver with strategy pattern without any change in code, you will just need to pass correct credentials to each cache driver.

## Command pattern
### Description ### 
- In Command pattern there is one parent class which provides just the structure that should be implemented in child classes. We also have one invoker class which is getting instance of command class, saving info about the last excecuted commands and excecuting the command itself. In this way it's possible to implement undo easily in invoker. see the example in `BehavioralPatterns/Command/app.js`. 

## Observer pattern
### Description ### 
- Observer pattern involves observable object and multiple observables (listeners). It's possible to emit an event and pass the data to that event, in every place where listeners are declared fot that specific event, a callback will be executed with the parameters that were passed during emit time.
- Observers can be implemented with EventEmitter interface in Node.JS.
- Hint: in express it might be a good approach to have socket server and manage socket calls with events. You can emit different events in you code and listen to those events in socket part, you won't need to pass io as parameter to your router to send socket message to client. 

## Middleware pattern
### Description ### 
- Middleware pattern allows us to modify or augment incoming data before it reachs the target function.
- Middleware is between the call and execution of target function. It was made popular in Express.JS

## Template pattern
### Description ### 
- In template pattern we have abstract class which calls method that isn't declared in it. That method will be declared in child class which extends that abstract class. An example can be viewed in `BehavioralPatterns/Template/app.js`.
- Template pattern allows developer to easily create reusable code.


## Behavioral Design Patterns ##  

## Request Reply pattern
### Description ### 
- The Request-Reply pattern in one way messaging pattern. 
- Requestor sends the request to server, server responds with reply.
- This method includes usage of unique correlation id in every request. It is used to correlate request and replay.

## Publisher subscriber pattern
### Description ### 
- Publisher subscriber pattern involves the clients that are listening to the events, also server, which is sending the events and there might be the service like redis or RabitMQ which is used to publish the actions. This pattern is behaving like observer pattern because as in observer pattern, in Publish Subscribe pattern we have clients that are listening to the events and server which is submitting events.
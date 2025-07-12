Observable is a stream of data thats whenever we pass data that will be handled in sequential manner and all are emitted to its subscribers.
Observables useful when handling asynchronous data like HTTP calls, setTimeout, setIntrevals.
Observables can be used to transform data before reaching its subscribers. Observables are generated from rxjs library. Here 'n' number of subscribers can be listened thats called subscription. We can listen as well as detach the subscription using unsubscibe. When HTPP calls triggers an error then the observable has callback method called error to listen to errors. When we unsubscribe then observable calls the complete callback function. Once going to complete state then it will not listen to subscriber.
Observable will listen to events and that events when triggers these obserables , it will emit some amount of data to the subscribers and there will be n number of subscribers. To each subscribers the data is passed.
To emit data in observable we use next. To recieve the data that the observable has emitted using subscibe.
But in Promise we get a plain data in subscribers and on resolve the data is changed.





Observable vs Promise

Observables and Promises are both used for handling asynchronous operations in JavaScript, but they differ in how they handle data and when they are useful. Promises are designed for single, one-time asynchronous operations, while Observables are designed for handling multiple asynchronous events over time, essentially representing a stream of data. 

Key Differences: 
Single vs. Multiple Values:
Promises resolve with a single value, either successfully or with an error, after an asynchronous operation completes. Observables, on the other hand, can emit multiple values over time, representing a stream of data. 
Eager vs. Lazy Execution:
Promises execute immediately when created, while observables are lazy. An observable only starts emitting values when it's subscribed to. 
Cancellation:
Promises cannot be cancelled once they are initiated. Observables, however, can be unsubscribed from, allowing you to cancel the ongoing operation and prevent further emissions. 
Operators:
Observables support a wide range of operators (provided by libraries like RxJS) that allow for complex data manipulation and transformations before or during subscription. Promises lack this built-in functionality. 
Use Cases:
Promises are suitable for scenarios where you need a single result from an asynchronous operation, like fetching data from an API or handling a single file upload. Observables are ideal for real-time data streams, user input handling, or any situation where you need to react to multiple asynchronous events over time. 

Observable is a stream of data thats whenever we pass data that will be handled in sequential manner and all are emitted to its subscribers.
Observables useful when handling asynchronous data like HTTP calls, setTimeout, setIntrevals.
Observables can be used to transform data before reaching its subscribers. Observables are generated from rxjs library. Here 'n' number of subscribers can be listened thats called subscription. We can listen as well as detach the subscription using unsubscibe. When HTPP calls triggers an error then the observable has callback method called error to listen to errors. When we unsubscribe then observable calls the complete callback function. Once going to complete state then it will not listen to subscriber.
Observable will listen to events and that events when triggers these obserables , it will emit some amount of data to the subscribers and there will be n number of subscribers. To each subscribers the data is passed.
To emit data in observable we use next. To recieve the data that the observable has emitted using subscibe.
But in Promise we get a plain data in subscribers and on resolve the data is changed.

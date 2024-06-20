import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'observable';
  sampleObservable = new  Observable((observer:any)=>{
    observer.next(10);
    observer.next(20);
   // observer.error("Something went wrong");
    observer.complete();
    observer.next(30);
  })
  constructor(){
   this.sampleObservable.subscribe((result:any)=>{
    console.log("Inside data block",result);
   },
  (error)=>{
   console.log("Inside error block", error);
  },
  ()=>{
    console.log("Completed");
  }
)   
  }
}

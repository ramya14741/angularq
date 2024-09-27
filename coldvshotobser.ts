import{Component} from '@angular/core'
import{of} from 'rxjs'
@Component({
    selector:'app-root',
    templateUrl:'./app-component.html',
    styleUrls:['./app.component.ts']
})

export class AppComponent{
    constructor(){
        const observable = new Observable((observer)=>{
            observer.next(Math.random())//this is called cold observable, value insider observable
            //values are not in sync . subscriber will get different value
        })

        observable.subscribe(res=>{console.log(res)});
        observable.subscribe(res=>{console.log(res)});
    }
    //we have to convert all our cold observable to hot in order to get the same value 
    //this can be done using 
    const random = Math.random();
    const hotobservable= new Observable((observer)=>{
observer.next(random);
    })

    hotobservable.subscribe(res=>{console.log(res)});
    hotobservable.subscribe(res=>{console.log(res)})// this return same value for all the subscribers
}
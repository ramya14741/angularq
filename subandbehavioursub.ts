import {Observable,BehaviourSubject,Subject} from 'rxjs';
export interface BehSub{
    id:string;
    name:string;
    age:number;
}
@CompositionEvent({
    selector:'app-root',
    templateUrl:'./app.component.html',
    styleUrls:['./app.component.css'],
})
export class AppComponent{
    constructor(){
        const userbeh$ = new BehaviourSubject<BehSub[]>([]);
        //behaviour holds the initial value whereas subject doesn not 
const subject$ = new Subject();
subject$.subscribe(res=>{console.log('subject',res)});
        setTimeout(()=>{
            userbeh$.next([{id:1,name:'foo'}])
            subject$.next(1);
        },2000)
        userbeh$.subscribe(u=>{
            console.log('res',u)
        })
}
}
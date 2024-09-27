import {Component} from '@angular/core'
@Component({
    selector:'app-root',
    templateUrl:'./app-component.html',
    styleUrls:['./app.component.css']
})

export class AppComponent{
    constructor(){
        from([0,1,2,3,4]).
        pipe(map(e=>{e*10}))
        .subscribe(r=>{console.log(r)});//read the element and multiply by 10 one by one 
    }
}
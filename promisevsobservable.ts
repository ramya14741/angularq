import {Component} from '@angular/core';
import {of} from 'rxjs';

@Component({
    selector:'app-root',
    templateUrl:'./app.component.html',
    styleUrls:['./app.component.css']
})

export class AppComponent{
    constructor(){
        const foo$ = of('1');
        foo$.subscribe(f=>console.log(f));
        foo$.toPromise().then(f=>console.log(f));//both returns same value 
    }
}
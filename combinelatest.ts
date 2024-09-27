import {combineLatest,of,interval} from 'rxjs';
@Component({
selector:'app-root',
templateUrl:'./app.component.html',
styleUrls:['./app.component.css']
})
export class AppComponent{
    constructor(){
        const foo$ = of('foo');
        const interval$ = interval(1000);//we are triggering new value for every millsecond
        const bar$ = of('bar');
        const buzz$ = of('buzz');
combineLatest([foo$,bar$,buzz$]).subscribe(res=>{
    console.log('res',res);//result is ['foo','bar','buzz']
})
    }
}
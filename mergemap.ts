export class AppComponent{
    constructor(){
        const example = (operator:any)=>()=>{
            from([1,2,3,4])
            .pipe(operator(x:any)=>of(x).pipe(delay(500))))
            .subscribe(
                console.log,
                ()=>{},
                ()=>console.log(`${operator.name} completed`)
            )
        }
        example(mergeMap)();//create observable for every value in the stream and resovles it 
        //result of merge map is 1,2,3,4
        example(flatMap)()//same like merge 
        example(concatMap)()//whiel printing 2, it waits for 1to get compelted. 
        //means concat wait for previous observable to get completed
        example(switchMap)()//result is 4 switch map compelted 
        //switch map cancels all the previous observables 
        example(exhaustMap())//resultis 0 and exhaust map compelted
        //ignore rest of the observable when one is run 
    }
}


//you get such UserInterface. Define a function normalizeUsers which gets a parametre users$ which
//is an observable of userInterface array and returns back an array of names as an observable 
//how rxjs map differs from javascript map
import {Observable,of} from 'rxjs';
import {map,catchError} from 'rxjs/operators';

export interface UserInterface{
    name:string,
    id:string,
    age:number,
    isActive
}
//pipe simpler function to combine lot of functions which we call one by one 
//result of first function goes to the second function one by one like that 
const normalizeUsers=(users$:Observable<UserInterface[]>):Observable<string[]>=>{
 return users$.pipe(map((users)=>users.map((user)=>user.name)));
 //we are getting whole value inside the stream 

}

//2. how filter works in rxjs . how it differs from rxjs 

//of helper function from rxjs to generate streams of data 

const usingFunction =(users$:Observable<UserInterface[]>):Observable<UserInterface[]>{
    return users$.pipe((filter(users=>users.every(u=>u.isActive
    ))))
}

const users$:Observable<UserInterface[]> = of([{id:1,name:'ramya',age:30,isActive:true}])
usingFunction(users$).subscribe(activeUsers=>{
    console.log(activeUsers)
});

/* using function is not having catchError block 
to handle any error occurs during subscribe, we have to use like below */
const users$:Observable<UserInterface[]>=of([{id:'1',name:'ramya',age:30,isActive:true}])
usingFunction(users$).subscribe({next:(res)=>{
    console.log(res);
},
error:(err)=>{
    console.log(err);
},
complete:()=>{
    console.log('complete')//if haivng an error or no error, this will come to the complete
}
})

/*3. create an observable and add an error handling to it. how will you write 
subscribe to be ready for an error */

export interface UserInterface{
    id:string;
    name:string;
    age:number;

}

const errorObservable =(usersa$:Observable<UserInterface[]>):Observable<String[]>=>{
    return usersa$.pipe((map((users)=>users.map(u=>u.name))),catchError((err)=>{
        console.log(err);
        return of([])//to create a stream as the return type is observable
    })
)
}
//to subscribe
const usersa$:Observable<UserInterface[]>=of([{id:'1',name:'ramya',age:21}]);
const res = errorObservable(usersa$).subscribe(r=>{
    console.log(r);
})

/* 4.what is combinelatest operator in rxjs. can you write an example */
/*5.how does subject and behaviour subject work in rxjs*/
/* what is behaviour subject, what is the most common use case of behaviour subject in angualr,
how it differs from subject*/






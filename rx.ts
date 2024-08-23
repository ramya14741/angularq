//you get such UserInterface. Define a function normalizeUsers which gets a parametre users$ which
//is an observable of userInterface array and returns back an array of names as an observable 
//how rxjs map differs from javascript map
import {Observable} from 'rxjs';
export interface UserInterface{
    name:string,
    id:string,
    age:number,
    isActive
}
//pipe simpler function to combine lot of functions which we call one by one 
//result of first function goes to the second function one by one like that 
const normalizeUsers=(users$:Observable<UserInterface[]>):Observable<string[]>=>{
 return users$.pipe(map((users)=>users.map((user)=>user.name)));//we are getting whole value inside the stream 

}

//2. how filter works in rxjs . how it differs from rxjs 

//of helper function from rxjs to generate streams of data 

const usingFunction =(users$:Observable<UserInterface[]>):Observable<UserInterface[]>{
    return users$.pipe(filter(users=>users.every(u=>u.isActive
    )))
}

const users$:Observable<UserInterface[]> = of([{id:1,name:'ramya',age:30,isActive:true}])
usingFunction(users$).subscribe(activeUsers=>{
    console.log(activeUsers)
});


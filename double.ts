const function =(users$:Observable<interface[]>):Observable<string[]>=>{
    return users$.pipe(map(users=>(user.map=>(u.name))))
}
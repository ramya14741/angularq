const check = (users$:Observable<userInterface>):Observable<UserInterface>=>{
    return users$.pipe((map(users)=>{
        user.map(u=>{u.name})
    }))
}
import {v4 as uuidv4} from 'uuid';


let users=[];

export const getUsers=(req,res)=>{
    res.send(users);
    console.log("All users",users)

}

export const getUserById =(req,res)=>{
    const { id } = req.params;
    const foundUser=users.find((user)=>user.id===id);

    res.send(foundUser)
}

export const createUser =(req,res)=>{
    console.log("Post Route Reached");
    console.log(req.body);
    const user=req.body;

    const userId=uuidv4();
    const userwithID ={...user,id:userId};
    users.push(userwithID);
    res.send(`USer with firstname ${user.fname} is added`);
}

export const deleteUserById =(req,res)=>{
    const { id }  = req.params;

    console.log(id);
    const index = users.findIndex(item => item.id === id);
    if (index !== -1) {
        users.splice(index, 1);
        res.send(`Item with id ${id} has been deleted.`);
    } else {
        res.send(`Item with id ${id} not found.`);
    }    
}

export const updateUserById =(req,res)=>{
    const {id} = req.params;
    const {fname,lname,age}=req.body;
    const user=users.find((user)=>user.id===id);

    if(fname)user.fname=fname;    
    if(lname)user.lname=lname;
    if(age)user.age=age;
    
    res.send(`User with the id ${id} has been updated`);

    

}
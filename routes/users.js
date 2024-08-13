import express from 'express';
import {v4 as uuidv4} from 'uuid';
import { createUser,getUsers,getUserById,deleteUserById,updateUserById } from './Controllers/users.js';
uuidv4();

const router =express.Router();

let users=[];

//All routes from users are starting with /users
router.get('/',getUsers);

// For adding new users
router.post('/',createUser)

// /users/2 =>req.params {id:2}
// 
router.get('/:id',getUserById)

// For deleting user

router.delete('/:id',deleteUserById)


// Patch to update User=> to partially change in object
// Put to update data completely not partially

router.patch('/:id',updateUserById)
export default router;
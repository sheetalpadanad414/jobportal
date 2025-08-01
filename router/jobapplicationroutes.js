import express from 'express'

const router=express.Router();
import {applyjob, deleteapplication, getapplicationofparticularjob, getapplicationsoflogineduser, updateapplication} from '../controller/jobapplicationcontroller.js';


router.post('/apply/:jobid/:userid',applyjob);
router.get('/applications/:userid',getapplicationsoflogineduser);
router.get('/applicationsbyjobid/:jobid',getapplicationofparticularjob);
router.put('/applications/:id',updateapplication);
router.delete('/applications/:id',deleteapplication);
export default router
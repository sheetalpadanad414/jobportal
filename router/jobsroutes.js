
import express from "express";
import {getalljobs, getjobbyid, postjob, updatejob,deletejob} from '../controller/jobscontroller.js'
const router=express.Router();

//routes
router.post('/jobs/:adminid',postjob);
router.get('/jobs',getalljobs);
router.get('/jobs/:id',getjobbyid);
router.delete('/jobs/:id/:adminid',deletejob);
router.put('/jobs/:id/:adminid',updatejob);
export default router

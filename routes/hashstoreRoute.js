import express from "express";
import {
    getAllHash,
    getNotVerified,
    updateVerified,
    getByContractAddr
} from '../controllers/hashStore.js'

const router = express.Router()

/*================================================
Route for get all data objects of hashstores collection
================================================*/

router.get('/', getAllHash)


/*================================================
Route for get all data objects where 'verified' is equal to false
================================================*/

router.get('/notverified', getNotVerified)


/*================================================
Route for update verified filed to true where it is false
================================================*/

router.put('/setverified', updateVerified)


/*================================================
Route for get documents by contract address
================================================*/

router.get('/:address', getByContractAddr)

export default router
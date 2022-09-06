import HashStore from '../models/hashstore.js'


/*===================================================
this function use to get all data objects in the hashstore collection.
=====================================================*/

export const getAllHash = async (req, res) => {
    try {
        
        const hashs = await HashStore.find() //use find() methods to get every data object in the collection.

        res.status(200).json(hashs)

    } catch (error) {
        res.status(500).json(error.message)
    } 
    //we use try catch to catch the runtime errors. if we don't use try catch the server will down when runtime errors occur.
}


/*===================================================
this function use to get all data objects in the hashstore collection where 'verified' field equals to false
=====================================================*/

export const getNotVerified = async (req, res) => {
    try {
        
        const notVerifiedHashs = await HashStore.find({
            verified: false
        }) //we can pass parameters to find(). in this case we get hashes where verified equals to false. it's work like WHERE keyword in SQL.

        if(notVerifiedHashs.length === 0) {
            res.status(200).json('All documents are verified')
            return
        }

        res.status(200).json(notVerifiedHashs)

    } catch (error) {
        res.status(500).json(error.message)
    }
}


/*===================================================
this function use to update 'verified' filed to true where it is false.
=====================================================*/

export const updateVerified = async (req, res) => {
    try {
        
        const updatedHashs = await HashStore.updateMany(
            { verified: false },
            { verified: true }
        ) 
        // we can use updateMany() to update multiple documents at once. 
        //it takes two parameters 
        //1 is the condition. in this case we are updating only documents where verified field is flase.
        //2 is the new values. in this case we setting verified to true

        res.status(200).json("All documts are verified now!")

    } catch (error) {
        res.status(500).json(error.message)
    }
}


/*===================================================
this function use to get data objects by contranct address
=====================================================*/

export const getByContractAddr = async (req, res) => {

    const address = req.params.address

    try {
        
        const hashs = await HashStore.find(
            { contractAddress: address },
        ) 
        //we can also use find() here. we already discuss about that

        if(hashs.length === 0) {
            res.status(404).json(`Cannot find any records to match ${address}`)
            return
        }
        //check if there is no availble recoreds for contract addresss

        res.status(200).json(hashs)

    } catch (error) {
        res.status(500).json(error.message)
    }
}
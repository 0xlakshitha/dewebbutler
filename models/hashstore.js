import mongoose from "mongoose";

const hashSchema = new mongoose.Schema(
    {
        hash: String,
        tokenName: String,
        tokenSymbol: String,
        contractAddress: String,
        hash: String,
        deployer: String,
        pair: String,
        verified: Boolean,
        age: Number,
        status: String,
    }
)

const HashStore = mongoose.model("hashstore", hashSchema);

export default HashStore
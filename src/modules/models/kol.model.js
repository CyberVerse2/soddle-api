import mongoose from "mongoose"

const KolSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    pfp: {
        type: String,
        required: true,
    },
    accountCreation: {
        type: Number,
        required: true,
    },
    followers: {
        type: Number,
        required: true,
    },
    ecosystem: {
        type: String,
        required: true,
    },
})

const KOL = mongoose.model('KOL', KolSchema)

export default KOL

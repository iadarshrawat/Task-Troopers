import mongoose from 'mongoose';
const { Schema } = mongoose;

const GigSchema = new Schema({

    userId:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        require:true,
    },
    desc:{
        type:String,
        required:true
    },
    totalStars:{
        type:Number,
        default:0,
    },
    starNumber:{
        type:Number,
        default:0,
    },
    cat:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true
    },
    images:{
        type:[String],
        required:false,
    },
    cover:{
        type:String,
        required:true,
    },
    shortTitle:{
        type:String,
        required:true,
    },
    shortDesc:{
        type:String,
        require:true,
    },
    deliveryTime:{
        type:Number,
        required:true,
    },
    revisionNumber:{
        type:Number,
        required:true,
    },
    features:{
        type:[String],
        require:false,
    },
    sales:{
        type:Number,
        default:0,
    },

 
}, {
    timestamps:true
});

export default mongoose.model('Gig', GigSchema);
import mongoose from 'mongoose';
const { Schema } = mongoose;

const OrderSchema = new Schema({

   gigId:{
      type:String,
      required:true,
   },
   img:{
      type:String,
      required:false,
   },
   title:{
      type:String,
      required:false,
   },
   price:{
      type:Number,
      required:false,
   },
   sellerId:{
      type:String,
      required:false,
   },
   buyerId:{
      type:String,
      required:false,
   },
   isCompleted:{
      type:Boolean,
      default:false,
   },
   payment_intent:{
      type:String,
      required:false,
   },

 
}, {
    timestamps:true
});

export default mongoose.model('Order', OrderSchema);
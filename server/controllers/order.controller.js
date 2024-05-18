import Gig from "../models/gig.model.js"
import Order from '../models/order.model.js'

export const createOrder = async (req, res, next) => {
  try {

    const gig = await Gig.findById(req.params.gigId);
    const newOrder = new Order({
        gigId: gig._id,
        img: gig.cover,
        title: gig.title,
        buyerId: req.userId,
        sellerId: gig.userId,
        price: gig.price,
        payment_intent: "temporary",
    });

    await newOrder.save();
    res.status(200).send("Successfull");

  } catch (error) {
    next(error);
  }
};

export const getOrders = async (req, res, next)=>{
  try {
    const orders = await Order.find({
      ...(req.isSeller ? {sellerId:req.userId} : {buyerId: req.userId}),
      isCompleted: true,
    });

    res.status(200).send(orders);
  } catch (error) {
    next(error)
  }
}
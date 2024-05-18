import Conversation from "../models/conversation.model.js";

export const createConversation = async (req, res, next) => {

  const newConversation = new Conversation({
    id: req.isSeller ? req.userId + req.body.to : req.body.to + req.userId,
    sellerId: req.isSeller ? req.userId : req.body.to,
    buyerId: req.isSeller ? req.body.to : req.userId,
    readByBuyer: !req.isSeller,
    readBySeller: req.isSeller,
  })

  try {
    const saveConversation = await newConversation.save();
    res.status(201).send(saveConversation);
  } catch (error) {
    next(error);
  }
};

export const getConversation = async (req, res, next) => {
    try {
      const conversations = await Conversation.find(req.isSeller ? {sellerId: req.userId}:{buyerId:req.userId})
      req.status(200).send(conversations);
    } catch (error) {
      next(error);
    }
  };
  
  
export const getSingleConversation = async (req, res, next) => {
    try {
      const conversation = await Conversation.findOne({id: req.params.id})
      res.status(200).send(conversation)
    } catch (error) {
      next(error);
    }
  };
  
export const updateConversation = async (req, res, next) => {
    try {
      const updateConversation = await Conversation.findOneAndUpdate({id:req.params.id}, {
        $set: {
          readBySeller: req.isSeller,
          readByBuyer: !req.isSeller,
        },
      }, {new: true})

      res.status(200).send(updateConversation);

    } catch (error) {
      next(error);
    }
  };
  
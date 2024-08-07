const Book = require('../model/bookModel');

exports.SaveBook = async(req,res)=>{
    console.log(req.body);
    
     try {
        if(
            !req.body.title || !req.body.author || !req.body.publishYear
        ){
            return res.status(400).send({
                message:`send all requiure fields:title,author ,publishYear`,
            });
        }
        const newBook = {
            title:req.body.title,
            author:req.body.author,
            publishedYear:req.body.publishYear
        };
         const book = await Book.create(newBook);
         res.status(200).json({book});
        
     } catch (error) {
        console.log(error.message);
        res.status(500).send({message:error.message});
        
     }
}

exports.SeeBook = async(req,res)=>{
    try {
        const book = await Book.find();
        res.status(200).json({book});        
    } catch (error) {
        res.status(404).json({message:"not found"});
    }

}

exports.getOne = async(req,res)=>{
    try {
        const book = await Book.findById(req.params.id);
        res.status(200).json({message:"found successfully",book})
    } catch (error) {
        res.status(404).json({message:"not found"})
        console.log("not found successfully");
        
    }
}

exports.update = async(req,res)=>{
    try {
        const {title,author,publishedYear}=req.body;
        const up = await Book.updateOne({ _id: req.params.id },{title,author,publishedYear});
        res.status(200).json({message:"updated successfully",up})        
    } catch (error) {
       res.status(404).json({message:"not updated"})
    }
}

exports.updateone=async(req,res)=>{
    try{
    const {author}=req.body;
    const upo = await Book.findByIdAndUpdate({_id:req.params.id},{author});
    res.status(200).json({message:"updated one field successfully",upo})  
    }catch(error){
        res.status(404).json({message:"not updated"})
    }
}

exports.delete=async(req,res)=>{
    try {
        const del = await Book.findByIdAndDelete(req.params.id);
        res.status(200).json({message:"deleted successfully",del})
    } catch (error) {
        es.status(404).json({message:"not deleted"})
    }
}


const { query } = require("express")
const { getTourService, 
        createTourService, 
        updateTourByIdService,
        getTourByIdService
        
        } = require("../models/Services/tour.service")

exports.getTours=async(req,res,next)=>{
    try {

        //price:{$get:50}
          
        

    //   const filters={...req.query}
    //   //sort,page,limit->exclude
    //   const excludeFields=['sort','page','limit']
    //   excludeFields.forEach(field=> delete filters[field])
       
    //   let filterString=JSON.stringify(filters)
    //   filterString= filterString.replace(/\b(gt | gte | lt | lte)\b/g,match=>
    //                `$${match}`)
     
    //   filters=JSON.parse(filterString)
    //  const queries={}

    //   if(req.query.sort){
    //     //price, name -> 'name price'
    //     const sortBy=req.query.sort.split(',').join(' ')
    //      queries.sortBy=sortBy
    // }

    // if(req.query.field){
    //     const fields=req.query.fields.split(',').join(' ')
    //     queries.fields=fields
    // }

    // if(req.query.page){
    //     const {page=0,limit=10}=req.query
    //     const skip=(page-1)*parseInt(limit)
    //     queries.skip=skip
    //     queries.limit=parseInt(limit)
    // }
    //   const tour=await getTourService(filters,queries)
      const tour=await getTourService()
       res.status(200).json({
        status:'success',
        message:'Data inserted successfully',
        data:tour
    })

    } catch (error) {
        res.status(400).json({
            status:'fail',
            message:'Data not found',
            error:error.message
        
    })
    }
}

exports.createTour=async(req,res)=>{
    //save or create
    try {
         const result= await createTourService(req.body)
         result.logger()
        
        res.status(200).json({
        status:'success',
        message:'Data inserted successfully',
        data:result
    })
        
    } 
    catch (error) {
        res.status(400).json({
            status:'fail',
            message:'Data not inserted ',
            error:error.message
        
    })
    
 }
}

exports.getTourById=async(req,res)=>{
    
    try {
        const {id}=req.params
         const result= await getTourByIdService(id)
         
        
        res.status(200).json({
        status:'success',
        message:'Data found successfully',
        data:result
    })
        
    } 
    catch (error) {
        res.status(400).json({
            status:'fail',
            message:'Data not found ',
            error:error.message
        
    })
    
 }
}

exports.updateTourById=async(req,res,next)=>{
    //save or create
    try {
        const {id}=req.params
         const result= await updateTourByIdService(id,req.body)
         
        
        res.status(200).json({
        status:'success',
        message:'Data inserted successfully',
        data:result
    })
        
    } 
    catch (error) {
        res.status(400).json({
            status:'fail',
            message:'Data not update ',
            error:error.message
        
    })
    
 }
}


    
exports.getTourById=async(req,res,next)=>{
    //save or create
    try {
        const {id}=req.params
         const result= await getTourByIdService(id)
         
        
        res.status(200).json({
        status:'success',
        message:'Data found successfully',
        data:result
    })
        
    } 
    catch (error) {
        res.status(400).json({
            status:'fail',
            message:'Data not found ',
            error:error.message
        
    })
    
 }
}


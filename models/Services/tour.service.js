const tour=require('../tour.model')


exports.getTourService=async(filters,queries)=>{
    const tours=await tour
          .find({})
          .select(queries.fields)
          .sort(queries.sortBy)
          .skip(queries.skip)
          .limit(queries.limit)
          .select(queries.fields)
          .sort(queries.sortBy)
          const total=tour.countDocuments(filters)
          const page=Math.ceil(total/limit)
    return (total,page,tours)
}

exports.createtourService=async(data)=>{
    const tour=await tour.create(data)
    return tour
}
exports.updateTourByIdService=async(tourId,data)=>{
    // const result= await tour.updateOne({_id:tourId},{$set:req.body},{
    //     runValidators:true
    //     })

    const result= await tour.updateOne({_id:tourId},{$inc:data},{
        runValidators:true
        })

    // const tour= await tour.findById(tourId)
    // const result= await tour.set(data).save()
    return result
}

exports.bulkUpdateTourService=async(data)=>{
    
    // const result= await tour.updateMany({_id:data.ids},data.data,{
    //     runValidators:true
    //     })

    const tours= []
    data.ids.forEacch(tour=>{
       tours.push(tour.updateOne({_id:tour.id},tour.data))
    })
    const result= await Promise.all(tours)
    return result
}

exports.deleteTourByIdService=async(id)=>{
    const result= await tour.deleteOne({_id:id},{$inc:data})
    return result
}

exports.bulkDeleteTourService=async(ids)=>{
    
    const result= await tour.deleteMany({_id:ids},{
        runValidators:true
        })

    
    return result
}
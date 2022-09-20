const Tour=require('../tour.model')


exports.getTourService=async()=>{
    const tours=await Tour
          .find({})
    //       .select(queries.fields)
    //       .sort(queries.sortBy)
    //       .skip(queries.skip)
    //       .limit(queries.limit)
    //       .select(queries.fields)
    //       .sort(queries.sortBy)
    //       const total=Tour.countDocuments(filters)
    //       const page=Math.ceil(total/limit)
    // return (total,page,tours)
    return tours
}

exports.createTourService=async(data)=>{
    const tour=await Tour.create(data)
    return tour
}
exports.getTourByIdService=async(tourId)=>{
    const tours=await Tour.findOneAndUpdate({_id:tourId},{$inc:{view:1}},{new:true})
    return tours
}
exports.updateTourByIdService=async(tourId,data)=>{
    const result= await Tour.updateOne({_id:tourId},{$set:data},{
        runValidators:true
        })

    // const result= await Tour.updateOne({_id:tourId},{$inc:data},{
    //     runValidators:true
    //     })

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
       tours.push(Tour.updateOne({_id:tour.id},tour.data))
    })
    const result= await Promise.all(tours)
    return result
}

exports.deleteTourByIdService=async(id)=>{
    const result= await Tour.deleteOne({_id:id},{$inc:data})
    return result
}

exports.bulkDeleteTourService=async(ids)=>{
    
    const result= await Tour.deleteMany({_id:ids},{
        runValidators:true
        })

    
    return result
}
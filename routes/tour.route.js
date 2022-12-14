const express=require('express')
const router= express.Router()
const tourController=require('../controllers/tour.controller')



router.route('/')
.get(tourController.getTours)
.post(tourController.createTour)

router.route('/trending')
.get(tourController.getTopViewedTour)
router.route('/cheapest')
.get(tourController.getTopCheapestTour)

router.route("/:id")
.patch(tourController.updateTourById)
.get(tourController.getTourById)




module.exports=router
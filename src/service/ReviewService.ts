import { Review } from "../model/review"

type reviewRessource = {
    markerId: string,
    title: string,
    description: string,
    rating: number
}

export async function getReview(id:string) {
    const review = await Review.findById(id).exec();
    if(review == null){
        throw new Error("getReview failed No Review with this id");
    }
    return{
        id: review._id.toString(),
        markerid: review.markerId,
        title: review.title,
        desciption: review.description,
        rating: review.rating
    }
}

export async function createReview(reviewRessource:reviewRessource) {
    await Review.create(reviewRessource);
}

export async function getAllReviews(id: string) {
    const reviews = await  Review.find({markerId: id}).exec();
    const reviewsRes = [];
    for (const x of reviews){
        const review = {
            id: x._id.toString(),
            markerId: x.markerId,
            title: x.title,
            description: x.description,
            rating:x.rating
        };
        reviewsRes.push(review);
    }
    return reviewsRes;
}
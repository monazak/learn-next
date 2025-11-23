import { notFound } from "next/navigation"
export default async function page({
    params
}:{
    params: Promise <{productId:string, reviewId:string}>}
){
    const {productId, reviewId}=(await params)
    if (parseInt(reviewId) > 100){
        notFound()
    }
    return <>Review {reviewId} for product {productId}</>
}
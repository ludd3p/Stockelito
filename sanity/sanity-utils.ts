import { groq } from "next-sanity";
import { client } from "./lib/client";

export async function getNewsPosts () {
    return client.fetch(
        groq`*[_type == 'news'] | order(_updatedAt desc){
            _id,
            _createdAt,
            _updatedAt,
            newsTitle,
            newsText,
        }`
    )
}

export async function getBusiness () {
    return client.fetch(
        groq`*[_type == 'business'] | order(_updatedAt desc){
            _id,
            _createdAt,
            updatedAt,
            businessTicker,
            businessName,
            businessText,
        }`
    )
}
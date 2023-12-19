import { groq } from "next-sanity";
import { client } from "./lib/client";

export async function getNewsPosts () {
    return client.fetch(
        groq`*[_type == 'news']{
            _id,
            _createdAt,
            newsTitle,
            newsText,
        }`
    )
}
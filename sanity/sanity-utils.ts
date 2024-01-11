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
            "slug": slug.current,
            content
        }`
    )
}

export async function getNewsPost (slug: string) {
    return client.fetch(
        groq`*[_type == 'news'&& slug.current == '${slug}']{
            _id,
            _createdAt,
            _updatedAt,
            newsTitle,
            newsText,
            "slug": slug.current,
            content
        }[0]`
    )
}

export async function getBusinesses () {
    return client.fetch(
        groq`*[_type == 'business'] | order(_updatedAt desc){
            _id,
            _createdAt,
            updatedAt,
            businessTicker,
            businessName,
            businessText,
            "slug": slug.current,
            content
        }[0...14]`
    )
}

export async function getBusiness(slug: string) {
    return client.fetch(
        groq`*[_type == 'business' && slug.current == '${slug}'] {
            _id,
            _createdAt,
            updatedAt,
            businessTicker,
            businessName,
            businessText,
            "slug": slug.current,
            content
        }[0]`
    );
}

export async function getHoroscope() {
    return client.fetch(
        groq`*[_type == 'horoscope' ]| order(_updatedAt desc){
            _id,
            title,
            text,
            "image": image.asset->url,
        }[0]`
    )
}
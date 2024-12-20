import { groq } from "next-sanity";
import { client } from "./lib/client";

export async function getNewsPosts() {
    return client.fetch(
        groq`*[_type == 'news'] | order(_updatedAt desc){
            _id,
            _createdAt,
            _updatedAt,
            newsTitle,
            newsText,
            isFulfilled,
            "slug": slug.current,
            content,
            downVotes,
            upVotes
        }`
    )
}

export async function getNewsPost(slug: string) {
    return client.fetch(
        groq`*[_type == 'news'&& slug.current == '${slug}']{
            _id,
            _createdAt,
            _updatedAt,
            newsTitle,
            newsText,
            "slug": slug.current,
            content,
            downVotes,
            upVotes
        }[0]`
    )
}

export async function getRelatedNews(businessName: string) {
    return client.fetch(
        groq`*[_type == 'news'&& isRumor != true && business -> businessName == '${businessName}'] | order(_updatedAt desc){
            _id,
            _createdAt,
            _updatedAt,
            isFullfiled
            newsTitle,
            newsText,
            "slug": slug.current,
            content,
            downVotes,
            upVotes
        }`
    )
}

export async function getRumorPosts() {
    return client.fetch(
        groq`*[_type == 'news' && isRumor == true] | order(_updatedAt desc){
            _id,
            _createdAt,
            _updatedAt,
            newsTitle,
            newsText,
            "slug": slug.current,
            content,
            downVotes,
            upVotes
        }`
    )
}

export async function updateRumorPost(postId: string, voteType: 'upVotes' | 'downVotes') {

    return client
        .patch(postId)
        .setIfMissing({ [voteType]: 0 }) // Ensures the field exists
        .inc({ [voteType]: voteType === 'upVotes' ? 1 : -1 }) // Increment or decrement
        .commit()
        .then((updatedDoc) => {
            console.log('Updated document:', updatedDoc);
            return updatedDoc;
        })
        .catch((error) => {
            console.error('Error updating post:', error);
            throw error;
        });
}

export async function getBusinesses() {
    return client.fetch(
        groq`*[_type == 'business'] | order(_updatedAt desc){
            _id,
            _createdAt,
            updatedAt,
            businessTicker,
            twitterTimelineUrl,
            twitterIds,
            businessName,
            businessText,
            "slug": slug.current,
            content,
            "businessLogo": businessLogo.asset->url,
            diUrl,
            tradingViewSymbol
        }[0...14]`
    )
}

export async function getBusiness(slug: string) {
    return client.fetch(
        groq`*[_type == 'business' && slug.current == '${slug}'] {
            _id,
            _createdAt,
            updatedAt,
            twitterTimelineUrl,
            twitterIds,
            businessTicker,
            businessName,
            businessText,
            "slug": slug.current,
            content,
            "businessLogo": businessLogo.asset->url,
            diUrl,
            tradingViewSymbol
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
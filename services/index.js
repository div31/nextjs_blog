import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
console.log(graphqlAPI)

export const getPosts = async () => { debugger
    const query = gql`
        query MyQuery {
        postsConnection {
            edges {
                node {
                    author {
                        bio
                        name
                        id
                        photo {
                            url
                        }
                    }
                    slug
                    title
                    createdAt
                    excerpt
                    featuredImage {
                        url
                    }
                    categories {
                        name
                        slug
                    }
                }
            }
        }
    }

    `

    const result = await request(graphqlAPI, query);
    console.log(result)
    return result.postsConnection.edges;
}
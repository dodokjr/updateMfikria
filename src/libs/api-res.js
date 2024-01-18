export default async function getMyApi(resource, query)
{
    const api = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
    const myapi = await api.json()
    return myapi
}

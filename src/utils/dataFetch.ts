import { BASE_COUNTRIES_API } from "../constans/constants"

export const dataFetch = async (query: string | null) => {
    try {
        const response = await fetch(`${BASE_COUNTRIES_API}${query}`)
        if(!response || !response.ok) throw Error("Something went wrong! No data fetch!")
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw Error('No data found!')
    }
}
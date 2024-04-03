import axios from "axios"


export const searchCompagnie = async(query: string) => {
    try {
        const data = await axios.get<SearchResponse>(
            `https://financialmodelingprep.com/api/v3/search-ticker?query=AA&limit=10&exchange=NASDAQ&apikey=${process.env.reactrr}`
        )
    } catch (error) {
        
    }
}
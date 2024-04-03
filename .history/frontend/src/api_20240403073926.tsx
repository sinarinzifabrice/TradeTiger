import axios from "axios"


export const searchCompagnie = async(query: string) => {
    try {
        const data = await axios.get<SearchResponse>()
    } catch (error) {
        
    }
}
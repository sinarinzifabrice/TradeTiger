import axios from "axios"
import { CompanySearch } from "./company";

interface SearchResponse{
    data: CompanySearch[];
}

/**
 * This function performs a search query to retrieve information about companies.
 * @param query The search query string.
 * @returns A promise resolving to the search response data. If successful, it returns an array of CompanySearch objects.
 *          If an error occurs, it returns a string describing the error.
 */
export const searchCompagnie = async(query: string) => {
    try {
        const data = await axios.get<SearchResponse>(
            `https://financialmodelingprep.com/api/v3/search?query=${query}&limit=10&exchange=NASDAQ&apikey=${process.env.REACT_APP_API_KEY}`
        );
        return data;
    } catch (error) {
        if(axios.isAxiosError(error)){
            console.log("error message", error.message);
            return error.message;
        }else{
            console.log("unspected error:", error);
            return "An expected error has occured";
        }

    }
}
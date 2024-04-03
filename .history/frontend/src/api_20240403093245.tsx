import axios from "axios"


export const searchCompagnie = async(query: string) => {
    try {
        const data = await axios.get<SearchResponse>(
            `https://financialmodelingprep.com/api/v3/search-ticker?query=AA&limit=10&exchange=NASDAQ&apikey=${process.env.REACT_APP_API_KEY}`
        );
        return data;
    } catch (error) {
        if(axios.isAxiosError(error)){
            console.log("error message", error.message);
            return error.message;
        }else{
            console.log("unspected error:", error);
            return "An expected error ";
        }

    }
}


export const getGifs = async(start=0) => {
    try {
        const url = `https://api.coinlore.net/api/tickers/?start=${start}&limit=100`
        const resp = await fetch(url);
        const {data} = await resp.json();
        return data;
    } catch (error) {
    }

}
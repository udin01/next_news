
const fetchNews = async (
    category?: string,
    keywords?: string
) => {
    category = (category) ? `&category=${category}` : ''; 
  
    //  Fetch function with Next.js 13 caching
    let urlApi = `https://newsapi.org/v2/top-headlines?country=id${category}&apiKey=${process.env.NEWSAPI}`;

    let res = await fetch(urlApi, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            'Accept': 'application/json'
        },
    });

    if(!res.ok) {
        return [];
    } else {
        let res_pre = res.json();
        return res_pre;
    }


    // console.log('===========================================================================')
    // console.log(data, category)
    // console.log('---------------------------------------------------------------------------')
    // return;
}

export default fetchNews
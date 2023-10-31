import { categories } from "../constants";
import fetchNews from "../utils/fetchNews";
import NewsList from "./component/NewsList";



async function Homepage() {
  const news: Response = await fetchNews();
  
  return (
    <div>
      <NewsList news={news}></NewsList>
    </div>
  );
}

export default Homepage;

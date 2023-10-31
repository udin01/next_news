import Article from "../Article";

type Props = {
  news: Response;
};

function NewsList({ news }: Props) {
  //   console.log('=======================')
  // console.log(news)
  // return;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-10 gap-10">
      {news.articles.map((article) => (
        <Article key={article.title} article={article} />
      ))}
    </div>
  );
}

export default NewsList;

import LiveTimestamp from "./component/LiveTimestamp";
import ReadMoreButton from "./component/ReadMoreButton";

type Props = {
  article: Object ;
};

function Article({ article }: Props) {
  return (
    <article className="bg-slate-100 dark:bg-zinc-800 flex flex-col rounded-lg shadow-sm hover:scale-110 hover:shadow-lg hover:bg-slate-200 dark:hover:bg-zinc-700 transition duration-200 ease-out">
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          className="h-56 w-full object-cover rounded-t-lg shadow-md"
        />
      )}
      <div className="flex flex-1 flex-col">
        <div className="flex flex-1 flex-col p-5">
          <h2 className="font-bold font-serif">{article.title}</h2>
          <section className="mt-2 flex-1">
            <p className="text-xs line-clamp-6">{article.content}</p>
          </section>
          <footer className="text-xs ml-auto flex space-x-1 pt-5 italic text-gray-400">
            <p>{article.author} -</p>
            <p>
              <LiveTimestamp time={article.publishedAt} />
            </p>
          </footer>
        </div>
        <ReadMoreButton article={article} />
      </div>
    </article>
  );
}

export default Article;

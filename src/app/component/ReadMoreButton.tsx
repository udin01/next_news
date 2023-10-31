"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";

type Props = {
  article: Article;
};

function ReadMoreButton({ article }: Props) {
  const router = useRouter();

  /*
  const handleClick = () => {
    const queryString = Object.entries(article)
      .map(([key, value]) => `${key}=${value}`)
      .join("&");
    const url = `/article?${queryString}`;
    router.push(url);
  };
  return (
    <button
      onClick={handleClick}
      className="bg-blue-400 h-10 rounded-b-lg dark:text-gray-900 hover:bg-blue-500"
    >
      Read More
    </button>
  );
  */
   return (
    <Link className="bg-blue-400 h-10 rounded-b-lg dark:text-gray-900 hover:bg-blue-500 text-center" href={ article.url } target="_blank">  Read More   </Link>
  );
}

export default ReadMoreButton;

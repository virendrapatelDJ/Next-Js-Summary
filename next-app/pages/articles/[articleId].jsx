import React, { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { dummy_articles } from "./data";

export default function DetailsPage() {
  const router = useRouter();
  const [article, setArticle] = useState({});

  useEffect(() => {
    const slug = router.query.articleId;

    if (!slug) return;
    console.log(slug);
    const article = dummy_articles.find((article) => article.slug === slug);
    console.log(article);
    setArticle(article);
  }, [router.query]);

  return (
    <Fragment>
      <h1>{article?.title?.replace(/-/g, " ")}</h1>
      <hr />
      <p>{article?.content}</p>
    </Fragment>
  );
}

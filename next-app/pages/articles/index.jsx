import React from "react";

import { dummy_articles } from "./data";

export default function ArticlePage() {
  return (
    <div>
      <h1>This is articles page</h1>
      <hr />

      <ul>
        {dummy_articles.map((article) => (
          <li key={article.slug}>
            <a href={`/articles/${article.slug}`}>{article.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

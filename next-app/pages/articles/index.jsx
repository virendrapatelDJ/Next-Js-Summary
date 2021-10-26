import React from "react";
import Link from "next/link";

import { dummy_articles } from "./data";

export default function ArticlePage() {
  return (
    <div>
      <h1>This is articles page</h1>
      <hr />

      <ul>
        {dummy_articles.map((article) => (
          <li key={article.slug}>
            <Link href={`/articles/${article.slug}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

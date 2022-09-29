import { Fragment } from "react";
import Link from "next/link";
function NewsPage() {
  return (
    <Fragment>
      <h1>News page</h1>
      <ul>
        <li>
          <Link href="/news/strokes">2 strokes only</Link>
        </li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;

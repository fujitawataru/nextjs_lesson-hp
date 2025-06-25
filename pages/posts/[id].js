import { getAllPostIds, getPostData } from "../../lib/posts";
// import { getAllPostIds } from "../../lib/posts";
import Layout from "../../components/Layout";
import Link from "next/link";
const apiUrl = "https://jsonplaceholder.typicode.com/posts";

export default function Post({ post }) {
  if (!post) {
    return <div>Loading...</div>;
  }
  return (
    <Layout title={post.title}>
      <p className="m-4">
        {"ID : "}
        {post.id}
      </p>
      <p className="mb-8 text-xl font-bold">{post.title}</p>
      <p className="px-10">{post.body}</p>
      <Link href="/blog-page">
        <div className="flex cursor-pointer mt-12">
          <svg
            className="w-6 h-6 mr-3"
            data-slot="icon"
            fill="none"
            stroke-width="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
            ></path>
          </svg>
          <span>Back to blog-page</span>
        </div>
      </Link>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getAllPostIds();
  return {
    paths,
    // 存在しないパスにアクセスしたら404を返す https://nextjs.org/docs/pages/api-reference/functions/get-static-paths#fallback-false
    fallback: false,
  };
}
// export async function getStaticProps(id) {
// const { post: post } = await getPostData(params.id);
export async function getStaticProps({ params }) {
  const { post: post } = await getPostData(params.id);
  return {
    props: {
      post,
    },
  };
}

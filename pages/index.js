import Head from 'next/head';
import CommentModal from '../components/CommentModal';
import Feed from '../components/Feed';
import Sidebar from '../components/Sidebar';
import Widgets from '../components/Widgets';

export default function Home({ newsResults, randomUsersResults }) {
  return (
    <div>
      <Head>
        <title>Keke-Tweet</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex min-h-screen mx-auto">
        {/* Barre latérale */}
        <Sidebar />

        {/* Principale */}
        <Feed />

        {/* Widgets */}
        <Widgets
          newsResults={newsResults.articles}
          randomUsersResults={randomUsersResults.results}
        />

        {/* Modale */}
        <CommentModal />
      </main>
    </div>
  );
}

// https://saurav.tech/NewsAPI/top-headlines/category/business/fr.json

export async function getServerSideProps() {
  const newsResults = await fetch(
    'https://saurav.tech/NewsAPI/top-headlines/category/business/fr.json'
  ).then((res) => res.json());

  // Section "qui suivre?"
  const randomUsersResults = await fetch(
    'https://randomuser.me/api/?results=30&inc=name,login,picture'
  ).then((res) => res.json());
  return {
    props: {
      newsResults,
      randomUsersResults,
    },
  };
}

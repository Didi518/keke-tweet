import { SparklesIcon } from '@heroicons/react/outline';
import Input from './Input';
import Post from './Post';

export default function Feed() {
  const posts = [
    {
      id: '1',
      name: 'Kevin Ouali',
      username: 'Didi518',
      userImg:
        'http://localhost:3000/_next/image?url=https%3A%2F%2Fpvtistes.net%2Fforum%2Fattachments%2Fcharte-de-pvtistes-net-et-aide-lutilisation-12%2F3089d1540903562-comment-creer-son-avatar-style-manga-20110129191325_yepaland_c57fn8tihamxpyg3euzd9bor4lwjvq06s2k1.jpg&w=128&q=75',
      img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1774&q=80',
      text: 'superbe paysage!',
      timestamp: "il y'a 2 heures",
    },
    {
      id: '2',
      name: 'Kevin Ouali',
      username: 'Didi518',
      userImg:
        'http://localhost:3000/_next/image?url=https%3A%2F%2Fpvtistes.net%2Fforum%2Fattachments%2Fcharte-de-pvtistes-net-et-aide-lutilisation-12%2F3089d1540903562-comment-creer-son-avatar-style-manga-20110129191325_yepaland_c57fn8tihamxpyg3euzd9bor4lwjvq06s2k1.jpg&w=128&q=75',
      img: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80',
      text: 'wow!',
      timestamp: "il y'a 2 jours",
    },
  ];
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
        <h2 className="text-lg sm:text-xl font-bold cursor-pointer">Accueil</h2>
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
          <SparklesIcon className="h-5" />
        </div>
      </div>
      <Input />
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

import { EmojiHappyIcon, PhotographIcon } from '@heroicons/react/outline';

export default function Input() {
  return (
    <div className="flex border-b border-gray-200 p-3 space-x-3">
      <img
        src="http://localhost:3000/_next/image?url=https%3A%2F%2Fpvtistes.net%2Fforum%2Fattachments%2Fcharte-de-pvtistes-net-et-aide-lutilisation-12%2F3089d1540903562-comment-creer-son-avatar-style-manga-20110129191325_yepaland_c57fn8tihamxpyg3euzd9bor4lwjvq06s2k1.jpg&w=128&q=75"
        alt="img-utilisateur"
        className="h-11 w-11 rounded-full cursor-pointer hover:brightness-95"
      ></img>
      <div className="w-full divide-y divide-gray-200">
        <div className="">
          <textarea
            className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700"
            row="2"
            placeholder="Quoi de neuf?"
          ></textarea>
        </div>
        <div className="flex items-center justify-between pt-2.5">
          <div className="flex">
            <PhotographIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
            <EmojiHappyIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
          </div>
          <button className="bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50">
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}

import Image from 'next/image';
import SidebarMenuItem from './SidebarMenuItem';
import { HomeIcon } from '@heroicons/react/solid';
import {
  BellIcon,
  BookmarkIcon,
  ClipboardIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
  HashtagIcon,
  InboxIcon,
  UserIcon,
} from '@heroicons/react/outline';
export default function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24">
      {/* Logo */}
      <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
        <Image
          width="50"
          height="50"
          src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"
          alt="logo"
        />
      </div>

      {/* Menu */}
      <div className="mt-4 mb-2.5 xl:items-start">
        <SidebarMenuItem text="Accueil" Icon={HomeIcon} active />
        <SidebarMenuItem text="Explorer" Icon={HashtagIcon} />
        <SidebarMenuItem text="Notifications" Icon={BellIcon} />
        <SidebarMenuItem text="Messages" Icon={InboxIcon} />
        <SidebarMenuItem text="Signets" Icon={BookmarkIcon} />
        <SidebarMenuItem text="Presse-papier" Icon={ClipboardIcon} />
        <SidebarMenuItem text="Profil" Icon={UserIcon} />
        <SidebarMenuItem text="Plus encore" Icon={DotsCircleHorizontalIcon} />
      </div>

      {/* Bouton */}
      <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">
        Tweet
      </button>

      {/* Mini-profil */}
      <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
        <Image
          width="50px"
          height="50px"
          src="https://pvtistes.net/forum/attachments/charte-de-pvtistes-net-et-aide-lutilisation-12/3089d1540903562-comment-creer-son-avatar-style-manga-20110129191325_yepaland_c57fn8tihamxpyg3euzd9bor4lwjvq06s2k1.jpg"
          alt="image-utilisateur"
          className="h-10 w-10 rounded-full xl:mr-2"
        />
        <div className="leading-5 hidden xl:inline">
          <h4 className="font-bold">Kevin Ouali</h4>
          <p className="text-gray-500">@Didi518</p>
        </div>
        <DotsHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline" />
      </div>
    </div>
  );
}

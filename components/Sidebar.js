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
import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';

export default function Sidebar() {
  const { data: session } = useSession();
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24">
      {/* Logo */}
      <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
        <img
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
        {session && (
          <>
            <SidebarMenuItem text="Notifications" Icon={BellIcon} />
            <SidebarMenuItem text="Messages" Icon={InboxIcon} />
            <SidebarMenuItem text="Signets" Icon={BookmarkIcon} />
            <SidebarMenuItem text="Presse-papier" Icon={ClipboardIcon} />
            <SidebarMenuItem text="Profil" Icon={UserIcon} />
            <SidebarMenuItem
              text="Plus encore"
              Icon={DotsCircleHorizontalIcon}
            />
          </>
        )}
      </div>

      {/* Bouton */}
      {session ? (
        <>
          <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">
            Tweet
          </button>

          {/* Mini-profil */}
          <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
            <img
              onClick={signOut}
              src={session?.user?.image}
              alt="image-utilisateur"
              className="h-10 w-10 rounded-full xl:mr-2"
            />
            <div className="leading-5 hidden xl:inline">
              <h4 className="font-bold">{session?.user?.name}</h4>
              <p className="text-gray-500">@{session?.user?.username}</p>
            </div>
            <DotsHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline" />
          </div>
        </>
      ) : (
        <button
          onClick={signIn}
          className="bg-blue-400 text-white rounded-full w-36 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline"
        >
          Connexion
        </button>
      )}
    </div>
  );
}

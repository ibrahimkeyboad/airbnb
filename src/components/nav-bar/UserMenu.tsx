'use client';

import { AiOutlineMenu } from 'react-icons/ai';
import Avatar from '../Avatar';
import { useCallback, useState } from 'react';
import MenuItems from './MenuItem';
import useRegisterModal from '@/hooks/useRegisterModal';
import useLoginStore from '@/hooks/useLoginStore';
import { User } from '@prisma/client';
import { signOut } from 'next-auth/react';

interface UserMenuProps {
  user?: User | null;
}

function UserMenu({ user }: UserMenuProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const registerModal = useRegisterModal();
  const loginState = useLoginStore();

  const toggleOpen = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <div className='relative'>
      <div className='flex items-center gap-3'>
        <div
          className='
          hidden
          md:block
          text-sm 
          font-semibold
          py-3
          px-4
          rounded-full
        hover:bg-neutral-100
        transition
        cursor-pointer'
          onClick={() => {}}>
          Airbnb your home
        </div>
        <div
          className='
          py-4 
          md:py-1 
          md:px-2 
          border-[1px] 
          border-neutral-200 
          flex 
          items-center 
          justify-center
          gap-3 
          rounded-full 
          cursor-pointer 
          hover:shadow-md 
          transition'
          onClick={toggleOpen}>
          <AiOutlineMenu />
          <div className='hidden md:block'>
            <Avatar src={user?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className='absolute 
        rounded-xl 
        shadow-md 
        w-[40vw] 
        md:w-3/4 
        bg-white 
        overflow-hidden 
        right-0 
        top-12 
        text-sm'>
          <div className='flex flex-col cursor-pointer'>
            {user ? (
              <>
                <MenuItems label='My trips' onClink={() => {}} />
                <MenuItems label='My favorite' onClink={() => {}} />
                <MenuItems label='My reservations' onClink={() => {}} />
                <MenuItems label='My properties' onClink={() => {}} />
                <MenuItems label='My Airbnb my home' onClink={() => {}} />
                <MenuItems label='Logout' onClink={() => signOut()} />
              </>
            ) : (
              <>
                <MenuItems label='Login' onClink={loginState.onOpen} />
                <MenuItems label='SignUp' onClink={registerModal.onOpen} />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default UserMenu;

'use client';

import Image from 'next/image';
import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';

interface AvatarProps {
  src?: string | null;
}

function Avatar({ src }: AvatarProps) {
  return src ? (
    <Image
      className='rounded-full'
      src={src}
      height={30}
      width={30}
      alt='Avatar'
    />
  ) : (
    <AiOutlineUser className='rounde-full' />
  );
}

export default Avatar;

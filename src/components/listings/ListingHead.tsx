import useCountries from '@/hooks/useCountries';
import { User } from '@prisma/client';
import React from 'react';
import Heading from '../Heading';
import Image from 'next/image';
import HeartButton from '../HeartButton';

interface ListingHaadProps {
  title: string;
  locationValue: string;
  imageSrc: string;
  id: string;
  currentUser?: User | null;
}

function ListingHead({
  id,
  imageSrc,
  locationValue,
  title,
  currentUser,
}: ListingHaadProps) {
  const { getByValue } = useCountries();
  const location = getByValue(locationValue);

  console.log(imageSrc);
  return (
    <>
      <Heading
        title={title}
        subtitle={`${(location?.region, location?.label)}`}
      />
      <div
        className='
          w-full
          h-[60vh]
          overflow-hidden
          rounded-xl
          relative
      '>
        <Image alt={title} src={imageSrc} fill className='object-cover' />

        <div className='absolute top-5 right-5'>
          <HeartButton listingId={id} currentUser={currentUser} />
        </div>
      </div>
    </>
  );
}

export default ListingHead;

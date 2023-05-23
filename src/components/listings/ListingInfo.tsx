import { User } from '@prisma/client';
import React from 'react';
import { IconType } from 'react-icons';
import Avatar from '../Avatar';
import ListingCategory from './ListingCategory';
import dynamic from 'next/dynamic';
import useCountries from '@/hooks/useCountries';

const Map = dynamic(() => import('../Map'));

interface ListingInfoProps {
  user: User;
  description: string;
  geustCount: number;
  roomCount: number;
  bathroomCount: number;
  category:
    | {
        icon: IconType;
        label: string;
        description: string;
      }
    | undefined;
  locationValue: string;
}

function ListingInfo({
  bathroomCount,
  category,
  description,
  geustCount,
  locationValue,
  roomCount,
  user,
}: ListingInfoProps) {
  const { getByValue } = useCountries();
  const coordinates = getByValue(locationValue)?.latlng;
  return (
    <div className='col-span-4 flex flex-col gap-8'>
      <div className='flex flex-col gap-2'>
        <div className='text-xl font-semibold flex items-center gap-2'>
          <h3>Hosted by {user.name} </h3>
          <Avatar src={user.image} />
        </div>
        <div
          className='
        flex 
        items-center 
        gap-4 font-light 
        text-neutral-400'>
          <h4>{geustCount} guest</h4>
          <h4>{roomCount} rooms</h4>
          <h4>{bathroomCount} bathrooms</h4>
        </div>
      </div>
      <hr />
      {category && (
        <ListingCategory
          icon={category.icon}
          label={category.label}
          description={category.description}
        />
      )}
      <hr />
      <p className='text-lg font-light text-neutral-500'>{description}</p>
      <hr />
      <Map center={coordinates} />
    </div>
  );
}

export default ListingInfo;

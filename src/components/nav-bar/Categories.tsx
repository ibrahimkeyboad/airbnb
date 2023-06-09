'use client';
import React from 'react';
import Container from '../Container';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiWindmill,
} from 'react-icons/gi';
import { MdOutlineVilla } from 'react-icons/md';
import { FaSkiing } from 'react-icons/fa';
import CategoryBox from '../CategoryBox';
import { usePathname, useSearchParams } from 'next/navigation';
import { BsSnow } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';

export const categories = [
  {
    label: 'Beach',
    icon: TbBeach,
    description: 'This property is close to the beach!',
  },
  {
    label: 'Windmills',
    icon: GiWindmill,
    description: 'This Property has windmills!',
  },
  {
    label: 'Modern',
    icon: MdOutlineVilla,
    description: 'This Property is modern!',
  },
  {
    label: 'Countryside',
    icon: TbMountain,
    description: 'This Property is in countryside!',
  },
  {
    label: 'Pools',
    icon: TbPool,
    description: 'This Property is has a pool!',
  },
  {
    label: 'Lake',
    icon: GiBoatFishing,
    description: 'This Property is close to a lake!',
  },
  {
    label: 'Skiing',
    icon: FaSkiing,
    description: 'This Property is modern!',
  },
  {
    label: 'Castles',
    icon: GiCastle,
    description: 'This Property is in a castle!',
  },
  {
    label: 'Camping',
    icon: GiForestCamp,
    description: 'This Property has camping activities!',
  },
  {
    label: 'Cave',
    icon: GiCaveEntrance,
    description: 'This Property is in cave!',
  },
  {
    label: 'Dsert',
    icon: GiCactus,
    description: 'This Property  is in the desert!',
  },
  {
    label: 'Barns',
    icon: GiBarn,
    description: 'This Property is in the barn!',
  },
  {
    label: 'Lux',
    icon: IoDiamond,
    description: 'This Property is luxurious!',
  },
  {
    label: 'Snow',
    icon: BsSnow,
    description: 'This Property is luxurious!',
  },
];

function Categories() {
  const params = useSearchParams();
  const category = params.get('category');
  const pathname = usePathname();

  const isMainPage = pathname === '/';
  if (!isMainPage) {
    return null;
  }
  return (
    <Container>
      <div className='pt-4 flex items-center justify-between overflow-x-auto'>
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            selected={item.label === category}
            icon={item.icon}
            label={item.label}
          />
        ))}
      </div>
    </Container>
  );
}

export default Categories;

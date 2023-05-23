import axios from 'axios';

import { useRouter } from 'next/navigation';
import { MouseEvent, useCallback, useMemo } from 'react';

import useLoginStore from './useLoginStore';
import { User } from '@prisma/client';
import { toast } from 'react-hot-toast';

interface FavouriteType {
  listingId: string;
  currentUser?: User | null;
}

function useFavourite({ listingId, currentUser }: FavouriteType) {
  const router = useRouter();
  const loginState = useLoginStore();

  const hasFavourited = useMemo(() => {
    const list = currentUser?.favoritedIds || [];
    return list.includes(listingId);
  }, [currentUser, listingId]);

  const toggleFavourite = useCallback(
    async (event: MouseEvent<HTMLDivElement>) => {
      event.stopPropagation();

      if (!currentUser) {
        return loginState.onOpen();
      }

      try {
        let request;

        if (hasFavourited) {
          request = () => axios.delete(`/api/favourites/${listingId}`);
        } else {
          request = () => axios.post(`/api/favourites/${listingId}`);
        }

        await request();
        router.refresh();
        toast.success('Success');
      } catch (err: any) {
        toast.error(err.toString());
      }
    },
    [currentUser, loginState, hasFavourited, router, listingId]
  );

  return {
    hasFavourited,
    toggleFavourite,
  };
}

export default useFavourite;

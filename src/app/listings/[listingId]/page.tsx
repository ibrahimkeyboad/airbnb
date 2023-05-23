import getCurrentUser from '@/actions/getCurrentUser';
import getListingById from '@/actions/getListById';
import getReservations from '@/actions/getReservations';
import EmptyState from '@/components/EmptyState';
import ListingItem from '@/components/ListingItem';

interface IParams {
  listingId?: string;
}

async function Page({ params }: { params: IParams }) {
  const listing = await getListingById(params);
  const reservations = await getReservations(params);
  const currentUser = await getCurrentUser();

  if (!listing) {
    return <EmptyState />;
  }
  return (
    <ListingItem
      listing={listing}
      reservations={reservations}
      currentUser={currentUser}
    />
  );
}

export default Page;

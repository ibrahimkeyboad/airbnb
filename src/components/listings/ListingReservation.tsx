import { Range } from 'react-date-range';
import Calendar from '../input/Calendar';
import Button from '../Button';

interface ListingReservationProps {
  price: number;
  totalPrice: number;
  onChangeDate: (value: Range) => void;
  dateRange: Range;
  onSubmit: () => void;
  disabled: boolean;
  disabledDates: Date[];
}
function ListingReservation({
  dateRange,
  disabledDates,
  disabled,
  onChangeDate,
  onSubmit,
  price,
  totalPrice,
}: ListingReservationProps) {
  return (
    <div
      className='
        bg-white
        rounded-xl
        border-[1px]
        border-neutral-200
        overflow-hidden'>
      <div className='flex items-center gap-1 p-4'>
        <h3 className='text-2xl font-semibold'>$ {price}</h3>
        <h3 className='font-light text-neutral-600'>night</h3>
      </div>
      <hr />
      <Calendar
        value={dateRange}
        disabledDates={disabledDates}
        onChange={(value) => onChangeDate(value.selection)}
      />
      <hr />
      <div>
        <Button disabled={disabled} label='Reserve' onClick={onSubmit} />
      </div>
      <div
        className='
      p-4
      flex
      items-center justify-center
      font-semibold
      text-lg'>
        <span>Total</span>
        <span>$ {totalPrice}</span>
      </div>
    </div>
  );
}

export default ListingReservation;

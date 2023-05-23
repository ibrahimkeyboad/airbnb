import { Range, RangeKeyDict, DateRange } from 'react-date-range';

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

interface CalendarProps {
  value?: Range;
  onChange: (value: RangeKeyDict) => void;
  disabledDates?: Date[];
}

function Calendar({ onChange, disabledDates, value }: CalendarProps) {
  return (
    <DateRange
      rangeColors={['#262626']}
      range={[value]}
      date={new Date()}
      onChange={onChange}
      direction='vertical'
      showDateDisplay={false}
      minDate={new Date()}
      disabledDates={disabledDates}
    />
  );
}

export default Calendar;

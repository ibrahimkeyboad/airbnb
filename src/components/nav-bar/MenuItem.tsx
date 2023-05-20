'use client';

interface MenuItemProps {
  onClink: () => void;
  label: string;
}

function MenuItem({ label, onClink }: MenuItemProps) {
  return (
    <div
      className='
      px-4
      py-3 hover:bg-neutral-100
      transition
      font-semibold
  '
      onClick={onClink}>
      {label}
    </div>
  );
}

export default MenuItem;

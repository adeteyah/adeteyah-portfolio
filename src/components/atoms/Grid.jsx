const colMap = {
  1: 'grid-cols-1',
  2: 'grid-cols-2',
  3: 'grid-cols-3',
  4: 'grid-cols-4',
  6: 'grid-cols-6',
  12: 'grid-cols-12'
};

const gapMap = {
  1: 'gap-1',
  2: 'gap-2',
  4: 'gap-4',
  6: 'gap-6',
  8: 'gap-8'
};

function Grid({ children, className = '', cols = 1, gap = 4 }) {
  const gridCols = colMap[cols] || 'grid-cols-1';
  const gridGap = gapMap[gap] || 'gap-4';

  return (
    <div className={`grid ${gridCols} ${gridGap} ${className}`}>{children}</div>
  );
}

export default Grid;

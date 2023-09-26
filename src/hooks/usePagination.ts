import { UsePaginationProps } from '@interfaces/props/hook/UsePaginationProps';
import { useMemo } from 'react';

const range = (startPosition: number, endPosition: number): number[] => {
  const length = endPosition - startPosition + 1;
  return Array.from({ length }, (_, index) => index + startPosition);
};
const breakpoint = '...';

const usePagination = ({
  currentPage,
  pagesTotal,
  siblingsCount = 1,
}: UsePaginationProps): (number | string)[] => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return useMemo(() => {
    const totalPagesPills = 2 * siblingsCount + 5;

    const firstPageIndex = 1;
    const lastPageIndex = pagesTotal;

    if (totalPagesPills >= pagesTotal) {
      return range(firstPageIndex, lastPageIndex);
    }

    const leftExtremeSiblingIndex = Math.max(currentPage - siblingsCount, firstPageIndex);
    const rightExtremeSiblingIndex = Math.min(currentPage + siblingsCount, lastPageIndex);

    const isLeftBreakPointVisible = firstPageIndex + 1 < leftExtremeSiblingIndex;
    const isRightBreakPointVisible = rightExtremeSiblingIndex < lastPageIndex - 1;

    if (!isLeftBreakPointVisible && isRightBreakPointVisible) {
      return [...range(firstPageIndex, 3 + siblingsCount * 2), breakpoint, lastPageIndex];
    }

    if (isLeftBreakPointVisible && !isRightBreakPointVisible) {
      return [
        firstPageIndex,
        breakpoint,
        ...range(lastPageIndex - 2 * siblingsCount - 2, lastPageIndex),
      ];
    }
    if (isLeftBreakPointVisible && isRightBreakPointVisible) {
      return [
        firstPageIndex,
        breakpoint,
        ...range(leftExtremeSiblingIndex, rightExtremeSiblingIndex),
        breakpoint,
        lastPageIndex,
      ];
    }
  }, [currentPage, pagesTotal, siblingsCount]);
};

export { usePagination, breakpoint };

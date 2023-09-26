import { PaginationProps } from '@interfaces/props/component/PaginationProps';
import { usePagination, breakpoint } from '@hooks/usePagination';
import {
  pagination,
  paginationList as pagination__list,
  paginationItem as pagination__item,
  paginationItemIsActive as pagination__item_isActive,
  paginationItemBreakpoint as pagination__item_breakpoint,
} from '@styles/components/pagination.module.scss';
import { button } from '@styles/components/button.module.scss';
import cn from 'classnames';
import { PaginationSwitchButton } from '@components/uiKit/pagination/PaginationSwitchButton';

const Pagination = ({
  onPageChange,
  customClassName,
  ...usePaginationProps
}: PaginationProps) => {
  const paginationArray = usePagination(usePaginationProps);

  if (paginationArray.length < 2) return null;

  const { currentPage, pagesTotal } = usePaginationProps;

  const switchNext = () => onPageChange(currentPage + 1);
  const switchPrevious = () => onPageChange(currentPage - 1);

  const isFirstSwitchDisabled = currentPage === 1;
  const isLastSwitchDisabled = currentPage === pagesTotal;

  return (
    <div className={cn(pagination, customClassName)}>
      <PaginationSwitchButton
        isDisabled={isFirstSwitchDisabled}
        isFirst={true}
        onClick={switchPrevious}
      />
      <ul className={pagination__list}>
        {paginationArray.map((item, index) => {
          const isCurrentPageItem = item === currentPage;

          if (item === breakpoint) {
            return (
              <li
                className={cn(pagination__item, pagination__item_breakpoint)}
                key={item + index.toString()}
              >
                {breakpoint}
              </li>
            );
          }
          return (
            <li
              key={item}
              className={cn(pagination__item, {
                [pagination__item_isActive]: isCurrentPageItem,
                [button]: !isCurrentPageItem,
              })}
              onClick={() => onPageChange(item as number)}
            >
              {item}
            </li>
          );
        })}
      </ul>
      <PaginationSwitchButton
        isDisabled={isLastSwitchDisabled}
        isFirst={false}
        onClick={switchNext}
      />
    </div>
  );
};

export { Pagination };

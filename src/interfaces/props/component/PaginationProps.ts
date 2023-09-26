import { UsePaginationProps } from '@interfaces/props/hook/UsePaginationProps';
import { CustomClassNameProp } from '@interfaces/props/common/CustomClassNameProp';

interface PaginationProps extends UsePaginationProps, CustomClassNameProp {
  onPageChange: (page: number) => void;
}

export type { PaginationProps };

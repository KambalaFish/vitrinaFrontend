import cn from 'classnames';
import {
  paginationSwitch as pagination__switch,
  paginationSwitchHovered as pagination__switch_hovered,
  paginationSwitchLeft as pagination__switch_left,
  paginationSwitchRight as pagination__switch_right,
  paginationSwitchDisabled as pagination__switch_disabled,
  paginationArrow as pagination__arrow,
  paginationArrowLeft as pagination__arrow_left,
  paginationArrowRight as pagination__arrow_right,
} from '@styles/components/pagination.module.scss';
import {
  button,
  buttonDisabled as button_disabled,
} from '@styles/components/button.module.scss';
import {
  arrow,
  arrowWhite as arrow_white,
  arrowGray as arrow_gray,
} from '@styles/components/arrow.module.scss';
import { PaginationButtonProps } from '@interfaces/props/component/PaginationButtonProps';

const PaginationSwitchButton = ({
  isDisabled,
  isFirst,
  onClick,
}: PaginationButtonProps) => {
  return (
    <button
      disabled={isDisabled}
      className={cn(
        button,
        {
          [button_disabled]: isDisabled,
          [pagination__switch_hovered]: !isDisabled,
          [pagination__switch_disabled]: isDisabled,
          [pagination__switch_left]: isFirst,
          [pagination__switch_right]: !isFirst,
        },
        pagination__switch
      )}
      onClick={onClick}
    >
      <div
        className={cn(
          arrow,
          arrow_gray,
          {
            [arrow_white]: isDisabled,
            [pagination__arrow_left]: isFirst,
            [pagination__arrow_right]: !isFirst,
          },
          pagination__arrow
        )}
      ></div>
    </button>
  );
};

export { PaginationSwitchButton };

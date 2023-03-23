import { LabelProps } from '@interfaces/props/component/LabelProps';
import cn from 'classnames';
import { formLabel } from '@styles/components/form.module.scss';

const Label = ({ htmlFor, customClassName, children, ...restInputProps }: LabelProps) => {
  return (
    <label
      className={cn(formLabel, customClassName)}
      htmlFor={htmlFor}
      {...restInputProps}
    >
      {children}
    </label>
  );
};

export { Label };

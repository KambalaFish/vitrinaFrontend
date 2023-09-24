import { LabelProps } from '@interfaces/props/component/LabelProps';
import cn from 'classnames';
import { formLabel as form__label } from '@styles/components/form.module.scss';

const Label = ({ htmlFor, customClassName, children, ...restInputProps }: LabelProps) => {
  return (
    <label
      className={cn(form__label, customClassName)}
      htmlFor={htmlFor}
      {...restInputProps}
    >
      {children}
    </label>
  );
};

export { Label };

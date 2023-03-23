import { formGroup } from '@styles/components/form.module.scss';
import cn from 'classnames';
import type { FormGroupProps } from '@interfaces/props/component/FormGroupProps';

const FormGroup = ({ customClassName, children }: FormGroupProps) => {
  return (
    <div className={cn({ [formGroup]: !customClassName }, customClassName)}>
      {children}
    </div>
  );
};

export { FormGroup };

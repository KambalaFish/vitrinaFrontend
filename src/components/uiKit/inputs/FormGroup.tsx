import { formGroup as form__group } from '@styles/components/form.module.scss';
import cn from 'classnames';
import type { FormGroupProps } from '@interfaces/props/component/FormGroupProps';

const FormGroup = ({ customClassName, children }: FormGroupProps) => {
  return (
    <div className={cn({ [form__group]: !customClassName }, customClassName)}>
      {children}
    </div>
  );
};

export { FormGroup };

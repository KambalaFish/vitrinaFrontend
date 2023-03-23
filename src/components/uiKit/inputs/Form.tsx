import cn from 'classnames';
import { form } from '@styles/components/form.module.scss';
import type { FormProps } from '@interfaces/props/component/FormProps';

const Form = ({ customClassName, children, noValidate = true, ...rest }: FormProps) => {
  return (
    <form className={cn(form, customClassName)} noValidate={noValidate} {...rest}>
      {children}
    </form>
  );
};

export { Form };

import { ValidationInfoProps } from '@interfaces/props/component/ValidationInfoProps';
import cn from 'classnames';
import { formValidationinfo } from '@styles/components/form.module.scss';

const ValidationInfo = ({
  htmlFor,
  customClassName,
  errorMessage,
  ...restInputProps
}: ValidationInfoProps) => {
  if (!errorMessage) {
    return null;
  }

  return (
    <label
      className={cn(formValidationinfo, customClassName)}
      htmlFor={htmlFor}
      {...restInputProps}
    >
      {errorMessage}
    </label>
  );
};

export { ValidationInfo };

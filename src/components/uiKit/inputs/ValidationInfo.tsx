import { ValidationInfoProps } from '@interfaces/props/component/ValidationInfoProps';
import cn from 'classnames';
import { formValidationinfo as form__validationInfo } from '@styles/components/form.module.scss';

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
      className={cn(form__validationInfo, customClassName)}
      htmlFor={htmlFor}
      {...restInputProps}
    >
      {errorMessage}
    </label>
  );
};

export { ValidationInfo };

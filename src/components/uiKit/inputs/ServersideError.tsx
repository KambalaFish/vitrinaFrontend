import type { ServerSideValidationInfoProps } from '@interfaces/props/component/ServerSideValidationInfoProps';
import cn from 'classnames';
import { formError as form__error } from '@styles/components/form.module.scss';

const ServersideError = ({
  customClassName,
  errorMessage,
  ...restSpanAttributes
}: ServerSideValidationInfoProps) => {
  if (!errorMessage) {
    return null;
  }
  return (
    <span className={cn(form__error, customClassName)} {...restSpanAttributes}>
      {errorMessage}
    </span>
  );
};

export { ServersideError };

import cn from 'classnames';
import {
  searchform,
  searchformInput as searchform__input,
  searchformButton as searchform__button,
  searchformIcon as searchform__icon,
} from '@styles/layout/header/searchform.module.scss';
import { button } from '@styles/components/button.module.scss';
import { BsSearch as SearchIcon } from '@react-icons/all-files/bs/BsSearch';
import { CustomClassNameProp } from '@interfaces/props/common/CustomClassNameProp';

interface SearchFormProps extends CustomClassNameProp {
  action?: string;
  placeholder?: string;
}

const SearchForm = ({
  action,
  customClassName,
  placeholder = 'я подыскиваю...',
}: SearchFormProps) => {
  return (
    <form
      name={`searchForm`}
      action={action}
      method={`get`}
      target={`_self`}
      autoComplete={'off'}
      className={cn(customClassName, searchform)}
    >
      <input
        type='text'
        name={`query`}
        placeholder={placeholder}
        className={searchform__input}
      />
      <button type={`submit`} className={cn(button, searchform__button)}>
        <SearchIcon className={searchform__icon} />
      </button>
    </form>
  );
};

export { SearchForm };

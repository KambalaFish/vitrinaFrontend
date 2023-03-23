import cn from 'classnames';
import {
  searchform,
  searchformInput,
  searchformSearchbutton,
  searchformIcon,
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
        className={searchformInput}
      />
      <button type={`submit`} className={cn(button, searchformSearchbutton)}>
        <SearchIcon className={searchformIcon} />
      </button>
    </form>
  );
};

export { SearchForm };

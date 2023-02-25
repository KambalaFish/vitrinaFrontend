import cn from 'classnames';
import {
  searchform,
  searchformInput,
  searchformSearchbutton,
  searchformIcon,
} from '@styles/components/searchform.module.scss';
import { button } from '@styles/components/button.module.scss';
import { BsSearch as SearchIcon } from '@react-icons/all-files/bs/BsSearch';
import { ClassNameProp } from '@interfaces/props/ClassNameProp';

interface SearchFormProps extends ClassNameProp {
  action?: string;
  placeholder?: string;
}

const SearchForm = ({
  action,
  className,
  placeholder = 'я подыскиваю...',
}: SearchFormProps) => {
  return (
    <form
      name={`searchForm`}
      action={action}
      method={`get`}
      target={`_self`}
      autoComplete={'off'}
      className={cn(className, searchform)}
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

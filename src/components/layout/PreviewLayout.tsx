import { Loader } from '@components/uiKit/Loader';
import { preview } from '@styles/layout/preview.module.scss';

const PreviewLayout = () => {
  return (
    <div className={preview}>
      <Loader />
    </div>
  );
};

export { PreviewLayout };

import {
  loader,
  loaderItem as loader__item,
} from '@styles/components/loader.module.scss';

/* https://loading.io/css/ */
const Loader = () => {
  return (
    <div className={loader}>
      <div className={loader__item}></div>
      <div className={loader__item}></div>
      <div className={loader__item}></div>
      <div className={loader__item}></div>
      <div className={loader__item}></div>
      <div className={loader__item}></div>
      <div className={loader__item}></div>
      <div className={loader__item}></div>
    </div>
  );
};

export { Loader };

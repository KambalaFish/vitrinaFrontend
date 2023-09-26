import { useParams } from 'react-router';
import { ProductProps } from '@interfaces/props/component/ProductProps';

const Product = ({ currentParam }: ProductProps) => {
  const params = useParams();

  return <>{params[currentParam]}</>;
};

export { Product };

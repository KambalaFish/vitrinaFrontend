import { productcardPrice as productcard__price } from '@styles/pages/category.module.scss';
import { formatPrice } from '@utils/formatPrice';

interface PriceProps {
  price: number;
}

const Price = ({ price }: PriceProps) => {
  const formattedPrice = formatPrice(price);
  return <span className={productcard__price}>{formattedPrice}</span>;
};

export { Price };

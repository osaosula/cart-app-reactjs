import { Link } from 'react-router-dom';
import { formatCurrency } from '../../utils/helpers';
import { useSelector } from 'react-redux';
import { getTotalPrice, getTotalQuantity } from './cartSlice';

function CartOverview() {
  const pizzaCount = useSelector(getTotalQuantity);
  const totalPrice = useSelector(getTotalPrice);
  if (!pizzaCount) return null;
  return (
    <div className=" flex items-center justify-between bg-stone-800 px-4 py-6 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{pizzaCount} pizza</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;

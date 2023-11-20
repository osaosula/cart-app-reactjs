/* eslint-disable react/prop-types */
import { formatCurrency } from '../../utils/helpers';
function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;
  console.log(isLoadingIngredients, ingredients);
  return (
    <li className="py-3">
      <div className="item-center justify-between gap-4 text-sm">
        <p className="font-bold">
          <span>{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
    </li>
  );
}

export default OrderItem;

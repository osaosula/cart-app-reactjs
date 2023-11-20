import LinkButton from '../../ui/LinkButton';

function EmptyCart() {
  return (
    <div>
      {/* <Link to="/menu">&larr; Back to menu</Link> */}
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="mt-7 font-semibold">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
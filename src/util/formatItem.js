export const formatItem = (item) => {
  const data = {
    name: item.name,
    description: item.description,
    image: item.image,
    price: Number(item.price),
    quantity: item.quantity || 1,
    totalPrice: item.quantity
      ? item.quantity * Number(item.price)
      : Number(item.price),
  };
  return data;
};

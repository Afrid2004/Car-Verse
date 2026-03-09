const getCartStore = () => {
  const getStore = localStorage.getItem("cart");
  if (getStore) {
    const getStoreParse = JSON.parse(getStore);
    return getStoreParse;
  } else {
    return [];
  }
};

const addCartStore = (id) => {
  const getStore = getCartStore();
  if (!getStore.includes(id)) {
    getStore.push(id);
    const data = JSON.stringify(getStore);
    localStorage.setItem("cart", data);
  }
  return getStore;
};

export { addCartStore, getCartStore };

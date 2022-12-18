const outer = () => {
  const x = 10;

  const inner = () => {
    return x;
  };
  return { inner };
};

outer().inner(); // Q. ??

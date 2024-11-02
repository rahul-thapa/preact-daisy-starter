const variations = {
  colors: ["primary", "secondary", "accent", "neutral", "ghost", "info", "success", "warning", "error"],
  sizes: ["xs", "sm", "md", "lg"],
};

const prefixes = ["btn"];

const safelist = () => {
  const list = [];
  for (let prefix of prefixes) {
    for (let variation in variations) {
      for (let value of variations[variation]) {
        list.push(`${prefix}-${value}`);
      }
    }
  }

  return list;
};

export default safelist;

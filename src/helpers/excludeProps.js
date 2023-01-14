export const excludeProps = (exclude) => {
  const props = Array.isArray(exclude) ? exclude : [exclude];
  return (prop) => !props.includes(prop);
};

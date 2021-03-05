export const getCssColor = (colorString = null) => {
  const colorObject = JSON.parse(colorString);
  return colorObject ? (colorObject.css !== 'rgba(255,255,255,1)' ? colorObject.css : null) : null;
};

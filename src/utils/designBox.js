// Converts design pixels into a length that scales with the container's --u unit.
export const u = (px) => `calc(${px} * var(--u))`

// Position and size of an absolutely placed image, in design pixels.
export const boxStyle = ({ left, top, width, height }) => ({
  left: u(left),
  top: u(top),
  width: u(width),
  height: u(height),
})

// Figma crops images by oversizing them inside a clipping box; crop values are percentages.
export const cropStyle = (crop) =>
  crop && {
    width: `${crop.w}%`,
    height: `${crop.h}%`,
    left: `${crop.l}%`,
    top: `${crop.t}%`,
  }

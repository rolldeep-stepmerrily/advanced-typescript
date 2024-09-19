interface Square {
  kind: 'square';
  size: number;
}

interface Rectangle {
  kind: 'rectangle';
  width: number;
  height: number;
}

interface Circle {
  kind: 'circle';
  radius: number;
}

type Shape = Square | Rectangle | Circle;

const calcArea = (shape: Shape) => {
  if (shape.kind === 'square') {
    return shape.size * shape.size;
  } else if (shape.kind === 'rectangle') {
    return shape.width * shape.height;
  } else if (shape.kind === 'circle') {
    return Math.PI * shape.radius ** 2;
  }
};

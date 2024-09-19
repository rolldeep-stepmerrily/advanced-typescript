type Path = `/${string}`;

export const makeUrl = (path: Path) => {
  return `https://domain.com${path}`;
};

makeUrl('/users');

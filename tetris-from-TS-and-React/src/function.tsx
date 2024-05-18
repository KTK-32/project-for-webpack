export function Generate2DArray (m: number, n: number, val: number = 0) {
  return [...Array(m)].map(_ => new Array(n).fill(val));
};

export function Visualize2DArray (array2D: number[][]) {
  let mapped: string = "";
  const list = [];
  array2D.forEach((value) => {
    value.forEach(value => {
      mapped = mapped + value
    });
    // mapped = mapped + "<\\div>";
    list.push(<div>{mapped}</div>);
    //list.push(<br>);
    // list.push(mapped)+list.push(<br>);
    mapped = "";
  });

  return list;
};
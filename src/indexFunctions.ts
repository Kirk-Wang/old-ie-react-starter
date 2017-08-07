import { getTopLeft } from './utils';

let component: any;
let timer: any;

export default function(root: any) {
  component = root;
}

export function autoRoll() {
  let i = 1;
  timer = setInterval(() => {
    component.setState({ activeStyle: getTopLeft(1, -i) });
    i = (i >= 360) ? 1 : i + 4;
  }, 15);
}

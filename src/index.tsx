import * as React from 'react';
import * as classnames from 'classnames';
import pureRender from 'pure-render-deepcompare-decorator';
import {
  Go,
  Award,
  AwardList,
  Active,
} from './components';
import functions, { autoRoll } from './indexFunctions';
import { getTopLeft } from './utils';
import * as styles from './index.scss';

export interface IUIProps {
  className?: string;
  awards: Array<{src: string}>;
}

export interface IUIState {
  activeStyle?: {};
}

@pureRender
export default class extends React.Component<IUIProps, IUIState> {
  private static defaultProps = {
    className: '',
  };

  constructor(props: IUIProps) {
    super(props);
    functions(this);
    this.state = {
      activeStyle: {top: 0, left: 0},
    };
  }

  public componentDidMount() {
    autoRoll();
  }

  public render() {
    const { className, awards } = this.props;
    const { activeStyle } = this.state;
    const classnamesSec = classnames(styles.sec, className);
    return (
      <section className={classnamesSec}>
        <AwardList>
          {awards.map((award, index) => <Award key={index} style={getTopLeft(45, index + 1)} {...award} />)}
          <Active style={activeStyle} />
        </AwardList>
        <Go />
      </section>
    );
  }
}

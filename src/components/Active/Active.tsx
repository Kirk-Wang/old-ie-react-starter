import * as React from 'react';
import * as classnames from 'classnames';
import pureRender from 'pure-render-deepcompare-decorator';
import * as styles from './Active.scss';

export interface IAcitveProps {
  className?: string;
  style?: {};
}

@pureRender
class Acitve extends React.Component<IAcitveProps, any> {
  private static defaultProps = {
    className: '',
    style: {},
  };

  public render() {
    const { children, className, style } = this.props;
    const classnamesSec = classnames(styles.sec, className);
    return (
      <section style={style} className={classnamesSec}>{children}</section>
    );
  }
}

export default Acitve;

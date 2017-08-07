import * as React from 'react';
import * as classnames from 'classnames';
import pureRender from 'pure-render-deepcompare-decorator';
import * as styles from './Award.scss';

export interface IAwardProps {
  className?: string;
  style?: {};
  src: string;
}

@pureRender
class Award extends React.Component<IAwardProps, any> {
  private static defaultProps = {
    className: '',
    style: {},
    img: '',
  };

  public render() {
    const { className, style, src } = this.props;
    const classnamesSec = classnames(styles.sec, className);
    return (
      <section style={style} className={classnamesSec}>
        <img src={src} />
      </section>
    );
  }
}

export default Award;

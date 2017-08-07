import * as React from 'react';
import * as classnames from 'classnames';
import pureRender from 'pure-render-deepcompare-decorator';
import * as style from './Go.scss';

export interface IGoProps {
  className?: string;
}

@pureRender
class Go extends React.Component<IGoProps, any> {
  private static defaultProps = {
    className: '',
  };

  public render() {
    const { children, className } = this.props;
    const classnamesSec = classnames(style.sec, className);
    return (
      <section className={classnamesSec}>{children}</section>
    );
  }
}

export default Go;

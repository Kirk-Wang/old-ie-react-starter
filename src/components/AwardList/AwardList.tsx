import * as React from 'react';
import * as classnames from 'classnames';
import pureRender from 'pure-render-deepcompare-decorator';
import * as style from './AwardList.scss';

export interface IAwardListProps {
  className?: string;
}

@pureRender
class AwardList extends React.Component<IAwardListProps, any> {
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

export default AwardList;

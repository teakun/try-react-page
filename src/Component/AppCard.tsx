import React from 'react';
import { AppItem, AppCardProps } from '../Interface/AppItem'

class AppCard extends React.Component<AppCardProps> {
  constructor(props: AppCardProps) {
    super(props);
  }

  render() {
    return (
      <div className='app-item'>
        <p className='app-image'>
          <img src={this.props.item.image} />
        </p>
        <div className='app-content'>
          <div className='app-title'>
            {this.props.item.title}
          </div>
          <div className='app-description'>
            {this.props.item.description}
          </div>
        </div>
      </div>
    )
  }
}

export default AppCard;

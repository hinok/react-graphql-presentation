import React, { Component, PropTypes } from 'react';
import './style.css';

class SourceInfo extends Component {
  constructor(...args) {
    super(...args);

    this.state = {
      visible: false
    };

    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState((prevState) => ({
      visible: !prevState.visible
    }));
  }

  render() {
    const {
      type,
      title,
      author,
      published,
      lastAccess,
      light,
      url,
      ...rest
    } = this.props;

    const { visible } = this.state;

    const klass = [
      'source-info',
      `${visible ? 'source-info--visible' : ''}`,
      `${light ? 'source-info--light' : ''}`
    ];

    return (
      <div className={klass.join(' ')} {...rest}>
        <div className="source-info__icon" onClick={this.handleToggle}>
          <i className="material-icons">info_outline</i>
        </div>
        <a href={url} className="source-info__content">
          <div className="source-info__title">{title}</div>
          <div className="source-info__author">By <span>{author}</span></div>
          {published && <div className="source-info__published">Published <span>{published}</span></div>}
          {lastAccess && <div className="source-info__last-access">Last access <span>{lastAccess}</span></div>}
        </a>
      </div>
    );
  }
}

SourceInfo.propTypes = {
  author: PropTypes.string.isRequired,
  lastAccess: PropTypes.string.isRequired,
  light: PropTypes.bool,
  published: PropTypes.string,
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  url: PropTypes.string.isRequired
};

SourceInfo.defaultProps = {
  light: false,
  type: 'article',
  published: undefined
};

export default SourceInfo;

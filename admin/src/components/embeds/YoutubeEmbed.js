import React from 'react';
import PropTypes from 'prop-types';
class YoutubeEmbed extends React.Component {
  render() {
    const { attrs } = this.props;
    const videoId = attrs.matches[1];

    return <iframe className={this.props.isSelected ? 'ProseMirror-selectednode' : ''} src={`https://www.youtube.com/embed/${videoId}?modestbranding=1`} />;
  }
}
YoutubeEmbed.propTypes = {
  attrs: PropTypes.any.isRequired,
  isSelected: PropTypes.bool.isRequired,
};

export default YoutubeEmbed;

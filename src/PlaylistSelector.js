import React from 'react';
import Checkbox from './Checkbox';

class PlaylistSelector extends React.Component {
  constructor(props) {
    super(props);
    this.toggleCheckbox = this.toggleCheckbox.bind(this);
  }

  toggleCheckbox(playlist_id) {
    this.props.onChange(playlist_id);
  }

  render() {
    return (
      <div id="playlistSelector" className={this.props.className}>
        <div><b>Tracked Playlists</b></div>
        <button onClick={this.props.onShuffle}>Combine Playlists</button>
        {this.props.playlists.map(p =>
          <Checkbox
          key={p.playlist_id}
          label={p.name}
          value={p.playlist_id}
          checked={p.is_default}
          handleCheckboxChange={this.toggleCheckbox}
          />
        )}
      </div>
    );
  }
}

export default PlaylistSelector;
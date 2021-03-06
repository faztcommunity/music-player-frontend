import React, { useContext } from 'react';
import { ReactComponent as NextIcon } from '@icons/skip-forward.svg';
import { ReactComponent as PauseIcon } from '@icons/pause.svg';
import { ReactComponent as PlayIcon } from '@icons/play.svg';
import { ReactComponent as PreviousIcon } from '@icons/skip-back.svg';
import { ReactComponent as RepeatIcon } from '@icons/repeat.svg';
import { ReactComponent as ShuffleIcon } from '@icons/shuffle.svg';

import MusicPlayerContext from '@context/MusicPlayer';

function MusicPlayer() {
  const { playing, active, togglePlaying } = useContext(MusicPlayerContext);

  return (
    <div className="music-player-box">
      {active && (
        <div className="music-player">
          <MusicPlayerIcon title="Shuffle" icon={ShuffleIcon} />
          <MusicPlayerIcon title="Skip back" icon={PreviousIcon} />
          <MusicPlayerIcon
            title={playing ? 'Pause' : 'Play'}
            icon={playing ? PauseIcon : PlayIcon}
            extraClasses="music-player-icon--toggle-play"
            onClick={togglePlaying}
          />
          <MusicPlayerIcon title="Skip forward" icon={NextIcon} />
          <MusicPlayerIcon title="Repeat" icon={RepeatIcon} />
        </div>
      )}
    </div>
  );
}

function MusicPlayerIcon({ icon: Icon, extraClasses, ...rest }) {
  return <Icon {...rest} className={'music-player-icon ' + extraClasses} />;
}

export default MusicPlayer;

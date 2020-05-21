import React from 'react';
import Button from '@material-ui/core/Button'

export default function QuickWaterToggleButton({handleWaterToggle, quickWaterToggle, styles}) {
  return(
    quickWaterToggle ?
      <Button
        className={styles}
        onClick={handleWaterToggle}
        variant="contained"
        color="primary"
      > 
        Quick Water Toggle
      </Button>
    :
    <Button
      className={styles}
      onClick={handleWaterToggle}
      variant="contained"
    >
      Quick Water Toggle
    </Button>
  );
}


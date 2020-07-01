import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons';
import { ThemedStyles, Theme, useStyles } from '../../ui/themes';
import { observer } from 'mobx-react';
import { BooleanStore } from '../../ui/generic_store';
const baseStyles = require('./theme_switcher.module.css');

type ThemeSwitcherStyles = {
  logoContainer: string;
  logoContainerAnimation: string;
};

const themedStyles: ThemedStyles<ThemeSwitcherStyles> = {
  [Theme.LIGHT]: {
    logoContainer: baseStyles.lightLogoContainer,
    logoContainerAnimation: baseStyles.lightAnimation,
  },
  [Theme.DARK]: {
    logoContainer: baseStyles.darkLogoContainer,
    logoContainerAnimation: baseStyles.darkAnimation,
  },
};

type BaseThemeSwitcherProps = {
  store: BooleanStore;
}

export const ThemeSwitcher = observer(({ store }: BaseThemeSwitcherProps) => {
  const styles = useStyles(themedStyles);
  const [animate, setAnimate] = React.useState(styles.logoContainer)
  const handleClick = React.useCallback(() => {
    store.setValue(!store.value);
    setAnimate(styles.logoContainerAnimation);
  }, [store, styles.logoContainerAnimation]);

  const onAnimationEnd = React.useCallback(() => {
    setAnimate(styles.logoContainer);
  }, [styles.logoContainer])

  return (
    <div className={animate} onClick={handleClick} onAnimationEnd={onAnimationEnd}>
      <FontAwesomeIcon icon={store.value ? faSun : faMoon}/>
    </div>
  );
});

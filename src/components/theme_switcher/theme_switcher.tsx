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
  inputToggle: string;
  label: string;
};

const themedStyles: ThemedStyles<ThemeSwitcherStyles> = {
  [Theme.LIGHT]: {
    logoContainer: baseStyles.lightLogoContainer,
    logoContainerAnimation: baseStyles.lightAnimation,
    inputToggle: baseStyles.inputToggle,
    label: baseStyles.lightLabel,
  },
  [Theme.DARK]: {
    logoContainer: baseStyles.darkLogoContainer,
    logoContainerAnimation: baseStyles.darkAnimation,
    inputToggle: baseStyles.inputToggle,
    label: baseStyles.darkLabel,
  },
};

type BaseThemeSwitcherProps = {
  store: BooleanStore;
}

export const ThemeSwitcher = observer(({ store }: BaseThemeSwitcherProps) => {
  const styles = useStyles(themedStyles);
  const [animate, setAnimate] = React.useState(styles.logoContainer)
  const handleToggle = React.useCallback(() => {
    store.setValue(!store.value);
    setAnimate(styles.logoContainerAnimation);
  }, [store, styles.logoContainerAnimation]);

  const onAnimationEnd = React.useCallback(() => {
    setAnimate(styles.logoContainer);
  }, [styles.logoContainer])

  return (
    <>
      <input className={styles.inputToggle} type='checkbox' checked={store.value} onChange={handleToggle}/>
      <label className={styles.label}>
        <div className={animate} onClick={handleToggle} onAnimationEnd={onAnimationEnd}>
          <FontAwesomeIcon icon={store.value ? faSun : faMoon}/>
        </div>
      </label>
    </>
  );
});

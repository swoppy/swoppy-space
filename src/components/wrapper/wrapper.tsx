import React from 'react';
import { Theme, ThemedStyles, useStyles } from '../../ui/themes';
const baseStyles = require('./wrapper.module.css');

type WrapperStyles = {
  background: string;
}

const themedStyles: ThemedStyles<WrapperStyles> = {
  [Theme.LIGHT]: {
    background: baseStyles.daylightBackground,
  },
  [Theme.DARK]: {
    background: baseStyles.midnightBackground,
  },
};

type WrapperProps = {
  children: React.ReactNode;
};

export const Wrapper = React.memo(({ children }: WrapperProps) => {
  const styles = useStyles(themedStyles);
  return (
    <div className={styles.background}>
      {children}
    </div>
  );
});
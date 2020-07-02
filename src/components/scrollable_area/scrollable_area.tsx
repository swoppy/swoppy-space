import React from 'react';
const styles = require('./scrollable_area.module.css');

type ScrollableAreaProps = {
  children: React.ReactNode;
};

export const ScrollableArea = ({ children }: ScrollableAreaProps) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};
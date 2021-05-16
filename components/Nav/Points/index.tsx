import { FC } from 'react';
import classNames from 'classnames';

import navStyles from '../Nav.module.scss';
import styles from './Points.module.scss';

import { FireIcon } from './Icons/FireIcon';
import { StarIcon } from './Icons/StarIcon';

import { SelectivelyVisibleElementType } from '../../../types/types';

export const Points: FC<SelectivelyVisibleElementType> = ({ visibleOnClassName }) => (
  <ul className={classNames('flex unstyledList', visibleOnClassName)}>
    <li className={classNames('flex alignCenter', navStyles.multipleGroup)}>
      <FireIcon />
      <span className={styles.number}>5</span>
    </li>
    <li className={classNames('flex alignCenter', navStyles.multipleGroup)}>
      <StarIcon />
      <span className={styles.number}>100</span>
    </li>
  </ul>
);
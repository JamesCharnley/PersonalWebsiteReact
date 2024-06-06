import itemStyles from './GridItem.module.css';

export function GridItem({children}){
  return <div className={itemStyles.grid_item}>{children}</div>;
}
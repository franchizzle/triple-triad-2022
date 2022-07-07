import React from 'react';

import Card from './Card';
import { useDrag, DragPreviewImage } from 'react-dnd';
import Logo from '../assets/test.png';

export default function DraggableCard(props) {
  // const [{ isDragging }, dragRef] = useDrag({
  //   type: "card",
  //   item: () => (props.moves.selectCard(props.index)),
  //   collect: monitor => ({
  //     isDragging: !!monitor.isDragging(),
  //   }),
  // })
  const { moves, index } = props;
  const [{ isDragging }, dragRef, preview] = useDrag(
    () => ({
      type: "card",
      item: () => { 
        moves.selectCard(index);
        return { index };
      },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [index],
  )
  return (
    <>
      {/* <DragPreviewImage connect={preview} src={ props.selectedCard && { uri: props.selectedCard.image }} /> */}
      <div className="draggable-card-wrapper" ref={dragRef}>
        <Card {...props} style={{ opacity: isDragging ? 0.5 : 1 }} />
      </div>
    </>
  )
}
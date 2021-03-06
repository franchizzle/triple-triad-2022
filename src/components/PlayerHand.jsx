import React, { Component } from 'react';

import DraggableCard from './DraggableCard';

/* Player Hand
 * @props player: the boardgame.io game object for the current player
 * @props active: keeps track of whether or not it is this player turn to pick
 * @props hand: boardgame.io game object for the player's current cards
 * @props score: boardgame.io game object for the player's current score
*/
class PlayerHand extends Component {
  render() {
    const { active, hand, player, selectedCard } = this.props;
    return (
      <div className={`player ${active ? "current" : ""}`}>
        {
          hand.map((card, index) => {
            return (
              <DraggableCard
                player={player}
                index={index}
                onCardClick={(index) => this.props.onCardClick(index)}
                card={card}
                selectedCard={selectedCard}
                moves={this.props.moves}
                key={index}
              />
            )
          })
        }
      </div>
    )
  }
}

export default PlayerHand;

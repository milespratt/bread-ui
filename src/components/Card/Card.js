import React from "react";
// import PropTypes from "prop-types";
import { Avatar, Button } from "../";
import CardStyles from "./Card.styles";

function Card(props) {
  return (
    <CardStyles>
      {props.cardTitle && (
        <header className="card__header">
          {(props.iconText || props.iconImage) && (
            <Avatar size="tiny" text={props.iconText} image={props.iconImage} />
          )}
          <span className="card__title">{props.cardTitle}</span>
          <div className="card__actions">
            {props.cardActions.map((cardAction) => (
              <Button key={Math.random() * 1000000} {...cardAction} />
            ))}
          </div>
        </header>
      )}

      <div className="card__body">
        {props.cardSections.map((cardSection) => {
          return (
            <div
              key={Math.random() * 1000000}
              className={
                cardSection.sub
                  ? "card__section card__section--sub"
                  : cardSection.dim
                  ? "card__section card__section--dim"
                  : "card__section"
              }
            >
              {cardSection.header && (
                <div className="card__section__header">
                  <span className="card__section__title">
                    {cardSection.header.title}
                  </span>
                  {cardSection.header.actions &&
                    cardSection.header.actions.map((action) => {
                      return (
                        <div
                          className="card__section__actions"
                          key={Math.random() * 1000000}
                        >
                          <Button
                            secondary={action.secondary}
                            text={action.text}
                            type={action.type}
                          />
                        </div>
                      );
                    })}
                </div>
              )}
              <div className="card__section__content">
                {cardSection.content.map((content) => (
                  <p key={Math.random() * 1000000}>{content}</p>
                ))}
              </div>
              {cardSection.actions && (
                <div className="card__section__actions">
                  {cardSection.actions.map((action) => {
                    return (
                      <Button
                        secondary={action.secondary}
                        text={action.text}
                        type={action.type}
                        key={Math.random() * 1000000}
                      />
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
      {props.cardFooterActions && (
        <footer className="card__footer">
          {props.cardFooterActions.map((action) => {
            return (
              <Button
                secondary={action.secondary}
                text={action.text}
                type={action.type}
                key={Math.random() * 1000000}
              />
            );
          })}
        </footer>
      )}
    </CardStyles>
  );
}

Card.defaultProps = {
  cardActions: [],
  cardSections: [],
  // cardTitle: "Card",
  // iconText: "CA",
};

Card.propTypes = {};

export default Card;

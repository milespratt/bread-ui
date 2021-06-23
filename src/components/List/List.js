import React from "react";
// import PropTypes from "prop-types";

import ListStyles from "./List.styles";

import { Avatar, Button } from "../";

function List(props) {
  return (
    <ListStyles>
      {props.listItems.map((listItem) => {
        return (
          <div className="list__item">
            {listItem.icon && (
              <div className="list__icon">
                <Avatar size="tiny" />
              </div>
            )}
            <div className="list__item__content">
              <span className="list__item__title">{listItem.title}</span>
              <span className="list__item__subtitle">{listItem.subtitle}</span>
            </div>
            {listItem.controls && (
              <div className="list__item__controls">
                <Button />
              </div>
            )}
          </div>
        );
      })}
    </ListStyles>
  );
}

List.defaultProps = {
  listItems: [
    { icon: null, title: "Title", subtitle: "Subtitle", controls: null },
  ],
};

List.propTypes = {};

export default List;

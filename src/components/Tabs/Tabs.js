import React, { useState } from "react";
// import PropTypes from "prop-types";

import TabsStyles from "./Tabs.styles";
import { Card, List } from "../";

const tabs = [
  {
    title: "Tab One",
    content:
      "Tempor ullamco eiusmod in incididunt exercitation adipisicing sint in mollit. Sit laborum amet dolore labore sunt minim ullamco sunt officia sit mollit. Qui aliqua commodo qui eu proident. Magna qui ipsum do laborum laborum consequat laboris enim. Cupidatat ex ipsum laboris tempor enim laborum culpa. Eu sit enim ex enim incididunt sunt laborum voluptate duis. Lorem anim pariatur do eu adipisicing.",
  },
  {
    title: "Tab Two",
    content:
      "Cillum eiusmod deserunt aliquip commodo reprehenderit veniam minim irure dolore aute irure esse. Officia reprehenderit esse officia in est et in consectetur dolore dolor amet officia culpa. Cupidatat id eu ea irure amet eu. Reprehenderit laborum occaecat amet consequat velit fugiat sit. Consequat qui pariatur cillum nulla laborum consequat officia labore aliquip labore. Officia magna nostrud sit veniam consectetur anim eu sunt amet. Sit ipsum irure est dolore sunt cupidatat aliqua aliquip consectetur amet proident consectetur.",
  },
  {
    title: "Tab Three",
    content: (
      <List
        listItems={[
          {
            icon: true,
            title: "List Item One",
            subtitle: "Subtitle One",
            controls: true,
          },
          {
            icon: true,
            title: "List Item Two",
            subtitle: "Subtitle Two",
            controls: true,
          },
          {
            icon: true,
            title: "List Item Two",
            subtitle: "Subtitle Three",
            controls: true,
          },
        ]}
      />
    ),
  },
  {
    title: "Tab Four",
    content:
      "Consequat sit enim adipisicing et et aliqua veniam aliqua elit ex. Duis labore aliquip occaecat veniam exercitation. Dolore veniam eu fugiat anim incididunt velit. Ex enim tempor pariatur minim irure excepteur aute irure sit eu ipsum. Enim ullamco labore laborum dolor laboris ullamco cupidatat aliquip reprehenderit. Est adipisicing sint dolor est laboris.",
  },
  {
    title: "Tab Five",
    content: (
      <Card
        cardTitle="Card Title"
        iconText="Ca"
        cardFooterActions={[
          { text: "Confirm", type: "success" },
          { text: "Cancel", type: "critical" },
        ]}
        cardActions={[{ text: "Card Action", type: "info", secondary: true }]}
        cardSections={[
          {
            content: ["This is a card with an action"],
          },
        ]}
      />
    ),
  },
];

function Tabs(props) {
  const [openTab, setOpenTab] = useState(props.openTab || 0);
  return (
    <TabsStyles>
      <div className="tabs">
        {tabs.map((tab, i) => {
          return (
            <button
              key={tab.title}
              className={`${i === openTab ? `tab tab--active` : `tab`}`}
              onClick={() => {
                props.onTabChange ? props.onTabChange(i) : setOpenTab(i);
              }}
            >
              {tab.title}
            </button>
          );
        })}
      </div>
      <div className="content">
        {tabs
          .filter((tab, i) => {
            return i === openTab;
          })
          .map((tab) => {
            return (
              <div key={tab.content} className="tab__content">
                {/* <p>{tab.content}</p> */}
                {tab.content}
              </div>
            );
          })}
      </div>
    </TabsStyles>
  );
}

Tabs.defaultProps = {
  onTabChange: null,
};

Tabs.propTypes = {};

export default Tabs;

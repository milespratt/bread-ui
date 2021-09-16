import React, { useState } from "react";

import TabsStyles from "./Tabs.styles";

const tabs = [
  {
    title: "Tab One",
    content: (
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
        voluptatum doloremque vero optio ea fuga excepturi distinctio
        voluptates, molestiae aperiam, quibusdam voluptatibus dolor qui numquam
        rerum odit ipsa fugit minima?
      </p>
    ),
  },
  {
    title: "Tab Two",
    content: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos
        quasi consectetur odit perferendis asperiores nulla fuga rerum optio
        perspiciatis voluptatum deserunt, velit, modi et delectus aut? Incidunt
        reiciendis alias tenetur?
      </p>
    ),
  },
  {
    title: "Tab Three",
    content: (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat numquam
        corrupti laborum maiores! Iusto nisi iste nam vero, nemo rerum corrupti
        voluptate, commodi modi eos quidem, asperiores exercitationem dolore
        dignissimos?
      </p>
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
          // .filter((tab, i) => {
          //   return i === openTab;
          // })
          .map((tab, i) => {
            return (
              <div
                key={tab.title}
                className={`${
                  i === openTab
                    ? "tab__content"
                    : "tab__content tab__content--hidden"
                }`}
              >
                {/* <p>{tab.content}</p> */}
                {tab.content || "loading"}
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

import React, { useState } from "react";
import "./App.css";

import defaultImg1 from "./assets/images/default1.jpg";

import {
  Avatar,
  Badge,
  Banner,
  Button,
  Card,
  Carousel,
  Dropdown,
  Input,
  // Icon,
  // InputCheckbox,
  // InputRadio,
  // InputSwitch,
  // InputText,
  List,
  LoadingIndicator,
  Modal,
  Tabs,
  // Toast,
  ToastWrapper,
  // Tooltip,
} from "./components";

function App() {
  // const [headerOpacity, setHeaderOpacity] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [toasts, setToasts] = useState([]);
  // useEffect(() => {
  //   const headerOpacity = 1 - window.scrollY / 100;
  //   setHeaderOpacity(headerOpacity);
  //   window.onscroll = function () {
  //     const headerOpacity = 1 - window.scrollY / 100;
  //     if (headerOpacity > -1) {
  //       setHeaderOpacity(headerOpacity);
  //     }
  //   };
  //   return function cleanup() {
  //     window.onscroll = null;
  //   };
  // }, []);
  return (
    <div className="App">
      {/* <section style={{ opacity: headerOpacity }} className="page__header">
        <h1>breadUI</h1>
      </section> */}

      <div className="components">
        <div className="component__section">
          <h1 className="component__name">Avatar</h1>
          <Avatar />

          <h2 className="component__showcase__name">Sizes</h2>
          <div className="component__showcase">
            <Avatar size="micro" text="MI" />
            <Avatar size="tiny" text="TI" />
            <Avatar size="small" text="SM" />
            <Avatar size="medium" text="ME" />
            <Avatar size="large" text="LA" />
          </div>

          <h2 className="component__showcase__name">Custom Text</h2>
          <div className="component__showcase">
            <Avatar text="CT" />
          </div>

          <h2 className="component__showcase__name">Image</h2>
          <div className="component__showcase">
            <Avatar image={defaultImg1} />
          </div>
        </div>

        <div className="component__section">
          <h1 className="component__name">Badge</h1>
          <Badge />

          <h2 className="component__showcase__name">Custom Text</h2>
          <div className="component__showcase">
            <Badge text="Custom Text" />
          </div>

          <h2 className="component__showcase__name">Dismissible</h2>
          <div className="component__showcase">
            <Badge canDismiss text="Dismissible" />
          </div>

          <h2 className="component__showcase__name">Icon</h2>
          <div className="component__showcase">
            <Badge iconText="It" text="Icon" />
          </div>

          <h2 className="component__showcase__name">Thumbnail</h2>
          <div className="component__showcase">
            <Badge text="Thumbnail" iconImage={defaultImg1} />
          </div>

          <h2 className="component__showcase__name">Types</h2>
          <div className="component__showcase">
            <Badge iconText="De" text="Default" canDismiss />
            <Badge iconText="In" text="Info" type="info" canDismiss />
            <Badge iconText="Su" text="Success" type="success" canDismiss />
            <Badge iconText="Wa" text="Warn" type="warn" canDismiss />
            <Badge iconText="Cr" text="Critical" type="critical" canDismiss />
          </div>
        </div>

        <div className="component__section">
          <h1 className="component__name">Banner</h1>
          <Banner />

          <h2 className="component__showcase__name">Call to Action</h2>
          <div className="component__showcase">
            <Banner
              primary="Primary"
              secondary="Secondary"
              title="Default Banner"
            />
          </div>

          <h2 className="component__showcase__name">Types</h2>
          <div className="component__showcase">
            <Banner title="Default Banner" />
            <Banner
              title="Info Banner"
              type="info"
              text="Here's some information!"
            />
            <Banner title="Success Banner" type="success" text="It worked!" />
            <Banner
              title="Warning Banner"
              type="warn"
              text="This needs your attention"
            />
            <Banner
              title="Critical Banner"
              type="critical"
              text="Something broke"
            />
          </div>
        </div>

        <div className="component__section">
          <h1 className="component__name">Button</h1>
          <Button />
          <h2 className="component__showcase__name">Custom Text</h2>
          <div className="component__showcase">
            <Button text="Click me!" />
            <Button text="No, me!" />
            <Button text="Click me too!" />
          </div>

          <h2 className="component__showcase__name">Alternates</h2>
          <div className="component__showcase">
            <Button />
            <Button text="Secondary" secondary />
          </div>

          <h2 className="component__showcase__name">Types</h2>
          <div className="component__showcase">
            <Button />
            <Button type="info" />
            <Button type="success" />
            <Button type="warn" />
            <Button type="critical" />
          </div>

          <h2 className="component__showcase__name">Icons</h2>
          <div className="component__showcase">
            <Button iconText="De" />
            <Button iconText="In" type="info" />
            <Button iconText="Su" type="success" />
            <Button iconText="Wa" type="warn" />
            <Button iconText="Cr" type="critical" />
          </div>
        </div>

        <div className="component__section">
          <h1 className="component__name">Card</h1>
          <Card
            cardSections={[
              {
                header: { title: "Section Header" },
                content: ["This is a default card"],
              },
            ]}
          />
          <h2 className="component__showcase__name">Title</h2>
          <div className="component__showcase">
            <Card
              cardTitle="Card Title"
              cardSections={[
                {
                  content: ["This is a card with a title"],
                },
              ]}
            />
          </div>

          <h2 className="component__showcase__name">Icon</h2>
          <div className="component__showcase">
            <Card
              cardTitle="Card Title"
              iconText="Ca"
              cardSections={[
                {
                  content: ["This is a card with a title and icon"],
                },
              ]}
            />
          </div>

          <h2 className="component__showcase__name">Action</h2>
          <div className="component__showcase">
            <Card
              cardTitle="Card Title"
              iconText="Ca"
              cardActions={[
                { text: "Card Action", type: "info", secondary: true },
              ]}
              cardSections={[
                {
                  content: ["This is a card with an action"],
                },
              ]}
            />
          </div>

          <h2 className="component__showcase__name">Footer</h2>
          <div className="component__showcase">
            <Card
              cardTitle="Card Title"
              iconText="Ca"
              cardFooterActions={[
                { text: "Confirm", type: "success" },
                { text: "Cancel", type: "critical" },
              ]}
              cardActions={[
                { text: "Card Action", type: "info", secondary: true },
              ]}
              cardSections={[
                {
                  content: ["This is a card with an action"],
                },
              ]}
            />
          </div>

          <h2 className="component__showcase__name">Sections</h2>
          <div className="component__showcase">
            <Card
              cardTitle="Alex Smith"
              iconImage="https://thispersondoesnotexist.com/image"
              cardActions={[{ text: "Edit", type: "info", secondary: true }]}
              cardFooterActions={[
                { text: "Update", type: "success" },
                { text: "Discard Changes", type: "default" },
              ]}
              cardSections={[
                {
                  content: ["This is a sample card with multiple elements."],
                },
                {
                  header: { title: "Email" },
                  content: ["asmith@email.com"],
                },
                {
                  sub: true,
                  header: { title: "Addresses" },
                  content: ["171 Pearl St", "Newton, MA", "02458"],

                  actions: [
                    { text: "Edit", type: "info", secondary: true },
                    { text: "Delete", type: "critical", secondary: true },
                  ],
                },
                {
                  sub: true,
                  content: ["171 Pearl St", "Newton, MA", "02458"],
                  actions: [
                    { text: "Edit", type: "info", secondary: true },
                    { text: "Delete", type: "critical", secondary: true },
                  ],
                },
                {
                  sub: true,
                  content: ["171 Pearl St", "Newton, MA", "02458"],
                  actions: [
                    { text: "Edit", type: "info", secondary: true },
                    { text: "Delete", type: "critical", secondary: true },
                  ],
                },
                {
                  dim: true,
                  header: { title: "Note" },
                  content: [
                    "This is a note, it has a lot of useful info in it.",
                  ],
                },
                {
                  header: { title: "Final Section" },
                  content: ["This appears right before the footer"],
                },
              ]}
            />
          </div>
        </div>

        <div className="component__section">
          <h1 className="component__name">Carousel</h1>
          <div className="component__showcase">
            <Carousel slidesOnScreen={2}>
              <Card
                cardTitle="Card Title One"
                cardSections={[
                  {
                    content: ["This is a card with a title"],
                  },
                ]}
              />
              <Tabs />
              <Card
                cardTitle="Card Title"
                iconText="Ca"
                cardFooterActions={[
                  { text: "Confirm", type: "success" },
                  { text: "Cancel", type: "critical" },
                ]}
                cardActions={[
                  { text: "Card Action", type: "info", secondary: true },
                ]}
                cardSections={[
                  {
                    content: ["This is a card with an action"],
                  },
                ]}
              />
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
              <Card
                cardTitle="Card Title Three"
                cardSections={[
                  {
                    content: ["This is a card with a title"],
                  },
                ]}
              />
              <Card
                cardTitle="Card Title Four"
                cardSections={[
                  {
                    content: ["This is a card with a title"],
                  },
                ]}
              />
            </Carousel>
          </div>
          {/* <h2 className="component__showcase__name">Default</h2> */}
        </div>

        <div className="component__section">
          <h1 className="component__name">Dropdown</h1>
          <div className="component__showcase">
            <Dropdown />
          </div>
          {/* <h2 className="component__showcase__name">Default</h2> */}
        </div>

        <div className="component__section">
          <h1 className="component__name">Inputs</h1>
          <div className="component__showcase">
            {/* <Input type="button" /> */}
            <Input for="checkbox" type="checkbox" />
            {/* <Input for="color" type="color" /> */}
            <Input for="date" type="date" />
            <Input for="datetime-local" type="datetime-local" />
            <Input for="email" type="email" />
            <Input for="file" type="file" />
            {/* <Input for="hidden" type="hidden" /> */}
            {/* <Input for="image" type="image" src={defaultImg1} /> */}
            <Input for="month" type="month" />
            <Input for="number" type="number" />
            <Input for="password" type="password" />
            <Input for="radio" type="radio" />
            <Input for="range" type="range" />
            {/* <Input for="reset" type="reset" /> */}
            <Input for="search" type="search" />
            <Input for="select" type="select" />
            <Input for="submit" type="submit" />
            <Input for="switch" type="switch" />
            <Input for="tel" type="tel" />
            <Input for="text" type="text" />
            <Input for="time" type="time" />
            <Input for="url" type="url" />
            <Input for="week" type="week" />
          </div>
          {/* <h2 className="component__showcase__name">Default</h2> */}
        </div>

        <div className="component__section">
          <h1 className="component__name">List</h1>
          <h2 className="component__showcase__name">Default</h2>
          <div className="component__showcase">
            <List
              listItems={[
                {
                  icon: null,
                  title: "List Item One",
                  subtitle: null,
                  controls: null,
                },
                {
                  icon: null,
                  title: "List Item Two",
                  subtitle: null,
                  controls: null,
                },
                {
                  icon: null,
                  title: "List Item Two",
                  subtitle: null,
                  controls: null,
                },
              ]}
            />
          </div>
          <h2 className="component__showcase__name">Subtitles</h2>
          <div className="component__showcase">
            <List
              listItems={[
                {
                  icon: null,
                  title: "List Item One",
                  subtitle: "Subtitle One",
                  controls: null,
                },
                {
                  icon: null,
                  title: "List Item Two",
                  subtitle: "Subtitle Two",
                  controls: null,
                },
                {
                  icon: null,
                  title: "List Item Two",
                  subtitle: "Subtitle Three",
                  controls: null,
                },
              ]}
            />
          </div>
          <h2 className="component__showcase__name">Icons</h2>
          <div className="component__showcase">
            <List
              listItems={[
                {
                  icon: true,
                  title: "List Item One",
                  subtitle: "Subtitle One",
                  controls: null,
                },
                {
                  icon: true,
                  title: "List Item Two",
                  subtitle: "Subtitle Two",
                  controls: null,
                },
                {
                  icon: true,
                  title: "List Item Two",
                  subtitle: "Subtitle Three",
                  controls: null,
                },
              ]}
            />
          </div>

          <h2 className="component__showcase__name">Controls</h2>
          <div className="component__showcase">
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
          </div>
        </div>

        <div className="component__section">
          <h1 className="component__name">Loading Indicator</h1>
          <h2 className="component__showcase__name">Default</h2>
          <div className="component__showcase">
            <LoadingIndicator />
          </div>
        </div>

        <div className="component__section">
          <h1 className="component__name">Modal</h1>
          <h2 className="component__showcase__name">Default</h2>
          <div className="component__showcase">
            <Button onClick={() => setModalOpen(true)} text="Open Modal" />
            {modalOpen && (
              <Modal open={modalOpen} onDismiss={() => setModalOpen(false)} />
            )}
          </div>
        </div>

        <div className="component__section">
          <h1 className="component__name">Tabs</h1>
          <h2 className="component__showcase__name">Default</h2>
          <div className="component__showcase">
            <Tabs />
          </div>
        </div>

        <div className="component__section">
          <h1 className="component__name">Toast</h1>
          <h2 className="component__showcase__name">Default</h2>
          <div className="component__showcase">
            <Button
              onClick={() =>
                setToasts([
                  ...toasts,
                  {
                    text: "New toast",
                    id: Math.random() * 1000000,
                    type: "info",
                  },
                  {
                    text: "New toast",
                    id: Math.random() * 1000000,
                    type: "warn",
                  },
                  {
                    text: "New toast",
                    id: Math.random() * 1000000,
                    type: "success",
                  },
                  {
                    text: "New toast",
                    id: Math.random() * 1000000,
                    type: "critical",
                  },
                ])
              }
              text="Add Toasts"
            />
            <ToastWrapper setToasts={setToasts} toasts={toasts} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// <div className="component__section">
// <h1 className="component__name">Carousel</h1>
// <h2 className="component__showcase__name">Default</h2>
// <div className="component__showcase">
//   <Carousel />
// </div>
// </div>
//
// <div className="component__section">
// <h1 className="component__name">Dropdown</h1>
// <h2 className="component__showcase__name">Default</h2>
// <div className="component__showcase">
//   <Dropdown />
// </div>
// </div>
//
// <div className="component__section">
// <h1 className="component__name">Icon</h1>
// <h2 className="component__showcase__name">Default</h2>
// <div className="component__showcase">
//   <Icon />
// </div>
// </div>
//
// <div className="component__section">
// <h1 className="component__name">InputCheckbox</h1>
// <h2 className="component__showcase__name">Default</h2>
// <div className="component__showcase">
//   <InputCheckbox />
// </div>
// </div>
//
// <div className="component__section">
// <h1 className="component__name">InputRadio</h1>
// <h2 className="component__showcase__name">Default</h2>
// <div className="component__showcase">
//   <InputRadio />
// </div>
// </div>
//
// <div className="component__section">
// <h1 className="component__name">InputSwitch</h1>
// <h2 className="component__showcase__name">Default</h2>
// <div className="component__showcase">
//   <InputSwitch />
// </div>
// </div>
//
// <div className="component__section">
// <h1 className="component__name">InputText</h1>
// <h2 className="component__showcase__name">Default</h2>
// <div className="component__showcase">
//   <InputText />
// </div>
// </div>
//
// <div className="component__section">
// <h1 className="component__name">List</h1>
// <h2 className="component__showcase__name">Default</h2>
// <div className="component__showcase">
//   <List />
// </div>
// </div>
//
// <div className="component__section">
// <h1 className="component__name">LoadingIndicator</h1>
// <h2 className="component__showcase__name">Default</h2>
// <div className="component__showcase">
//   <LoadingIndicator />
// </div>
// </div>
//
// <div className="component__section">
// <h1 className="component__name">Modal</h1>
// <h2 className="component__showcase__name">Default</h2>
// <div className="component__showcase">
//   <Modal />
// </div>
// </div>
//
// <div className="component__section">
// <h1 className="component__name">Tabs</h1>
// <h2 className="component__showcase__name">Default</h2>
// <div className="component__showcase">
//   <Tabs />
// </div>
// </div>
//
// <div className="component__section">
// <h1 className="component__name">Toast</h1>
// <h2 className="component__showcase__name">Default</h2>
// <div className="component__showcase">
//   <Toast />
// </div>
// </div>
//
// <div className="component__section">
// <h1 className="component__name">Tooltip</h1>
// <h2 className="component__showcase__name">Default</h2>
// <div className="component__showcase">
//   <Tooltip />
// </div>
// </div>

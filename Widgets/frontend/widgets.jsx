import React from "react";
import ReactDOM from "react-dom";
import Clock from './clock';
import Tabs from './tabs';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(
    <Root />,
    root
  );
});

const Root = () => {
  return (
    <div>
      < Clock />
    < Tabs info={[
      {title: "one", content: "I am the first!"},
      {title: "two", content: "Second pane here!"},
      {title: "three", content: "Third pane here!"}
    ]}/>
    </div>
  );
};

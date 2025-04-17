import React from "react";
import "../../../shared/styles/chat.css";
import SearchBar from "../components/SearchBar";
import MessageDisplay from "./MessageDisplay";
import Navigation from "../../../shared/components/Navigation";

const Chat = () => {
  return (
    <div className="messages">
      <h2>Messages</h2>
      <SearchBar />
      <MessageDisplay />
      <Navigation />
    </div>
  );
};

export default Chat;

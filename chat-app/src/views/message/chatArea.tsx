import React, { useState, useRef } from 'react';
import { InputTextarea } from 'primereact/inputtextarea';
import ViewChatHeader from './chatHeader';
import { Avatar } from 'primereact/avatar';
import EmojiPicker from "emoji-picker-react";

const ViewChatArea: React.FC = () => {
    const [message, setMessage] = useState<string>("");
    const [messages, setMessages] = useState<string[]>([]);
    const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState<boolean>(false);
    const emojiPickerRef = useRef<HTMLDivElement | null>(null);
    

    const handleSendMessage = () => {
        if (message.trim()) {
            setMessages([...messages, message]);
            setMessage("");
        }
    };

    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const handleEmojiClick = (emojiObject: { emoji: string }) => {
        setMessage((prevMessage) => prevMessage + emojiObject.emoji);
    };

    const toggleEmojiPicker = () => {
        setIsEmojiPickerOpen(!isEmojiPickerOpen);
    };

    return (
        <div>
            <ViewChatHeader />
            <div className= 'msgContainer'>
                {messages.map((msg, index) => (
                    <div>
                        <div className={`rightMsgContent`}>
                            <div key={index} className={`rightMsg`}>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: msg.replace(/\n/g, "<br />"),
                                    }}
                                />
                            </div>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "flex-start",
                                width: "100%",
                                marginTop: "10px",
                            }}
                        >
                            <div className={`profileImg`}>
                                <Avatar
                                    className={`avatarStyleChat`}
                                    label='AS'
                                />
                            </div>
                            <div className={`leftMsgContent`}>
                                <div key={index} className={`leftMsg`}>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: msg.replace(/\n/g, "<br />"),
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='textareaSection'>
                <InputTextarea
                    autoResize
                    placeholder="Write message here..."
                    value={message}
                    onChange={handleMessageChange}
                    onKeyDown={handleKeyDown}
                    className='textArea'
                />
                <div
                    style={{
                        position: "absolute",
                        right: "82px",
                        top: "31px",
                        cursor: "pointer",
                    }}
                    className={`emojiStyle`}
                    onClick={toggleEmojiPicker}
                >
                    <span role="img" aria-label="emoji">
                        😊
                    </span>
                </div>
                {isEmojiPickerOpen && (
                    <div
                        ref={emojiPickerRef}
                        style={{ position: "absolute", bottom: "50px", right: "0px" }}
                    >
                        <EmojiPicker onEmojiClick={handleEmojiClick} />
                    </div>
                )}
                <button onClick={handleSendMessage} className='textAreaBtn'>
                    Send
                </button>
            </div>
        </div>
    );
};

export default ViewChatArea;

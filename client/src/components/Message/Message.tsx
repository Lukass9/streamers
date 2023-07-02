import React, { useState, useEffect } from "react";
import styles from "./Message.module.scss";

interface CustomMessageProps {
  message: string;
  duration: number;
  setErr: React.Dispatch<React.SetStateAction<string>>;
}

const Message: React.FC<CustomMessageProps> = ({
  setErr,
  message,
  duration,
}) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
      setErr("");
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration]);

  return visible ? <div className={styles.message}>{message}</div> : null;
};

export default Message;

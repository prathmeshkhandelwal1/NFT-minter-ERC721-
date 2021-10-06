import { Web3Modalfunction } from "../hooks/web3";
import React, { useState, useEffect } from "react";

const ConnectWallet = () => {
  const [isConnected, setIsConnected] = useState(false);
  const { web3, error, connectWallet, disconnect } = Web3Modalfunction();
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (web3) {
      setIsConnected(true);
      const userDetails = async () => {
        const address = await web3.eth.getAccounts();
        console.log(address);
        setAddress(address[0]);
      };
      userDetails();
    } else {
      setIsConnected(false);
    }
  }, [web3]);

  const connectHandler = async () => {
    console.log("handle triogger");
    await connectWallet();
  };

  const disconnectHandler = () => {
    disconnect();
  };
  console.log(isConnected);
  return (
    <div
      style={{
        width: "250px",
        textAlign: "center",
        overflow: "hidden",
        whiteSpace: "nowrap",
        textOverflow: "ellipsis",
      }}
      onClick={isConnected ? disconnectHandler : connectHandler}
    >
      {isConnected ? address : "Connect Wallet"}
    </div>
  );
};

export default ConnectWallet;

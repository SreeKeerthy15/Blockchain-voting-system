import React, { useState } from 'react';
import Web3 from 'web3';

function App() {
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        // Request wallet connection
        await window.ethereum.request({ method: 'eth_requestAccounts' });

        // Create web3 instance with the provider
        const web3 = new Web3(window.ethereum);

        // Get accounts
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);
      } catch (error) {
        console.error("User denied wallet connection.", error);
      }
    } else {
      alert('Please install MetaMask to use this feature.');
    }
  };

  return (
    <div className="App">
      <h1>Blockchain Voting System</h1>
      <button onClick={connectWallet}>Connect Wallet</button>
      {account && <p>Connected: {account}</p>}
    </div>
  );
}

export default App;

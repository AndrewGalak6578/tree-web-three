import logo from './logo.svg';
import './App.css';
import {ConnectButton} from '@suiet/wallet-kit';
import { useWallet } from '@suiet/wallet-kit';
import { useEffect } from 'react';
import { TransactionBlock} from "@mysten/sui.js";

function App() {
  const wallet = useWallet()
  useEffect(() => {
    if (!wallet.connected) return;
    console.log('connected wallet name: ', wallet.name)
    console.log('account address: ', wallet.account?.address)
    console.log('account publicKey: ', wallet.account?.publicKey)
  }, [wallet.connected])

  async function handleMoveCall() {
    const tx = new TransactionBlock();
    const packageObjectId = "0x1";
    tx.moveCall({
      target: `0x41d154bdf99fa90ce79b963561c83c206f8c9dc0b868ea3d7ab5b28d33a47bb4::devnet_nft::mint_to_sender`,
      arguments: [
        tx.pure("Sample NFT"), 
        tx.pure("sample minted NFT"),
        tx.pure("https://github.com/AndrewGalak6578/tree-web-three/blob/main/logo.png?raw=true")], 
    });
    await wallet.signAndExecuteTransactionBlock({
      transactionBlock: tx,
    });
  }

  async function handleSignMessage() {
    await wallet.signMessage({
      message: new TextEncoder().encode("Hello World"),
    });
  }

  return (
    <div className="App">
      
      
        <ConnectButton/>

        
      
      
    </div>
    
  );
}

export default App;

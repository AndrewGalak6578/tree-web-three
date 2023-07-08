import logo from './logo.svg';
import './App.css';
import {ConnectButton} from '@suiet/wallet-kit';
import { useWallet } from '@suiet/wallet-kit';
import { useEffect } from 'react';
import { TransactionBlock, testnetConnection} from "@mysten/sui.js";
import { JsonRpcProvider } from '@mysten/sui.js';

function App1() {
  const wallet = useWallet()
  const provider = new JsonRpcProvider(testnetConnection);
  

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
    const objects = await provider.getOwnedObjects({
        owner: wallet.account?.address,
      });
      const txn = await provider.getObject({
        id: objects.data[0].data.objectId,
        // fetch the object content field
        options: {showContent: true},
      });
      var s = Number(0);
      var len = Number(objects.data.length) ;
      console.log('Count of NFTs: ', len);
    await wallet.signMessage({
      message: new TextEncoder().encode("Hello World"),
      
    });
    console.log('account NFTs: ', objects);
    for (let i = 0; i < len; i += 1) {
      var nft_count = await provider.getObject({
        id: objects.data[i].data.objectId,
        options: {showContent: true},
      });
      if (nft_count.data.content.type === "0x41d154bdf99fa90ce79b963561c83c206f8c9dc0b868ea3d7ab5b28d33a47bb4::devnet_nft::DevNetNFT") {
        console.log('Yes', objects.data[i].data.objectId);
        
      }
      
    };
    
    
    console.log('NFT-Data Bsc:', txn);
    
  }

  return (
    <div className="App1">
      
      
        
        <button onClick={() => handleMoveCall()}>Mint NFT</button>
        <button onClick={() => handleSignMessage()}>Sign message</button>
        
        
      
      
    </div>
    
  );
}

export default App1;
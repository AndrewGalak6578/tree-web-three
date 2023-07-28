import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import App1 from './App1';
import App2 from './App2';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import {WalletProvider} from '@suiet/wallet-kit';
import '@suiet/wallet-kit/style.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <WalletProvider>
        <App />
        {/* <App1 /> */}
      </WalletProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
// const root1_NFT = ReactDOM.createRoot(document.getElementById('root1_NFT'));
// root1_NFT.render(
//   <React.StrictMode>
//     <WalletProvider>
//       <App2 />
//     </WalletProvider>
//   </React.StrictMode>
// )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

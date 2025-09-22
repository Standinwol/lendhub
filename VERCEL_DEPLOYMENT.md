# LendHub - Vercel Deployment Guide

This guide will help you deploy the LendHub DeFi application to Vercel.

## 🚀 Quick Deploy to Vercel

### Method 1: One-Click Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Standinwol/lendhub)

### Method 2: Manual Deployment

1. **Fork this repository** to your GitHub account

2. **Install Vercel CLI** (optional)
   ```bash
   npm i -g vercel
   ```

3. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with your GitHub account
   - Click "New Project"
   - Import your forked repository

4. **Configure Environment Variables**
   
   In your Vercel project dashboard, go to Settings → Environment Variables and add:
   
   ```
   INFURA_SEPOLIA_API_URL=https://sepolia.infura.io/v3/1cc77b4ae4464802afae31d98852cf25
   NEXT_PUBLIC_INFURA_SEPOLIA_API_URL=https://sepolia.infura.io/v3/1cc77b4ae4464802afae31d98852cf25
   ```

5. **Deploy**
   - Click "Deploy" in Vercel dashboard
   - Your app will be available at `https://your-project-name.vercel.app`

## 🔧 Local Development with Vercel Configuration

1. **Clone the repository**
   ```bash
   git clone https://github.com/Standinwol/lendhub.git
   cd lendhub
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your Infura API URL (already configured):
   ```
   INFURA_SEPOLIA_API_URL=https://sepolia.infura.io/v3/1cc77b4ae4464802afae31d98852cf25
   NEXT_PUBLIC_INFURA_SEPOLIA_API_URL=https://sepolia.infura.io/v3/1cc77b4ae4464802afae31d98852cf25
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Build for production** (test locally)
   ```bash
   npm run build
   npm start
   ```

## 📋 What's Configured for Vercel

### Files Added/Modified:

1. **`vercel.json`** - Vercel configuration (simplified)
   - Environment variables
   - Minimal configuration for Next.js auto-detection

2. **`next.config.js`** - Updated for better compatibility
   - Webpack polyfills for crypto and Node.js modules
   - Environment variable configuration
   - Browser fallbacks for server-side modules

3. **`package.json`** - Added polyfill dependencies
   - Browser-compatible crypto libraries
   - Stream and HTTP polyfills
   - Path and OS polyfills

4. **`.env.local`** - Environment configuration
   - Infura API URL pre-configured
   - Public environment variables for client-side access

5. **`.gitignore`** - Proper file exclusions
   - Next.js build files
   - Environment files
   - Vercel deployment files

## 🌐 Network Configuration

The application is configured to work with:
- **Ethereum Sepolia Testnet**
- **Infura API**: `https://sepolia.infura.io/v3/1cc77b4ae4464802afae31d98852cf25`
- **MetaMask Integration** for wallet connections

### Contract Addresses (Sepolia):
- LendingPool: `0xF5D9C5C8073D700696773bE0cD67FDfAaA9A8bD0`
- LendingHelper: `0x5620bE39D5B89C5D8Ece7E1509B5eC5B6927Da98`
- DAI Token: `0xF2e2C8A502657c37ad4d37F2BefaBEb308315152`
- USDC Token: `0x9603ed1F72C87d33d48a5e3A4A0915235BA46cFe`
- LINK Token: `0x05332eF900c3B926ED013F66b64A85646Fd82092`

## 🔍 Testing the Deployment

1. **Get Sepolia ETH** from faucets:
   - [Infura Sepolia Faucet](https://www.infura.io/faucet)
   - [Alchemy Sepolia Faucet](https://sepoliafaucet.com)

2. **Connect MetaMask** to Sepolia testnet

3. **Test core features**:
   - Connect wallet
   - Supply assets
   - Borrow assets
   - Withdraw/Repay

## 🛠️ Troubleshooting

### Common Issues:

1. **Build Failures**
   - Ensure all polyfill dependencies are installed
   - Check that `next.config.js` webpack configuration is correct

2. **MetaMask Connection Issues**
   - Make sure you're connected to Sepolia testnet
   - Clear browser cache and cookies

3. **Transaction Failures**
   - Ensure sufficient Sepolia ETH for gas fees
   - Check contract addresses are correct

4. **Environment Variable Issues**
   - Verify environment variables are set in Vercel dashboard
   - Use `NEXT_PUBLIC_` prefix for client-side variables

## 📞 Support

If you encounter issues:
1. Check the browser console for errors
2. Verify network connection to Sepolia
3. Ensure all environment variables are properly set
4. Check that contract addresses are correct for Sepolia

## 🎯 Live Demo

Once deployed, your LendHub application will be available at your Vercel URL, providing a full DeFi lending and borrowing experience on Ethereum Sepolia testnet.

import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Events from './components/Events';
import Interior from './components/Interior';
import Access from './components/Access';
import Footer from './components/Footer';

export default function App() {
  // ダミーのサインアウト処理
  const handleSignOut = () => {
    console.log('サインアウトしました');
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />    {/* ブラウザデフォルトリセット */}

      <Header user={null} onSignOut={handleSignOut} />

      <Hero />
      <About />
      <Services />
      <Gallery />
      <Events />
      <Interior />
      <Access />

      <Footer />
    </ThemeProvider>
  );
}



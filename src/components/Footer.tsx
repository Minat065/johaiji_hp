// src/components/Footer.tsx
import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Instagram } from '@mui/icons-material';

export default function Footer() {
  return (
    <Box component="footer" sx={{ py: 4, background: '#333', color: '#fff' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* 列1：寺院名・説明 */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>上輩寺（じょうはいじ）</Typography>
            <Typography variant="body2">
              神奈川県小田原市の時宗寺院。歴史とともに地域に寄り添う。
            </Typography>
          </Grid>

          {/* 列2：ナビリンク */}
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" gutterBottom>サイト内リンク</Typography>
            {['トップ', 'About', 'Services', 'Gallery', 'Events', 'Interior', 'Access'].map((label) => (
              <Typography key={label} variant="body2">
                <Link href={`#${label.toLowerCase()}`} color="inherit" underline="hover">
                  {label}
                </Link>
              </Typography>
            ))}
          </Grid>

          {/* 列3：連絡先・SNS */}
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" gutterBottom>お問い合わせ</Typography>
            <Typography variant="body2">
              <Link href="mailto:lock.extinguish@gmail.com" color="inherit" underline="hover">
                lock.extinguish@gmail.com
              </Link>
            </Typography>
            <Box sx={{ mt: 1 }}>
              <IconButton href="#" color="inherit" aria-label="Facebook">
                <Facebook />
              </IconButton>
              <IconButton href="#" color="inherit" aria-label="Instagram">
                <Instagram />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        {/* 著作権 */}
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="caption">
            © {new Date().getFullYear()} 上輩寺. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

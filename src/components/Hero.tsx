import React from 'react';
import { Box, Typography, Button, useTheme } from '@mui/material';
import {styled } from '@mui/material/styles';
import amidaImg from '../assets/本堂_阿弥陀如来像.jpg';

const HeroContainer = styled(Box)`
  position: relative;
  height: 70vh;
  background: url(${amidaImg}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Overlay = styled(Box)`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
`;

const Content = styled(Box)`
  position: relative;
  color: #fff;
  z-index: 1;
  max-width: 80%;
`;

export default function Hero() {
  const theme = useTheme();

  return (
    <HeroContainer>
      <Overlay />
      <Content>
        <Typography variant="h2" gutterBottom sx={{ fontWeight: 'bold' }}>
          ようこそ、上輩寺へ
        </Typography>
        <Typography variant="h6" paragraph>
          700年以上の歴史を紡ぐ時宗の寺院。四季折々の風景とともに、皆さまをお迎えします。
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          詳しく見る
        </Button>
      </Content>
    </HeroContainer>
  );
}

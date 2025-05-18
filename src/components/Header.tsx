import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, useTheme, useMediaQuery, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
// ↓ SVGやPNGをimgタグで使う
import logoUrl from '../assets/寺紋(黒).jpg'; // ← フォルダ名typo修正

interface HeaderProps {
  user: any;
  onSignOut: () => void;
}

const navItems = ['About', 'Services', 'Gallery', 'Events', 'Interior', 'Access'];

export default function Header({ user, onSignOut }: HeaderProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const drawer = (
    <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
      <List>
        {navItems.map((text) => (
          <ListItem button key={text} onClick={() => setDrawerOpen(false)}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        <ListItem button onClick={onSignOut}>
          <ListItemText primary="Sign Out" />
        </ListItem>
      </List>
    </Drawer>
  );

  return (
    <AppBar position="sticky" color="transparent" elevation={0}>
      <Toolbar>
        {/* 画像としてロゴを表示 */}
        <img src={logoUrl} alt="寺紋ロゴ" width={48} height={48} style={{ marginRight: 8 }} />
        <Typography variant="h6" sx={{ flexGrow: 1, ml: 1 }}>
          上輩寺
        </Typography>

        {isMobile ? (
          <>
            <IconButton edge="end" onClick={() => setDrawerOpen(true)}>
              <MenuIcon />
            </IconButton>
            {drawer}
          </>
        ) : (
          <>
            {navItems.map((item) => (
              <Button key={item} sx={{ ml: 2 }}>
                {item}
              </Button>
            ))}
            <Button color="secondary" variant="outlined" sx={{ ml: 2 }} onClick={onSignOut}>
              Sign Out
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
}


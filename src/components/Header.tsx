import React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, useTheme, useMediaQuery, Drawer, List, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
// ↓ SVGやPNGをimgタグで使う
import logoUrl from '../assets/寺紋(黒).jpg'; // ← フォルダ名typo修正

interface HeaderProps {
  user: any;
  onSignOut: () => void;
}

const navs = [
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Gallery', id: 'gallery' },
  { label: 'Events', id: 'events' },
  { label: 'Interior', id: 'interior' },
  { label: 'Access', id: 'access' },
];

export default function Header({ user, onSignOut }: HeaderProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const drawer = (
    <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
      <List>
        {navs.map(({ label, id }) => (
          <ListItemButton key={id} onClick={() => scrollTo(id)}>
            <ListItemText primary={label} />
          </ListItemButton>
        ))}
        <ListItemButton onClick={onSignOut}>
          <ListItemText primary="Sign Out" />
        </ListItemButton>
      </List>
    </Drawer>
  );

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setDrawerOpen(false);
  };

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
            {navs.map(({ label, id }) => (
              <Button key={id} sx={{ ml: 2 }} onClick={() => scrollTo(id)}>
                {label}
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


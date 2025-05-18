import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import EmojiObjectsIcon from '@mui/icons-material/EmojiObjects';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

const services = [
  {
    icon: <EmojiObjectsIcon fontSize="large" />,
    title: "法要・年中行事",
    description: "年間を通して各種法要・行事を厳修。地域住民と共に伝統を守り続けています。",
  },
  {
    icon: <VolunteerActivismIcon fontSize="large" />,
    title: "葬儀・供養",
    description: "ご葬儀や永代供養墓、ペット供養まで幅広く対応しています。",
  },
  {
    icon: <AutoStoriesIcon fontSize="large" />,
    title: "読経会",
    description: "毎月第3日曜日 8:30〜 本堂にて開催。どなたでも参加可能です。",
  },
];

export default function Services() {
  return (
    <Box id="services" sx={{
     py: { xs: 4, md: 8 },            // スマホ時は小さく、PC時は大きく
     px: { xs: 2, sm: 4, md: 6 },      // 横余白も段階調整
     background: '#fff'
   }}>
      <Typography variant="h4" align="center" fontWeight={600} gutterBottom>
        活動・サービス
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {services.map((srv, idx) => (
          <Grid item xs={12} md={4} key={idx}>
            <Card elevation={3} sx={{ minHeight: 210 }}>
              <CardContent sx={{ textAlign: "center" }}>
                {srv.icon}
                <Typography variant="h6" fontWeight={600} sx={{ mt: 2 }}>
                  {srv.title}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {srv.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

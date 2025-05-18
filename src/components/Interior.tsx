import React from "react";
import { Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import Grid from "@mui/material/Grid";
import amidaImg from "../assets/本堂_阿弥陀如来像.jpg";
import yakushiImg from "../assets/本堂_薬師如来.jpg";
import kannonImg from "../assets/灌仏会_本尊.jpg";
import amaTeaImg from "../assets/灌仏会_甘茶.jpg";

const statues = [
  {
    img: amidaImg,
    title: "阿弥陀如来像",
    desc: "本堂のご本尊。時宗寺院の中心となる仏像であり、地域の信仰の象徴です。",
  },
  {
    img: yakushiImg,
    title: "薬師如来像",
    desc: "人々の病気平癒・心身健康を願い安置されている、優しさ溢れるお姿です。",
  },
  {
    img: kannonImg,
    title: "灌仏会 本尊",
    desc: "4月8日、花まつり（灌仏会）でお祀りされるお釈迦さま。年に一度だけお参りできます。",
  },
  {
    img: amaTeaImg,
    title: "灌仏会 甘茶",
    desc: "花まつりの日に参拝者へ振る舞われる甘茶と祭壇の様子。春の恒例行事です。",
  },
];

export default function Interior() {
  return (
    <Box id="interior" sx={{ py: 8 }}>
      <Typography variant="h4" align="center" fontWeight={600} gutterBottom>
        本堂内部・仏像紹介
      </Typography>
      <Grid container spacing={4} justifyContent="center" sx={{ mt: 2 }}>
        {statues.map((s, i) => (
          <Grid item xs={12} md={6} key={i}>
            <Card elevation={3} sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, minHeight: 250 }}>
              <CardMedia
                component="img"
                image={s.img}
                alt={s.title}
                sx={{
                  width: { xs: "100%", md: 220 },
                  height: { xs: 220, md: "100%" },
                  objectFit: "cover",
                  borderRadius: { xs: "14px 14px 0 0", md: "14px 0 0 14px" },
                }}
              />
              <CardContent sx={{ flex: 1 }}>
                <Typography variant="h6" fontWeight={600}>
                  {s.title}
                </Typography>
                <Typography variant="body2" sx={{ mt: 2 }}>
                  {s.desc}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

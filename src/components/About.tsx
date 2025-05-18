import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import honboImg from '../assets/本堂_全体.jpg';
import sanmonImg from '../assets/山門.jpg';
import sakuraImg from '../assets/本堂_全体_桜.jpg';
// …他も同様に


export default function About() {
  return (
    <Paper elevation={2} sx={{ my: 6, mx: "auto", maxWidth: 900, p: { xs: 2, md: 4 } }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={5}>
          <img
            src={honboImg}
            alt="上輩寺 本堂"
            style={{
              width: "100%",
              maxWidth: 360,
              borderRadius: 14,
              boxShadow: "0 6px 24px rgba(0,0,0,0.09)",
              margin: "0 auto",
              display: "block",
            }}
          />
        </Grid>
        <Grid item xs={12} md={7}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
            上輩寺について
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, lineHeight: 1.85, fontSize: "1.08rem" }}>
            上輩寺（じょうはいじ）は、神奈川県小田原市酒匂に創建され、700年以上の歴史を誇る時宗寺院です。<br />
            境内には四季折々の草花が咲き誇り、地域の信仰と共に歩み続けてきました。
            <br /><br />
            寺院の本尊は阿弥陀如来。地域に根ざした活動、法要・供養・相談・講話なども積極的に行っています。<br />
            歴代住職の墓や五輪塔、春の桜や秋の銀杏も見どころの一つです。
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            創建：鎌倉時代末期<br />
            宗派：時宗（じしゅう）<br />
            所在地：神奈川県小田原市酒匂
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
}

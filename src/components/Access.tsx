
import React from "react";
import { Box, Typography, Grid, Paper, Link } from "@mui/material";
import gateImg from "../assets/山門.jpg";

export default function Access() {
  return (
    <Box sx={{ py: 8, background: "#fafafa" }}>
      <Typography variant="h4" align="center" fontWeight={600} gutterBottom>
        アクセス・連絡先
      </Typography>
      <Grid container spacing={4} justifyContent="center" sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <Paper elevation={2} sx={{ p: 3, mb: 2 }}>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              住所
            </Typography>
            <Typography variant="body1" gutterBottom>
              〒256-0816 神奈川県小田原市酒匂2-44-27
            </Typography>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              電話
            </Typography>
            <Typography variant="body1" gutterBottom>
              0465-48-5065
            </Typography>
            {/* 公開可能ならメールも */}
            <Typography variant="h6" fontWeight={600} gutterBottom>
              メール
            </Typography>
            <Typography variant="body1" gutterBottom>
              <Link href="mailto:lock.extinguish@gmail.com">lock.extinguish@gmail.com</Link>
            </Typography>
            <Typography variant="h6" fontWeight={600} gutterBottom>
              アクセス
            </Typography>
            <Typography variant="body2">
                JR鴨宮駅から徒歩17分<br />
                小田原駅東口から箱根登山バス<br />
                「国府津駅行」乗車 「酒匂三丁目」下車徒歩2分<br />
                駐車場あり
            </Typography>
          </Paper>
          {/* Google Maps埋め込み */}
          <Box sx={{ width: "100%", height: 280, borderRadius: 2, overflow: "hidden", boxShadow: 1, mt: 2 }}>
            <iframe
              title="上輩寺 地図"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6515.0736025243295!2d139.18676077523156!3d35.26777765257635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6019a5764310e4cb%3A0xdfaedc73ef649947!2z5LiK6Lyp5a-6!5e0!3m2!1sja!2sjp!4v1747558536341!5m2!1sja!2sjp"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <img
            src={gateImg}
            alt="上輩寺 山門"
            style={{
              width: "100%",
              maxWidth: 400,
              borderRadius: 16,
              boxShadow: "0 4px 20px rgba(0,0,0,0.13)",
              margin: "0 auto",
              display: "block",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

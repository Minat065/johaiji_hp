import React from "react";
import { Box, Typography, Grid, Card, CardContent, Avatar } from "@mui/material";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import FestivalIcon from "@mui/icons-material/Festival";

// イベントデータは追加・修正可
const events = [
  {
    icon: <WbSunnyIcon sx={{ fontSize: 36, bgcolor: "#ffd54f", borderRadius: "50%", p: 0.5 }} />,
    date: "1月1日",
    title: "元旦法要",
    desc: "新年を迎え本堂にてご祈祷。家内安全・無病息災を祈念します。",
  },
  {
    icon: <LocalFloristIcon sx={{ fontSize: 36, color: "#81c784" }} />,
    date: "4月8日",
    title: "灌仏会（花まつり）",
    desc: "お釈迦様の誕生日を祝う灌仏会。甘茶のふるまいもあり。",
  },
  {
    icon: <FestivalIcon sx={{ fontSize: 36, color: "#4fc3f7" }} />,
    date: "8月上旬",
    title: "盆施餓鬼法要",
    desc: "ご先祖や亡き精霊への供養。卒塔婆供養なども実施。",
  },
  {
    icon: <Brightness3Icon sx={{ fontSize: 36, color: "#ba68c8" }} />,
    date: "春・秋彼岸",
    title: "彼岸法要",
    desc: "春分・秋分の中日に、ご先祖供養や墓参りを行います。",
  },
  {
    icon: <CalendarTodayIcon sx={{ fontSize: 36, color: "#90caf9" }} />,
    date: "随時",
    title: "仏教講話・寺子屋イベント",
    desc: "どなたでも参加可能な法話会や寺子屋イベントも開催。",
  },
];

export default function Events() {
  return (
    <Box sx={{ py: 8, background: "#f5f5f5" }}>
      <Typography variant="h4" align="center" fontWeight={600} gutterBottom>
        年間行事・イベント
      </Typography>
      <Grid container spacing={4} justifyContent="center" sx={{ mt: 2 }}>
        {events.map((ev, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <Card elevation={3} sx={{ minHeight: 220 }}>
              <CardContent sx={{ textAlign: "center" }}>
                <Avatar sx={{ mx: "auto", width: 56, height: 56, bgcolor: "#fff", mb: 1 }}>
                  {ev.icon}
                </Avatar>
                <Typography variant="subtitle2" color="text.secondary">
                  {ev.date}
                </Typography>
                <Typography variant="h6" fontWeight={600} sx={{ mt: 1 }}>
                  {ev.title}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {ev.desc}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

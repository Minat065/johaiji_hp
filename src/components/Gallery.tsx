import React, { useState, useEffect, useRef } from "react";
import { Box, Typography, Fade, IconButton, Stack } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// 画像import（ファイル名はassetsに実在するもの全て追加）
import honboImg from "../assets/本堂_全体.jpg";
import honboSakuraImg from "../assets/本堂_全体_桜.jpg";
import gateImg from "../assets/山門.jpg";
import lotusImg from "../assets/蓮の花.jpg";
import ginkgoImg from "../assets/イチョウ_寺院全体.jpg";
import fiveRingImg from "../assets/五輪塔_イチョウ.jpg";
import petImg from "../assets/ペット葬.jpg";
import eitaikuyoImg from "../assets/永代供養墓.jpg";
import heartSakuraImg from "../assets/桜の花_ハート.jpg";
import amidaImg from "../assets/本堂_阿弥陀如来像.jpg";
import yakushiImg from "../assets/本堂_薬師如来.jpg";
import kannonImg from "../assets/灌仏会_本尊.jpg";
import amaTeaImg from "../assets/灌仏会_甘茶.jpg";
import sotohaImg from "../assets/先代住職の墓_イチョウ.jpg";

// 必要に応じて画像とキャプション追加
const images = [
  { src: honboImg, label: "本堂" },
  { src: honboSakuraImg, label: "本堂と桜" },
  { src: gateImg, label: "山門" },
  { src: lotusImg, label: "蓮の花" },
  { src: ginkgoImg, label: "銀杏と寺院" },
  { src: fiveRingImg, label: "五輪塔と銀杏" },
  { src: petImg, label: "ペット供養墓" },
  { src: eitaikuyoImg, label: "永代供養墓" },
  { src: heartSakuraImg, label: "ハート型の桜" },
  { src: amidaImg, label: "阿弥陀如来像" },
  { src: yakushiImg, label: "薬師如来像" },
  { src: kannonImg, label: "灌仏会の本尊" },
  { src: amaTeaImg, label: "灌仏会 甘茶" },
  { src: sotohaImg, label: "先代住職の墓と銀杏" },
];

const intervalSec = 3; // 切り替え秒数
const fadeDuration = 600; // フェードms（滑らかさ重視なら500～800ms）

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);
  const timer = useRef<number | null>(null);

  // 自動切り替え
  useEffect(() => {
    timer.current = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % images.length);
        setFade(true);
      }, fadeDuration * 0.65);
    }, intervalSec * 1000);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, []);

  // 手動操作の時は自動をリセット（進む/戻る）
  const goTo = (idx: number) => {
    setFade(false);
    setTimeout(() => {
      setCurrent((idx + images.length) % images.length);
      setFade(true);
    }, fadeDuration * 0.5);
    if (timer.current) {
      clearInterval(timer.current);
      timer.current = setInterval(() => {
        setFade(false);
        setTimeout(() => {
          setCurrent((prev) => (prev + 1) % images.length);
          setFade(true);
        }, fadeDuration * 0.65);
      }, intervalSec * 1000);
    }
  };

  return (
    <Box id="gallery" sx={{ py: 8, textAlign: "center" }}>
      <Typography variant="h4" fontWeight={600} gutterBottom>
        ギャラリー
      </Typography>
      <Box sx={{ position: "relative", mx: "auto", width: "95%", maxWidth: 600, minHeight: 320 }}>
        <Fade in={fade} timeout={fadeDuration}>
          <Box>
            <img
              src={images[current].src}
              alt={images[current].label}
              style={{
                width: "100%",
                height: 340,
                objectFit: "cover",
                borderRadius: 16,
                boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
                transition: "box-shadow 0.3s",
              }}
            />
            <Typography sx={{ mt: 2, fontSize: 18, fontWeight: 500 }}>
              {images[current].label}
            </Typography>
          </Box>
        </Fade>
        {/* 左右ボタン */}
        <IconButton
          sx={{
            position: "absolute",
            top: "45%",
            left: 8,
            bgcolor: "#fff",
            "&:hover": { bgcolor: "#eee" },
            zIndex: 1,
          }}
          onClick={() => goTo(current - 1)}
        >
          <ArrowBackIosNewIcon />
        </IconButton>
        <IconButton
          sx={{
            position: "absolute",
            top: "45%",
            right: 8,
            bgcolor: "#fff",
            "&:hover": { bgcolor: "#eee" },
            zIndex: 1,
          }}
          onClick={() => goTo(current + 1)}
        >
          <ArrowForwardIosIcon />
        </IconButton>
        {/* ドットインジケータ */}
        <Stack direction="row" spacing={1} sx={{ mt: 2, justifyContent: "center" }}>
          {images.map((_, i) => (
            <Box
              key={i}
              sx={{
                width: 11,
                height: 11,
                borderRadius: "50%",
                bgcolor: current === i ? "#333" : "#bbb",
                opacity: current === i ? 0.95 : 0.5,
                cursor: "pointer",
                border: current === i ? "2px solid #444" : "2px solid #eee",
                transition: "all 0.18s",
              }}
              onClick={() => goTo(i)}
            />
          ))}
        </Stack>
      </Box>
    </Box>
  );
}



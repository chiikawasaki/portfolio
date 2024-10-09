import { Box } from "@mui/material";
import PortfolioPageFristView from "../component/portfolio-page-first-view";
import MenuButton from "../component/menu-button";

const InternshipIISEIKATHU = () => {
  return (
    <Box position={"relative"}>
      <Box>
        <PortfolioPageFristView
          title="リタイアホームサーチ"
          src="/e-seikathu-LP.png"
          explanation="株式会社いい生活でのインターンで制作したアプリケーションです。シニアの方をターゲットにした物件を探すためのアプリケーションになっています。社内用APIを使用し、条件で絞り込んで条件にあった物件を表示できるように努めました。自分は絞り込み機能とお問い合わせフォーム、LP画面のUIの作成を担当しました。"
          language=" HTML/CSS/TypeScript"
          skill=" React, mui, Firebase 社内用API"
          term=" 2024年9月4日～9月11日"
          qiita="https://qiita.com/chiikawasaki/items/aaf43dcd8c0e4fee4add"
          article="https://note.e-seikatsu.info/n/n0922ab758af1"
        />
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        bgcolor={"#fff2f2"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Box
          my={5}
          display={"flex"}
          justifyContent={"center"}
          bgcolor={"#fff2f2"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <img
            src="/e-seikathu-LP.png"
            width={"80%"}
            style={{ boxShadow: "0.5px 1px 5px -2px gray" }}
          />
        </Box>
        <Box
          my={5}
          display={"flex"}
          justifyContent={"center"}
          bgcolor={"#fff2f2"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <img
            src="/e-seikathu-search-home.png"
            width={"80%"}
            style={{ boxShadow: "0.5px 1px 5px -2px gray" }}
          />
        </Box>
        <Box
          my={5}
          display={"flex"}
          justifyContent={"center"}
          bgcolor={"#fff2f2"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <img
            src="/e-seikathu-search2.png"
            width={"80%"}
            style={{ boxShadow: "0.5px 1px 5px -2px gray" }}
          />
        </Box>
        <Box
          my={5}
          mb={15}
          display={"flex"}
          justifyContent={"center"}
          bgcolor={"#fff2f2"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          <img
            src="/e-seikathu-form.png"
            width={"80%"}
            style={{ boxShadow: "0.5px 1px 5px -2px gray" }}
          />
        </Box>
      </Box>

      <Box position={"absolute"} bottom={3} right={3}>
        <MenuButton title="Home ＞" color="#857076" href="/" />
      </Box>
      <Box position={"absolute"} bottom={3} left={3}>
        <MenuButton title="＜ Back" color="#857076" href="/PeachTechTutorial" />
      </Box>
    </Box>
  );
};

export default InternshipIISEIKATHU;

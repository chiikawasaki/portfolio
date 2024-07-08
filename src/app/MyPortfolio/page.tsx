import { Box } from "@mui/material";
import PortfolioPageFristView from "../component/portfolio-page-first-view";
import MenuButton from "../component/menu-button";

const MyPortfolio = () => {
  return (
    <Box position={"relative"}>
      <Box>
        <PortfolioPageFristView
          title="Motoji Saki Portfolio"
          src="/Homepage.png"
          explanation=" 主に就職活動の際、採用担当の方に私のことをよく知ってもらうために作成しました。私は「可愛い」ものを制作することが好きであるため
                      このサイトを見てくださった方にそれが伝わるよう、テーマの色をピンク色にし、可愛いらしいテイストで仕上げられるよう心掛けました。
                      全体がピンクのサイトは事例が少なく、どう見やすく作るかという点で苦労しましたが、定期的に対となるような大人しく、かわいらしい色を
                      用いることで、かわいらしさを保ちつつ、メリハリをつけることが出来たと考えています。もっと私のことが良く伝わるように常にアップデート
                      していきたいと考えております。"
          language=" HTML/CSS/TypeScript"
          skill=" React, Next.js, mui"
          term=" 2024年6月～7月上旬"
        />
        <Box
          bgcolor={"#fff2f2"}
          width={"100%"}
          pb={10}
          pt={10}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ flexFlow: "column" }}
        >
          <img
            src="./home-pc.png"
            width={"60%"}
            style={{ boxShadow: "0.5px 1px 5px -2px gray" }}
          />
          <Box
            mt={10}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{ flexFlow: "column" }}
          >
            <img
              src="./about-pc.png"
              width={"60%"}
              style={{ boxShadow: "0.5px 1px 5px -2px gray" }}
            />
          </Box>
        </Box>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        bgcolor={"#fff2f2"}
        width={"100%"}
        sx={{ flexFlow: "column" }}
      >
        <Box mt={10}>
          <img
            src="./home-sp.png"
            width={150}
            style={{ boxShadow: "0.5px 1px 5px -2px gray" }}
          />
        </Box>
        <Box my={10}>
          <img
            src="./about-sp.png"
            width={150}
            style={{ boxShadow: "0.5px 1px 5px -2px gray" }}
          />
        </Box>
      </Box>
      <Box position={"absolute"} bottom={3} right={3}>
        <MenuButton title="Next ＞" color="#857076" href="/PeachTechTutorial" />
      </Box>
      <Box position={"absolute"} bottom={3} left={3}>
        <MenuButton title="＜ Home" color="#857076" href="/" />
      </Box>
    </Box>
  );
};

export default MyPortfolio;

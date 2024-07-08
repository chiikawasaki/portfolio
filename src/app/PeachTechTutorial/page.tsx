import { Box } from "@mui/material";
import PortfolioPageFristView from "../component/portfolio-page-first-view";
import MenuButton from "../component/menu-button";

const PeachTechTutorial = () => {
  return (
    <Box position={"relative"}>
      <Box>
        <PortfolioPageFristView
          title="PeachTech Tutorial"
          src="/peachtech-first-view.png"
          explanation="自身が所属しているプログラミングサークル「PeachTech」の
                       チュートリアルサイトを作成しました。新入生が多く入部して
                       いく中、運営の負担が大きいのではないかと考え、同期の友人
                       と二人で開発し、代表にフィードバックをもらいつつ作成しまし
                       た。人生で初めてのチーム開発経験でwebアプリ開発についての
                       知識や技術が身についたことはもちろん、他人と話し合い、フィ
                       ードバックをもらうことの大切さを実感しました。"
          language=" HTML/CSS/TypeScript"
          skill=" React, Next.js, mui"
          term=" 2024年5月～7月上旬"
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
            src="./peachtech-home-pc.png"
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
              src="./peachtech-section1-pc.png"
              width={"60%"}
              style={{ boxShadow: "0.5px 1px 5px -2px gray" }}
            />
          </Box>
          <Box
            mt={10}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            sx={{ flexFlow: "column" }}
          >
            <img
              src="./peachtech-closing-pc.png"
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
            src="./peachtech-home-sp.png"
            width={150}
            style={{ boxShadow: "0.5px 1px 5px -2px gray" }}
          />
        </Box>
        <Box my={10}>
          <img
            src="./peachtech-section1-sp.png"
            width={150}
            style={{ boxShadow: "0.5px 1px 5px -2px gray" }}
          />
        </Box>
        <Box my={10}>
          <img
            src="./peachtech-closing-sp.png"
            width={150}
            style={{ boxShadow: "0.5px 1px 5px -2px gray" }}
          />
        </Box>
      </Box>
      <Box position={"absolute"} bottom={3} right={3}>
        <MenuButton title="Home ＞" color="#857076" href="/" />
      </Box>
      <Box position={"absolute"} bottom={3} left={3}>
        <MenuButton title="＜ Back" color="#857076" href="/MyPortfolio" />
      </Box>
    </Box>
  );
};

export default PeachTechTutorial;

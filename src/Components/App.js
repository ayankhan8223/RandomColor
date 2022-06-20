import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
// import FAQ from "./FAQ/FAQ.jsx";
import Share from "./Share.jsx";
import Content from "./Content.jsx";

import RandomColor from "./RandomColor.jsx";
import Heading from "./Heading.jsx";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
//import AdSense from "react-adsense";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="top-box">
        <Header />
        <div className="breadcrumb-main">
          <Breadcrumbs
            style={{ fontFamily: "Poppins" }}
            aria-label="breadcrumb"
          >
            <Link underline="hover" color="inherit" href="/">
              <span className="breadcrumb-link">Home</span>
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/getting-started/installation/"
            >
              <span className="breadcrumb-link">
                <a
                  style={{ color: "black" }}
                  href="https://www.seohorizon.com/business-tools/"
                >
                  Business Tools
                </a>
              </span>
            </Link>
            <Typography style={{ fontFamily: "Poppins" }} color="text.primary">
              <span className="breadcrumb-link">
                <b>Random Color Generator</b>
              </span>
            </Typography>
          </Breadcrumbs>
        </div>
        <div id="print-area">
          <Heading
            heading="Random Color Generator"
            para="Use this tool to Generate Random Color"
          />
          <RandomColor />
        </div>
        <div>
          {/* <AdSense.Google
						client="ca-pub-7292810486004926"
						slot="7806394673"
						style={{ display: "block", backgroundColor:"blue" }}
						format="auto"
						responsive="true"
						layoutKey="-gw-1+2a-9x+5c"
					/> */}
          {/* <FAQ /> */}
        </div>
        {/* <AdSense.Google
					client="ca-pub-7292810486004926"
					slot="7806394673"
					style={{ display: "block" }}
					format="auto"
					responsive="true"
					layoutKey="-gw-1+2a-9x+5c"
				/> */}
      </div>
      <div style={{ textAlign: "center" }}>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-0671313638371673"
          data-ad-slot="6886527301"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>
      <Content />
      <div style={{ textAlign: "center" }}>
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-0671313638371673"
          data-ad-slot="2475357625"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </div>
      <Share />
      <Footer />
    </div>
  );
}

export default App;

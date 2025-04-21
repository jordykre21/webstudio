/* eslint-disable */
/* This is a auto generated file for building the project */

import { Fragment, useState } from "react";
import { useResource, useVariableState } from "@webstudio-is/react-sdk/runtime";
import {
  Body as Body,
  Link as Link,
  RichTextLink as RichTextLink,
} from "@webstudio-is/sdk-components-react-router";
import {
  Box as Box,
  Heading as Heading,
  Paragraph as Paragraph,
  Text as Text,
  Span as Span,
  HtmlEmbed as HtmlEmbed,
  Blockquote as Blockquote,
  List as List,
  ListItem as ListItem,
  Separator as Separator,
  CodeText as CodeText,
  Image as Image,
} from "@webstudio-is/sdk-components-react";

export const projectId = "520d4f02-aac6-419c-a32b-b5c1ec567b58";

export const lastPublished = "2025-04-19T18:26:56.774Z";

export const siteName = "Plattelands Jongeren Putten";

export const breakpoints = [
  { id: "SshG0rWi_w0fiGcYhLsBP" },
  { id: "wlavxZWmFPrGsYsgaSa3R", maxWidth: 991 },
  { id: "ArbfWoZDIGUjaS74IRcuZ", maxWidth: 767 },
  { id: "-A87vnunJH1i23ucKbH9r", maxWidth: 479 },
];

export const favIconAsset: string | undefined =
  "PJ_Putten_-_Logo_O57WK3UsovnHd2d7vnWEu.png";

// Font assets on current page (can be preloaded)
export const pageFontAssets: string[] = [
  "Anybody-Medium_6aFmUJdE5utq63aF-pmes.ttf",
  "Monoton-Regular_5oQLsUD-rj3RbRhQ7eqzn.ttf",
  "Anybody-BoldItalic__ljv1D3oj-MU71isVlHq6.ttf",
  "Anybody-ExtraLightItalic_OqSmqFAUNA-chQ43IkZUA.ttf",
  "Anybody-Regular_VTnXiruJKVdSWP2uoL91N.ttf",
  "Anybody-Light_Px7Dm9ih6jouZmLNo30b5.ttf",
  "Anybody-Black__hpoQCmFOOsanXrkW1KYK.ttf",
  "Anybody-ThinItalic_6YPYU-r2O__CRW2TVLZGW.ttf",
  "Anybody-Bold_VJpFB-GNuEMWuQypRQ9Ig.ttf",
  "Anybody-Italic-VariableFont_wdth_wght_3-ODaq4_ZBaa_HVpid2Yv.ttf",
  "Anybody-LightItalic_scs6ekKDBS0OSTk1PjR1Y.ttf",
  "Anybody-ExtraBold_c_IVQr4pkxkWaeaM1u7nU.ttf",
  "Anybody-SemiBold_kyJZ7vsCOdW92wLNDAFss.ttf",
  "Anybody-VariableFont_wdth_wght_vTX3_hKroa0zbZT1Lypsq.ttf",
  "Anybody-MediumItalic_nNPPDrTcC7HchNagjmrQF.ttf",
  "Anybody-ExtraLight_Fbw6X3e0eJfxwS50RjI94.ttf",
  "Anybody-ExtraBoldItalic_z1czkbPZnLT2cc1ERkJle.ttf",
  "Anybody-Italic_kgrrhkD21PaCIXGomr5o9.ttf",
  "Anybody-SemiBoldItalic_keBhG96eb0zfq7IQ0y0t6.ttf",
  "Anybody-Thin_Wu0C6s6hZbdZFXkOdFAo2.ttf",
  "Anybody-BlackItalic_6EBW36vrIpUVmIV7GjnES.ttf",
];

export const pageBackgroundImageAssets: string[] = [];

const Page = (_props: { system: any }) => {
  return (
    <Body className={`w-body c8c50hf`}>
      <Box className={`w-box cdg2dq4 cqtvhnn`}>
        <Box
          className={`w-box c8npkx6 c5xiuxe c1d89gn2 c1apq6os cefgraq c1bn7c0q c1dngwbl ci93o8z c1sgmpxv cm1gn62`}
        >
          <Box className={`w-box c1dngwbl ci93o8z crz970w cccwn59 c1hp2cc2`}>
            <Heading
              className={`w-heading cyyaok7 c1ncw40k ci0sp8v c1x031ng c1sm3hdf cd4kj3f cpla428 cicqkx8 c12tdr6y`}
            >
              {"Style Guide"}
            </Heading>
          </Box>
          <Box className={`w-box c1dngwbl ci93o8z crz970w cccwn59 c1hp2cc2`}>
            <Heading
              className={`w-heading c9wufmp c1jtvgia cyl3we c1f68h7q c16x74g0 c1x031ng cyyaok7 c1u7lsl6`}
            >
              {"Style Guide"}
            </Heading>
            <Text className={`w-text c1jyyxkn cttrwza`}>{"Version 1.0"}</Text>
            <Paragraph className={`w-paragraph c9nbcw1 c1f2h6yy`}>
              {
                "Deze style guide beschrijft de visuele en structurele richtlijnen die gehanteerd worden binnen de community, opgesteld volgens de standaarden van PJ Putten. Het doel is om consistentie, schaalbaarheid en onderhoudbaarheid te waarborgen binnen alle front-end toepassingen."
              }
            </Paragraph>
          </Box>
          <Box
            id={"layout"}
            className={`w-box c1dngwbl ci93o8z cjg3tvi c1dug5b4 c166vr47`}
          >
            <Box className={`w-box c1dngwbl ci93o8z crz970w cccwn59 c1hp2cc2`}>
              <Heading
                tag={"h2"}
                className={`w-heading c1qoq7yx c1jtvgia cyl3we c1f68h7q c16x74g0 c10b4ebe c10dy1u8`}
              >
                {"Layout"}
              </Heading>
            </Box>
            <Box className={`w-box c5dq8mk c16ebjib cmeqwxe c5qaon7 c1oh5lkt`}>
              <Box
                className={`w-box c1enrhzc c3to1h5 c9qqdll cya71rm c1dngwbl c151hc0 c1vku77h cdg2dq4 cqtvhnn c14008cz c8sbz9z c16cukde ckzfcso ci93o8z c2st95o cswgw8g c17502ws`}
              >
                <Text
                  className={`w-text cn1xim1 c1wgcey3 c1iwx5bw c1adg1un c10dy1u8 c1xs0rb8 c1gox8tq c1c7hrlh c1rsv3u5 c9cuz4t`}
                >
                  {"section"}
                </Text>
              </Box>
              <Box
                className={`w-box c1enrhzc c3to1h5 c9qqdll cya71rm c1dngwbl c151hc0 c1vku77h c151bwbj c4pg6qm c1apq6os c1d89gn2 c16cukde ckzfcso ci93o8z c1w657dt cnfbxv5 c8npkx6 c5xiuxe cefgraq c1bn7c0q c17502ws`}
              >
                <Text
                  className={`w-text cn1xim1 c1wgcey3 c1iwx5bw c1adg1un c10dy1u8 c1xs0rb8 c1gox8tq c1c7hrlh c1rsv3u5 c9cuz4t`}
                >
                  {"container"}
                </Text>
              </Box>
              <Box
                className={`w-box c1enrhzc c3to1h5 c9qqdll cya71rm c5dq8mk c151hc0 c1vku77h c16cukde ckzfcso ci93o8z c1eotrix c1buildi cnmyg03 c17502ws c1cfhjh c948lby c11thycl`}
              >
                <Box className={`w-box cxmwm28 clgdqzy`}>
                  <Text
                    className={`w-text cn1xim1 crotde1 cekbifz c1wgcey3 c1iwx5bw c1cy4ys2 c15lchv6 c10dy1u8 cwgtbgl c1txsc0q c485bz5 c10nvqzp cdy2l1r ckzfcso`}
                  >
                    {"grid"}
                  </Text>
                </Box>
                <Box className={`w-box`}>
                  <Paragraph className={`w-paragraph c8c50hf`}>
                    {
                      "Grid quickly provides the properties to create a grid. Once added, switch over to Local and type in your template columns."
                    }
                  </Paragraph>
                </Box>
                <Box className={`w-box`}>
                  <Paragraph className={`w-paragraph`}>
                    {
                      "Note, grid turns into flex on 767. This is because grid children may use start/end columns and would require us to reset each one manually on mobile. By setting the parent to flex, those values are ignored."
                    }
                  </Paragraph>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            id={"colors"}
            className={`w-box c1dngwbl ci93o8z cjg3tvi c1dug5b4 c166vr47`}
          >
            <Box className={`w-box c1dngwbl ci93o8z crz970w cccwn59 c1hp2cc2`}>
              <Heading
                tag={"h2"}
                className={`w-heading c1qoq7yx c1jtvgia cyl3we c1f68h7q c16x74g0 c10b4ebe c10dy1u8`}
              >
                {"Colors"}
              </Heading>
              <Paragraph className={`w-paragraph cttrwza c1lbatue`}>
                {
                  "Change these values on the Global Root. It's best practice to map semantic variables such as "
                }
                <Span
                  className={`w-text-1 ciikg8o ckyst85 cp2mifu c1qrn5u1 ch7u7bz c1bkw4bb c1e3un4q cgzzpf9`}
                >
                  {"--foreground-primary"}
                </Span>
                {" to another variable such as "}
                <Span
                  className={`w-text-1 ciikg8o ckyst85 cp2mifu c1qrn5u1 ch7u7bz c1bkw4bb c1e3un4q cgzzpf9`}
                >
                  {"--gray-10"}
                </Span>
                {"."}
              </Paragraph>
            </Box>
            <Heading
              tag={"h3"}
              className={`w-heading c12b5w9v cyl3we c1f68h7q c16x74g0 c8c50hf`}
            >
              {"Foreground"}
            </Heading>
            <Box className={`w-box c5dq8mk cnmyg03 cmeqwxe c5qaon7 c1oh5lkt`}>
              <Box
                className={`w-box c1enrhzc c3to1h5 c9qqdll cya71rm c1dngwbl c151hc0 c1vku77h c16cukde ckzfcso ci93o8z c2st95o cswgw8g c8c50hf c17502ws c1cfhjh`}
              >
                <Text
                  className={`w-text c5viw2u c1wgcey3 c1iwx5bw cimqj85 c10dy1u8 c1xs0rb8 c1gox8tq c1c7hrlh c1rsv3u5 c9cuz4t cd8hftc`}
                >
                  {"--foreground-primary"}
                </Text>
                <Box
                  className={`w-box c1omytty cug2d7q cxjme6c c1t048br cct0dth c1a5che5 c5nddxz c12tdr6y c8c50hf cyuapel`}
                />
              </Box>
              <Box
                className={`w-box c1enrhzc c3to1h5 c9qqdll cya71rm c1dngwbl c151hc0 c1vku77h c16cukde ckzfcso ci93o8z c2st95o cswgw8g c17502ws c1cfhjh`}
              >
                <Text
                  className={`w-text c5viw2u c1wgcey3 c1iwx5bw cimqj85 c10dy1u8 c1xs0rb8 c1gox8tq c1c7hrlh c1rsv3u5 c9cuz4t cd8hftc`}
                >
                  {"--foreground-secondary"}
                </Text>
                <Box
                  className={`w-box c1omytty cug2d7q cxjme6c c1t048br cct0dth c1a5che5 c5nddxz c2bdq4o c17502ws`}
                />
              </Box>
              <Box
                className={`w-box c1enrhzc c3to1h5 c9qqdll cya71rm c1dngwbl c151hc0 c1vku77h c16cukde ckzfcso ci93o8z c2st95o cswgw8g c17502ws c1cfhjh`}
              >
                <Text
                  className={`w-text c5viw2u c1wgcey3 c1iwx5bw cimqj85 c10dy1u8 c1xs0rb8 c1gox8tq c1c7hrlh c1rsv3u5 c9cuz4t cd8hftc`}
                >
                  {"--foreground-accent"}
                </Text>
                <Box
                  className={`w-box c1omytty cug2d7q cxjme6c c1t048br cct0dth c1a5che5 c5nddxz ck6cq4r c1nkuy6m cyuapel`}
                />
              </Box>
              <Box
                className={`w-box c1enrhzc c3to1h5 c9qqdll cya71rm c1dngwbl c151hc0 c1vku77h c16cukde ckzfcso ci93o8z c2st95o cswgw8g c17502ws c1cfhjh`}
              >
                <Text
                  className={`w-text c5viw2u c1wgcey3 c1iwx5bw cimqj85 c10dy1u8 c1xs0rb8 c1gox8tq c1c7hrlh c1rsv3u5 c9cuz4t cd8hftc`}
                >
                  {"--foreground-muted"}
                </Text>
                <Box
                  className={`w-box c1omytty cug2d7q cxjme6c c1t048br cct0dth c1a5che5 c5nddxz c1384zgi cyuapel`}
                />
              </Box>
              <Box
                className={`w-box c1enrhzc c3to1h5 c9qqdll cya71rm c1dngwbl c151hc0 c1vku77h c16cukde ckzfcso ci93o8z c2st95o cswgw8g c17502ws c1cfhjh`}
              >
                <Text
                  className={`w-text c5viw2u c1wgcey3 c1iwx5bw cimqj85 c10dy1u8 c1xs0rb8 c1gox8tq c1c7hrlh c1rsv3u5 c9cuz4t cd8hftc`}
                >
                  {"--foreground-border"}
                </Text>
                <Box
                  className={`w-box c1omytty cug2d7q cxjme6c c1t048br cct0dth c1a5che5 c5nddxz c404nb2 cyuapel`}
                />
              </Box>
            </Box>
            <Heading
              tag={"h3"}
              className={`w-heading c12b5w9v cyl3we c1f68h7q c16x74g0 c8c50hf`}
            >
              {"Background"}
            </Heading>
            <Box className={`w-box c5dq8mk cnmyg03 cmeqwxe c5qaon7 c1oh5lkt`}>
              <Box
                className={`w-box c1enrhzc c3to1h5 c9qqdll cya71rm c1dngwbl c151hc0 c1vku77h c16cukde ckzfcso ci93o8z c2st95o cswgw8g c17502ws c1cfhjh`}
              >
                <Text
                  className={`w-text c5viw2u c1wgcey3 c1iwx5bw cimqj85 c10dy1u8 c1xs0rb8 c1gox8tq c1c7hrlh c1rsv3u5 c9cuz4t cd8hftc`}
                >
                  {"--background-primary"}
                </Text>
                <Box
                  className={`w-box c1omytty cug2d7q cxjme6c c1t048br cct0dth c1a5che5 c5nddxz ccmk8ps c17502ws`}
                />
              </Box>
              <Box
                className={`w-box c1enrhzc c3to1h5 c9qqdll cya71rm c1dngwbl c151hc0 c1vku77h c16cukde ckzfcso ci93o8z c2st95o cswgw8g c17502ws c1cfhjh`}
              >
                <Text
                  className={`w-text c5viw2u c1wgcey3 c1iwx5bw cimqj85 c10dy1u8 c1xs0rb8 c1gox8tq c1c7hrlh c1rsv3u5 c9cuz4t cd8hftc`}
                >
                  {"--background-secondary"}
                </Text>
                <Box
                  className={`w-box c1omytty cug2d7q cxjme6c c1t048br cct0dth c1a5che5 c5nddxz cl12t07 cyuapel`}
                />
              </Box>
              <Box
                className={`w-box c1enrhzc c3to1h5 c9qqdll cya71rm c1dngwbl c151hc0 c1vku77h c16cukde ckzfcso ci93o8z c2st95o cswgw8g c17502ws c1cfhjh`}
              >
                <Text
                  className={`w-text c5viw2u c1wgcey3 c1iwx5bw cimqj85 c10dy1u8 c1xs0rb8 c1gox8tq c1c7hrlh c1rsv3u5 c9cuz4t cd8hftc`}
                >
                  {"--background-accent"}
                </Text>
                <Box
                  className={`w-box c1omytty cug2d7q cxjme6c c1t048br cct0dth c1a5che5 c5nddxz c1cak45q cyuapel`}
                />
              </Box>
              <Box
                className={`w-box c1enrhzc c3to1h5 c9qqdll cya71rm c1dngwbl c151hc0 c1vku77h c16cukde ckzfcso ci93o8z c2st95o cswgw8g c17502ws c1cfhjh`}
              >
                <Text
                  className={`w-text c5viw2u c1wgcey3 c1iwx5bw cimqj85 c10dy1u8 c1xs0rb8 c1gox8tq c1c7hrlh c1rsv3u5 c9cuz4t cd8hftc`}
                >
                  {"--background-card"}
                </Text>
                <Box
                  className={`w-box c1omytty cug2d7q cxjme6c c1t048br cct0dth c1a5che5 c5nddxz ch895pn cyuapel`}
                />
              </Box>
            </Box>
            <Heading
              tag={"h3"}
              className={`w-heading c12b5w9v cyl3we c1f68h7q c16x74g0 c8c50hf`}
            >
              {"Other"}
            </Heading>
            <Box className={`w-box c5dq8mk cnmyg03 cmeqwxe c5qaon7 c1oh5lkt`}>
              <Box
                className={`w-box c1enrhzc c3to1h5 c9qqdll cya71rm c1dngwbl c151hc0 c1vku77h c16cukde ckzfcso ci93o8z c2st95o cswgw8g c17502ws c1cfhjh`}
              >
                <Text
                  className={`w-text c5viw2u c1wgcey3 c1iwx5bw cimqj85 c10dy1u8 c1xs0rb8 c1gox8tq c1c7hrlh c1rsv3u5 c9cuz4t cd8hftc`}
                >
                  {"--focus-color"}
                </Text>
                <Box
                  className={`w-box c1omytty cug2d7q cxjme6c c1t048br cct0dth c1a5che5 c5nddxz chc9aqq cyuapel`}
                />
              </Box>
            </Box>
          </Box>
          <Box
            id={"links-buttons"}
            className={`w-box c1dngwbl ci93o8z cjg3tvi c1dug5b4 c166vr47`}
          >
            <Box className={`w-box c1dngwbl ci93o8z crz970w cccwn59 c1hp2cc2`}>
              <Heading
                tag={"h2"}
                className={`w-heading c1qoq7yx c1jtvgia cyl3we c1f68h7q c16x74g0 c10b4ebe c10dy1u8`}
              >
                {"Buttons and Links"}
              </Heading>
            </Box>
            <Box className={`w-box c5dq8mk cnmyg03 cmeqwxe c5qaon7 c1oh5lkt`}>
              <Box
                className={`w-box c1enrhzc c3to1h5 c9qqdll cya71rm c1dngwbl c1uo9pmw c11yd1hi c16cukde ckzfcso ci93o8z c1hpy03z cuda8i0 c17502ws c1cfhjh`}
              >
                <Text
                  className={`w-text cn1xim1 c1wgcey3 c1iwx5bw c1adg1un c10dy1u8 c1xs0rb8 c1gox8tq c1c7hrlh c1rsv3u5 c9cuz4t`}
                >
                  {"button-group"}
                </Text>
                <Box
                  className={`w-box c1dngwbl c151hc0 c11yd1hi czsm4xn cfnar97 crobamx`}
                >
                  <Link
                    className={`w-link c1qhmrd4 ckwlb5n ctpgej9 cgnc1vj c1fwaaj2 cmvzxsk c4gmf8b cxynjqx c1hpmrc7 c1dyevji c1hlrxxy cpo47hj c10dy1u8 c10b4ebe cyl3we cyyaok7 czn7yqv c11dhp8s c13596im c11a1w8b c1wksbuk c9j32me c17v9626 c196tacr c520090 cdv5p9y c1it1oly`}
                  >
                    {"button"}
                  </Link>
                  <Link
                    className={`w-link cb0kzhr c1ybqkom ctpgej9 cgnc1vj c1fwaaj2 cmvzxsk c4gmf8b cxynjqx c1hpmrc7 c1dyevji c1hlrxxy cpo47hj c10dy1u8 c10b4ebe cyl3we cyyaok7 czn7yqv c11dhp8s c13596im c11a1w8b c1wksbuk c9j32me c17v9626 c1hzqk4d c520090 cdv5p9y c1it1oly`}
                  >
                    {"is-button-secondary"}
                  </Link>
                </Box>
              </Box>
              <Box
                className={`w-box c1enrhzc c3to1h5 c9qqdll cya71rm c1dngwbl c1uo9pmw c11yd1hi c16cukde ckzfcso ci93o8z c1hpy03z cuda8i0 c17502ws c1cfhjh`}
              >
                <Text
                  className={`w-text cn1xim1 c1wgcey3 c1iwx5bw c1adg1un c10dy1u8 c1xs0rb8 c1gox8tq c1c7hrlh c1rsv3u5 c9cuz4t`}
                >
                  {"link"}
                </Text>
                <Link
                  className={`w-link c14bvxc6 crhsomi cyk9o3k c46mz8r csu6jnv c1l3ohic c9j32me c17v9626 c10b4ebe c520090 cdv5p9y c13v1xcq`}
                >
                  {"Link text you can edit"}
                </Link>
                <Link
                  className={`w-link c14bvxc6 crhsomi c1hlrxxy c46mz8r csu6jnv c1l3ohic c9j32me c17v9626 c10b4ebe c520090 cdv5p9y c13v1xcq`}
                >
                  {"is-link-nav"}
                </Link>
                <Link
                  className={`w-link c14bvxc6 ccc9zx3 cyk9o3k c46mz8r csu6jnv c1l3ohic c9j32me c17v9626 c10b4ebe cgla3fa cgzqixi c520090 cdv5p9y c13v1xcq`}
                >
                  <HtmlEmbed
                    code={
                      '<svg width="100%" height="100%" viewBox="0 0 26 29" fill="none" xmlns="http://www.w3.org/2000/svg">\n<path d="M10.3895 12.2844C9.57651 12.2844 8.93601 12.9969 8.93601 13.8669C8.93601 14.7339 9.59151 15.4494 10.3895 15.4494C11.201 15.4494 11.8415 14.7339 11.8415 13.8669C11.858 12.9954 11.201 12.2844 10.3895 12.2844ZM15.5915 12.2844C14.7785 12.2844 14.138 12.9969 14.138 13.8669C14.138 14.7339 14.7935 15.4494 15.5915 15.4494C16.403 15.4494 17.0435 14.7339 17.0435 13.8669C17.042 12.9954 16.403 12.2844 15.5915 12.2844Z" fill="currentColor"></path>\n<path d="M22.517 0.327881H3.42051C3.036 0.328865 2.65545 0.405574 2.30058 0.553629C1.94572 0.701684 1.62349 0.918186 1.35229 1.19077C1.0811 1.46336 0.866253 1.78669 0.720018 2.14231C0.573782 2.49793 0.499023 2.87887 0.50001 3.26338V22.5294C0.50001 24.1539 1.81101 25.4649 3.42051 25.4649H19.58L18.8225 22.8264L20.648 24.5229L22.3715 26.1189L25.4375 28.8279V3.26338C25.4385 2.87887 25.3637 2.49793 25.2175 2.14231C25.0713 1.78669 24.8564 1.46336 24.5852 1.19077C24.314 0.918186 23.9918 0.701684 23.6369 0.553629C23.2821 0.405574 22.9015 0.328865 22.517 0.327881ZM17.015 18.9384C17.015 18.9384 16.502 18.3264 16.076 17.7819C17.942 17.2539 18.6545 16.0869 18.6545 16.0869C18.0695 16.4709 17.5145 16.7439 17.015 16.9299C15.1965 17.6909 13.194 17.8986 11.258 17.5269C10.5427 17.3864 9.84173 17.1805 9.16401 16.9119C8.80658 16.7761 8.45922 16.6152 8.12451 16.4304C8.08101 16.3989 8.03901 16.3869 7.99701 16.3584C7.97454 16.3477 7.9546 16.3324 7.93851 16.3134C7.68201 16.1724 7.53951 16.0734 7.53951 16.0734C7.53951 16.0734 8.22351 17.2134 10.034 17.7549C9.60651 18.2949 9.07851 18.9384 9.07851 18.9384C5.93001 18.8379 4.73451 16.7724 4.73451 16.7724C4.73451 12.1839 6.78651 8.46538 6.78651 8.46538C8.83851 6.92488 10.79 6.96838 10.79 6.96838L10.9325 7.13938C8.36751 7.88188 7.18401 9.00688 7.18401 9.00688C7.18401 9.00688 7.49901 8.83588 8.02551 8.59438C9.54951 7.92538 10.76 7.73938 11.2595 7.69588C11.345 7.68238 11.417 7.66738 11.5025 7.66738C13.9733 7.33441 16.4857 7.80398 18.6695 9.00688C18.6695 9.00688 17.543 7.93888 15.1205 7.19788L15.32 6.96988C15.32 6.96988 17.273 6.92638 19.3235 8.46688C19.3235 8.46688 21.3755 12.1854 21.3755 16.7739C21.3755 16.7739 20.165 18.8379 17.015 18.9384Z" fill="currentColor"></path>\n</svg>\n'
                    }
                    className={`w-html-embed`}
                  />
                </Link>
              </Box>
            </Box>
          </Box>
          <Box
            id={"typography"}
            className={`w-box c1dngwbl ci93o8z cjg3tvi c1dug5b4 c166vr47`}
          >
            <Box className={`w-box c1dngwbl ci93o8z crz970w cccwn59 c1hp2cc2`}>
              <Heading
                tag={"h2"}
                className={`w-heading c1qoq7yx c1jtvgia cyl3we c1f68h7q c16x74g0 c10b4ebe c10dy1u8`}
              >
                {"Elements"}
              </Heading>
            </Box>
            <Box className={`w-box c1dngwbl ci93o8z c1b5hmbt c1ak625w`}>
              <Text
                className={`w-text cn1xim1 c1wgcey3 c1iwx5bw c1adg1un c10dy1u8 c1xs0rb8 c1gox8tq c1c7hrlh c1rsv3u5 c9cuz4t`}
              >
                {"heading-1|2|3|4|5|6"}
              </Text>
              <Heading
                className={`w-heading c9wufmp c1jtvgia cyl3we c1f68h7q c16x74g0 c1x031ng cyyaok7 c1u7lsl6`}
              >
                {"Heading 1 text "}
                {""}
                <br />
                {""}
                {"you can edit"}
              </Heading>
              <Heading
                className={`w-heading c1qoq7yx c1jtvgia cyl3we c1f68h7q c16x74g0 c8c50hf c10dy1u8`}
              >
                {"Heading 2 text "}
                {""}
                <br />
                {""}
                {"you can edit"}
              </Heading>
              <Heading
                className={`w-heading c12b5w9v cyl3we c1f68h7q c16x74g0 c8c50hf`}
              >
                {"Heading 3 text "}
                {""}
                <br />
                {""}
                {"you can edit"}
              </Heading>
              <Heading className={`w-heading cncs5x9 cyl3we c1f68h7q c16x74g0`}>
                {"Heading 4 text "}
                {""}
                <br />
                {""}
                {"you can edit"}
              </Heading>
              <Heading
                className={`w-heading c1wscalm cyl3we c1f68h7q c16x74g0`}
              >
                {"Heading 5 text "}
                {""}
                <br />
                {""}
                {"you can edit"}
              </Heading>
              <Heading
                className={`w-heading c1wscalm cyl3we c1f68h7q c16x74g0`}
              >
                {"Heading 6 text "}
                {""}
                <br />
                {""}
                {"you can edit"}
              </Heading>
              <Paragraph className={`w-paragraph`}>
                {"Paragraph "}
                <RichTextLink
                  className={`w-rich-text-link c14bvxc6 crhsomi cyk9o3k c46mz8r csu6jnv c1l3ohic c9j32me c17v9626 c10b4ebe c520090 cdv5p9y c13v1xcq`}
                >
                  {"text you"}
                </RichTextLink>
                {" can edit"}
                {""}
                <br />
                {""}
                {"that spans multiple lines"}
              </Paragraph>
              <Blockquote
                className={`w-blockquote c16x74g0 c1ufcjjy c802rhp cwgim2z c8gax80`}
              >
                <Span
                  className={`w-text-1 cn1xim1 c1wgcey3 c1iwx5bw c1adg1un c10dy1u8 c1xs0rb8 c1gox8tq c1c7hrlh c1rsv3u5 c9cuz4t`}
                >
                  {"blockquote"}
                </Span>
                {" text you can edit"}
              </Blockquote>
              <Text
                className={`w-text cn1xim1 c1wgcey3 c1iwx5bw c1adg1un c10dy1u8 c1xs0rb8 c1gox8tq c1c7hrlh c1rsv3u5 c9cuz4t`}
              >
                {"list"}
              </Text>
              <List className={`w-list`}>
                <ListItem className={`w-list-item`}>
                  <Span
                    className={`w-text-1 cn1xim1 c1wgcey3 c1iwx5bw c1adg1un c10dy1u8 c1xs0rb8 c1gox8tq c1c7hrlh c1rsv3u5 c9cuz4t`}
                  >
                    {"list-item"}
                  </Span>
                  {" text you can edit"}
                </ListItem>
                <ListItem className={`w-list-item`}>
                  {"List Item text you can edit"}
                </ListItem>
                <ListItem className={`w-list-item`}>
                  {"List Item text you can edit"}
                </ListItem>
              </List>
              <Text
                className={`w-text cn1xim1 c1wgcey3 c1iwx5bw c1adg1un c10dy1u8 c1xs0rb8 c1gox8tq c1c7hrlh c1rsv3u5 c9cuz4t`}
              >
                {"separator"}
              </Text>
              <Separator
                className={`w-separator c9n6rxk cefgraq c1f68h7q c16x74g0`}
              />
              <Text
                className={`w-text cn1xim1 c1wgcey3 c1iwx5bw c1adg1un c10dy1u8 c1xs0rb8 c1gox8tq c1c7hrlh c1rsv3u5 c9cuz4t`}
              >
                {"code"}
              </Text>
              <CodeText
                code={'console.log("Hello World");'}
                lang={""}
                className={`w-code-text ciikg8o ckyst85 cp2mifu c1qrn5u1 ch7u7bz c1bkw4bb c1e3un4q czlm5v1 cgzzpf9`}
              />
            </Box>
          </Box>
          <Box
            id={"forms"}
            className={`w-box c1dngwbl ci93o8z cjg3tvi c1dug5b4 c166vr47`}
          >
            <Box className={`w-box c1dngwbl ci93o8z crz970w cccwn59 c1hp2cc2`}>
              <Heading
                tag={"h2"}
                className={`w-heading c1qoq7yx c1jtvgia cyl3we c1f68h7q c16x74g0 c10b4ebe c10dy1u8`}
              >
                {"Forms"}
              </Heading>
            </Box>
            <Box className={`w-box c5dq8mk cnmyg03 cmeqwxe c5qaon7 c1oh5lkt`}>
              <Box
                className={`w-box c1enrhzc c3to1h5 c9qqdll cya71rm c1dngwbl c151hc0 c1vku77h c16cukde ckzfcso ci93o8z c2st95o cswgw8g c17502ws c1cfhjh`}
              >
                <Text
                  className={`w-text cn1xim1 c1wgcey3 c1iwx5bw c1adg1un c10dy1u8 c1xs0rb8 c1gox8tq c1c7hrlh c1rsv3u5 c9cuz4t`}
                >
                  {"my-token"}
                </Text>
              </Box>
            </Box>
          </Box>
          <Box
            id={"radix"}
            className={`w-box c1dngwbl ci93o8z cjg3tvi c1dug5b4 c166vr47`}
          >
            <Box className={`w-box c1dngwbl ci93o8z crz970w cccwn59 c1hp2cc2`}>
              <Heading
                tag={"h2"}
                className={`w-heading c1qoq7yx c1jtvgia cyl3we c1f68h7q c16x74g0 c10b4ebe c10dy1u8`}
              >
                {"Radix"}
              </Heading>
            </Box>
            <Box className={`w-box c5dq8mk cnmyg03 cmeqwxe c5qaon7 c1oh5lkt`}>
              <Box
                className={`w-box c1enrhzc c3to1h5 c9qqdll cya71rm c1dngwbl c151hc0 c1vku77h c16cukde ckzfcso ci93o8z c2st95o cswgw8g c17502ws c1cfhjh`}
              >
                <Text
                  className={`w-text cn1xim1 c1wgcey3 c1iwx5bw c1adg1un c10dy1u8 c1xs0rb8 c1gox8tq c1c7hrlh c1rsv3u5 c9cuz4t`}
                >
                  {"my-token"}
                </Text>
              </Box>
            </Box>
          </Box>
          <Box
            id={"utility"}
            className={`w-box c1dngwbl ci93o8z cjg3tvi c1dug5b4 c166vr47`}
          >
            <Box className={`w-box c1dngwbl ci93o8z crz970w cccwn59 c1hp2cc2`}>
              <Heading
                tag={"h2"}
                className={`w-heading c1qoq7yx c1jtvgia cyl3we c1f68h7q c16x74g0 c10b4ebe c10dy1u8`}
              >
                {"Utility"}
              </Heading>
            </Box>
            <Box className={`w-box c5dq8mk cnmyg03 cmeqwxe c5qaon7 c1oh5lkt`}>
              <Box
                className={`w-box c1enrhzc c3to1h5 c9qqdll cya71rm c1dngwbl c151hc0 c1vku77h c16cukde ckzfcso ci93o8z c2st95o cswgw8g c17502ws c1cfhjh`}
              >
                <Text
                  className={`w-text cn1xim1 c1wgcey3 c1iwx5bw c1adg1un c10dy1u8 c1xs0rb8 c1gox8tq c1c7hrlh c1rsv3u5 c9cuz4t`}
                >
                  {"my-token"}
                </Text>
              </Box>
            </Box>
          </Box>
          <Box
            id={"slots"}
            className={`w-box c1dngwbl ci93o8z cjg3tvi c1dug5b4 c166vr47`}
          >
            <Box className={`w-box c1dngwbl ci93o8z crz970w cccwn59 c1hp2cc2`}>
              <Heading
                tag={"h2"}
                className={`w-heading c1qoq7yx c1jtvgia cyl3we c1f68h7q c16x74g0 c10b4ebe c10dy1u8`}
              >
                {"Slots"}
              </Heading>
            </Box>
            <Box className={`w-box c5dq8mk cnmyg03 cmeqwxe c5qaon7 c1oh5lkt`}>
              <Box
                className={`w-box c1enrhzc c3to1h5 c9qqdll cya71rm c1dngwbl c151hc0 c1vku77h c16cukde ckzfcso ci93o8z c2st95o cswgw8g c17502ws c1cfhjh`}
              >
                <Text
                  className={`w-text cn1xim1 c1wgcey3 c1iwx5bw c1adg1un c10dy1u8 c1xs0rb8 c1gox8tq c1c7hrlh c1rsv3u5 c9cuz4t`}
                >
                  {"my-slot"}
                </Text>
              </Box>
            </Box>
          </Box>
          <Box
            id={"custom"}
            className={`w-box c1dngwbl ci93o8z cjg3tvi c1dug5b4 c166vr47`}
          >
            <Box className={`w-box c1dngwbl ci93o8z crz970w cccwn59 c1hp2cc2`}>
              <Heading
                tag={"h2"}
                className={`w-heading c1qoq7yx c1jtvgia cyl3we c1f68h7q c16x74g0 c10b4ebe c10dy1u8`}
              >
                {"Custom"}
              </Heading>
            </Box>
            <Box className={`w-box c5dq8mk cnmyg03 cmeqwxe c5qaon7 c1oh5lkt`}>
              <Box
                className={`w-box c1enrhzc c3to1h5 c9qqdll cya71rm c1dngwbl c151hc0 c1vku77h c16cukde ckzfcso ci93o8z c2st95o cswgw8g c17502ws c1cfhjh`}
              >
                <Text
                  className={`w-text cn1xim1 c1wgcey3 c1iwx5bw c1adg1un c10dy1u8 c1xs0rb8 c1gox8tq c1c7hrlh c1rsv3u5 c9cuz4t`}
                >
                  {"Card"}
                </Text>
                <Box
                  className={`w-box c1dngwbl ci93o8z c1b9m2rz crz970w cccwn59 c151hc0 c10dy1u8 c1e5p5tj`}
                >
                  <Box className={`w-box`}>
                    <Image alt={"Arrow going up"} className={`w-image`} />
                  </Box>
                  <Box className={`w-box c1dngwbl ci93o8z c1aymoyz cmgjybd`}>
                    <Heading
                      tag={"h3"}
                      className={`w-heading c12b5w9v cyl3we c1f68h7q c16x74g0 c8c50hf`}
                    >
                      {"Product Design"}
                    </Heading>
                    <Paragraph className={`w-paragraph`}>
                      {
                        "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"
                      }
                    </Paragraph>
                  </Box>
                </Box>
              </Box>
              <Box
                className={`w-box c1enrhzc c3to1h5 c9qqdll cya71rm c1dngwbl c151hc0 c1vku77h c16cukde ckzfcso ci93o8z c2st95o cswgw8g c17502ws c1cfhjh`}
              >
                <Text
                  className={`w-text cn1xim1 c1wgcey3 c1iwx5bw c1adg1un c10dy1u8 c1xs0rb8 c1gox8tq c1c7hrlh c1rsv3u5 c9cuz4t`}
                >
                  {"is-card-gallery"}
                </Text>
                <Box
                  className={`w-box c1dngwbl ci93o8z c1b9m2rz crz970w cccwn59 c1uo9pmw c9nbcw1 c1e5p5tj`}
                >
                  <Box className={`w-box`}>
                    <Image alt={"Book and plant"} className={`w-image`} />
                  </Box>
                  <Box className={`w-box c1dngwbl ci93o8z c1aymoyz cmgjybd`}>
                    <Heading
                      tag={"h3"}
                      className={`w-heading cncs5x9 cyl3we c1f68h7q c16x74g0`}
                    >
                      {"Product Design"}
                    </Heading>
                    <Paragraph className={`w-paragraph`}>
                      {
                        "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"
                      }
                    </Paragraph>
                  </Box>
                </Box>
              </Box>
              <Box
                className={`w-box c1enrhzc c3to1h5 c9qqdll cya71rm c1dngwbl c151hc0 c1vku77h c16cukde ckzfcso ci93o8z c2st95o cswgw8g c17502ws c1cfhjh`}
              >
                <Text
                  className={`w-text cn1xim1 c1wgcey3 c1iwx5bw c1adg1un c10dy1u8 c1xs0rb8 c1gox8tq c1c7hrlh c1rsv3u5 c9cuz4t`}
                >
                  {"is-card-testimonial"}
                </Text>
                <Box
                  className={`w-box c1dngwbl ci93o8z c1b9m2rz c1w657dt cnfbxv5 c1uo9pmw c9nbcw1 cwcn6r8 c1cfhjh`}
                >
                  <Box className={`w-box c1dngwbl ci93o8z c1aymoyz cmgjybd`}>
                    <Paragraph className={`w-paragraph c1mqsjjw`}>
                      {
                        "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com"
                      }
                    </Paragraph>
                  </Box>
                  <Box
                    className={`w-box c1dngwbl c1uo9pmw c1b9m2rz c1i401mi crz970w cccwn59`}
                  >
                    <Image
                      alt={"Picuture of Gemma"}
                      className={`w-image cxjme6c c1t048br cct0dth c1a5che5 c14bqjfl`}
                    />
                    <Box className={`w-box c1dngwbl ci93o8z c1aymoyz cmgjybd`}>
                      <Image alt={"5 stars"} className={`w-image`} />
                      <Text className={`w-text c1mqsjjw c15dcvzw`}>
                        {"Gemma Nolen"}
                      </Text>
                      <Text className={`w-text`}>{"Google"}</Text>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                className={`w-box c1enrhzc c3to1h5 c9qqdll cya71rm c1dngwbl c151hc0 c1vku77h c16cukde ckzfcso ci93o8z c2st95o cswgw8g c17502ws c1cfhjh`}
              >
                <Text
                  className={`w-text cn1xim1 c1wgcey3 c1iwx5bw c1adg1un c10dy1u8 c1xs0rb8 c1gox8tq c1c7hrlh c1rsv3u5 c9cuz4t`}
                >
                  {"my-token"}
                </Text>
              </Box>
            </Box>
          </Box>
          <Box
            id={"notes"}
            className={`w-box c1dngwbl ci93o8z cjg3tvi c1dug5b4 c166vr47`}
          >
            <Box className={`w-box c1dngwbl ci93o8z crz970w cccwn59 c1hp2cc2`}>
              <Heading
                tag={"h2"}
                className={`w-heading c1qoq7yx c1jtvgia cyl3we c1f68h7q c16x74g0 c10b4ebe c10dy1u8`}
              >
                {"Notes"}
              </Heading>
              <Paragraph className={`w-paragraph cttrwza c1lbatue`}>
                {
                  "Add notes for yourself or other creators that explain any nuances of the build."
                }
              </Paragraph>
            </Box>
            <Box className={`w-box c5dq8mk cnmyg03 cmeqwxe c5qaon7 c1oh5lkt`}>
              <Box
                className={`w-box c1enrhzc c3to1h5 c9qqdll cya71rm c1dngwbl c1uo9pmw c11yd1hi c16cukde ckzfcso ci93o8z c2st95o cswgw8g c17502ws c1cfhjh`}
              >
                <Paragraph className={`w-paragraph`}>
                  {
                    "The following CSS variables were the modifications or additions made to the default "
                  }
                  <RichTextLink className={`w-rich-text-link`}>
                    {"Craft"}
                  </RichTextLink>
                  {" variables, jyfi."}
                </Paragraph>
                <CodeText
                  code={
                    "--foreground-primary: var(--gray-12);\n--foreground-secondary: var(--gray-0);\n--foreground-accent: var(--red-6):\n--foreground-muted: unset;\n--foreground-border: var(--foreground-primary);\n\n--background-primary: var(--gray-0);\n--background-secondary: var(--gray-3);\n--background-accent: var(--gray-12);\n--background-card: var(--background-primary);\n\n--focus-color: var(--red-6);\n\n--gap-xs: var(--size-1);\n--gap-m: var(--size-fluid-4);\n\n--gray-0: #FFFFFF;\n--gray-1: unset;\n--gray-2: unset;\n--gray-3: #F3F3F3;\n--gray-4: unset;\n--gray-5: unset;\n--gray-6: unset;\n--gray-7: unset;\n--gray-8: unset;\n--gray-9: unset;\n--gray-10: unset;\n--gray-11: unset;\n--gray-12: #2D2D2D;\n\n--green-0: unset;\n--green-1: unset;\n--green-2: unset;\n--green-3: unset;\n--green-4: unset;\n--green-5: unset;\n--green-6: #009379;\n--green-7: unset;\n--green-8: unset;\n--green-9: unset;\n--green-10: unset;\n--green-11: unset;\n--green-12: unset;\n\n--red-0: unset;\n--red-1: unset;\n--red-2: unset;\n--red-3: unset;\n--red-4: unset;\n--red-5: unset;\n--red-6: #FF6250;\n--red-7: unset;\n--red-8: unset;\n--red-9: unset;\n--red-10: unset;\n--red-11: unset;\n--red-12: unset;\n\n--pink-0: unset;\n--pink-1: unset;\n--pink-2: unset;\n--pink-3: unset;\n--pink-4: #F3AFA8;\n--pink-5: unset;\n--pink-6: unset;\n--pink-7: unset;\n--pink-8: unset;\n--pink-9: unset;\n--pink-10: unset;\n--pink-11: unset;\n--pink-12: unset;\n\n--yellow-0: unset;\n--yellow-1: unset;\n--yellow-2: unset;\n--yellow-3: unset;\n--yellow-4: #F7D684;\n--yellow-5: unset;\n--yellow-6: unset;\n--yellow-7: unset;\n--yellow-8: unset;\n--yellow-9: unset;\n--yellow-10: unset;\n--yellow-11: unset;\n--yellow-12: unset;"
                  }
                  className={`w-code-text ciikg8o ckyst85 cp2mifu c1qrn5u1 c1e3un4q cefgraq cgzzpf9 cgrzntm`}
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          tag={"nav"}
          className={`w-box cisnrxo c1beq76z c15jnmls c1nkfwlk c1ux1n4u c1uf2ubd c1nt53ms c1e3un4q c1dv8dev c6qjrv4`}
        >
          <Box
            className={`w-box c8npkx6 c5xiuxe c1d89gn2 c1apq6os cefgraq c1bn7c0q c1dngwbl c1i401mi crz970w cccwn59 c1b9m2rz c188c6`}
          >
            <Link
              className={`w-link c14bvxc6 crhsomi cyk9o3k c46mz8r csu6jnv c1l3ohic c9j32me c17v9626 c10b4ebe c520090 cdv5p9y c13v1xcq`}
            >
              {"Layout"}
            </Link>
            <Link
              className={`w-link c14bvxc6 crhsomi cyk9o3k c46mz8r csu6jnv c1l3ohic c9j32me c17v9626 c10b4ebe c520090 cdv5p9y c13v1xcq`}
            >
              {"Colors"}
            </Link>
            <Link
              className={`w-link c14bvxc6 crhsomi cyk9o3k c46mz8r csu6jnv c1l3ohic c9j32me c17v9626 c10b4ebe c520090 cdv5p9y c13v1xcq`}
            >
              {"Links & Buttons"}
            </Link>
            <Link
              className={`w-link c14bvxc6 crhsomi cyk9o3k c46mz8r csu6jnv c1l3ohic c9j32me c17v9626 c10b4ebe c520090 cdv5p9y c13v1xcq`}
            >
              {"Typography"}
            </Link>
            <Link
              className={`w-link c14bvxc6 crhsomi cyk9o3k c46mz8r csu6jnv c1l3ohic c9j32me c17v9626 c10b4ebe c520090 cdv5p9y c13v1xcq`}
            >
              {"Forms"}
            </Link>
            <Link
              className={`w-link c14bvxc6 crhsomi cyk9o3k c46mz8r csu6jnv c1l3ohic c9j32me c17v9626 c10b4ebe c520090 cdv5p9y c13v1xcq`}
            >
              {"Radix"}
            </Link>
            <Link
              className={`w-link c14bvxc6 crhsomi cyk9o3k c46mz8r csu6jnv c1l3ohic c9j32me c17v9626 c10b4ebe c520090 cdv5p9y c13v1xcq`}
            >
              {"Utility"}
            </Link>
            <Link
              className={`w-link c14bvxc6 crhsomi cyk9o3k c46mz8r csu6jnv c1l3ohic c9j32me c17v9626 c10b4ebe c520090 cdv5p9y c13v1xcq`}
            >
              {"Slots"}
            </Link>
            <Link
              className={`w-link c14bvxc6 crhsomi cyk9o3k c46mz8r csu6jnv c1l3ohic c9j32me c17v9626 c10b4ebe c520090 cdv5p9y c13v1xcq`}
            >
              {"Custom"}
            </Link>
            <Link
              className={`w-link c14bvxc6 crhsomi cyk9o3k c46mz8r csu6jnv c1l3ohic c9j32me c17v9626 c10b4ebe c520090 cdv5p9y c13v1xcq`}
            >
              {"Notes"}
            </Link>
          </Box>
        </Box>
      </Box>
    </Body>
  );
};

export { Page };

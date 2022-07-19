import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import React from "react";
import Image from "../assets/image.jpg";
import { theme } from "../App";

const userInfo = {
     firstName: "RANDRIANANTENAINA",
     lastName: "Jean Jacques Augustin",
     degree: "FullStack Develloper",
     description:
          "Id cillum officia deserunt proident et ad aliqua qui voluptate ipsum occaecat est laboris. Enim ex aute culpa id magna. Ut do laborum magna quis ea enim. Nostrud deserunt proident et tempor fugiat est enim officia aliqua aliqua. Ullamco ex aliqua eu dolore velit eu in laboris aliquip minim. Deserunt Lorem nostrud magna aliquip est ipsum laboris nulla nisi aliqua commodo.",
};

export default function Home() {
     return (
          <div className="userInfo">
               <Grid
                    container
                    justifyContent={"center"}
                    alignContent={"center"}
                    padding={2}
               >
                    <Grid item md={5}>
                         <img
                              style={{
                                   width: 300,
                                   borderRadius: "10px",
                              }}
                              src={Image}
                              alt="Photos"
                              className="images_profile"
                         />
                    </Grid>
                    <Grid item md={7}>
                         <div className="userInfoTexts">
                              <div className="userInfo_name">
                                   <Typography variant="h3" align="left">
                                        {userInfo.firstName}
                                   </Typography>
                                   <Typography variant="h5" align="left">
                                        {userInfo.lastName}
                                   </Typography>
                                   <Typography variant="h6" align="left">
                                        {userInfo.degree}
                                   </Typography>
                              </div>
                              <div
                                   style={{
                                        padding: "5vh 0 5vh 5vh",
                                        margin: "5vh 0 5vh 5vh",
                                        borderLeft: `5px solid ${theme.palette.primary.main}`,
                                   }}
                              >
                                   <Typography paragraph align="justify">
                                        <i>{userInfo.description}</i>
                                   </Typography>
                              </div>
                         </div>
                    </Grid>
               </Grid>
          </div>
     );
}

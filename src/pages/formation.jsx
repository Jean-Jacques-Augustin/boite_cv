import { Paper } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import React from "react";
import PlaceIcon from "@mui/icons-material/Place";
import SchoolIcon from "@mui/icons-material/School";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import TextsmsIcon from "@mui/icons-material/Textsms";
import { Stepper } from "@mui/material";
import { Step } from "@mui/material";
import { StepLabel } from "@mui/material";
import { StepContent } from "@mui/material";

const FormationList = [
     {
          date_formation: "2019-2021",
          centre_de_formationl: "CNTeMad",
          adresse_centre_formation: "Fianarantsoa Madagascar",
          diplome_obtenu: "Licence en Informatique",
          description:
               "Dolore laboris sunt proident enim do. Irure voluptate occaecat sit ullamco laborum. Duis non ex culpa esse laboris aliqua exercitation irure laborum mollit.",
     },
     {
          date_formation: "2019-2021",
          centre_de_formationl: "CNTeMad",
          adresse_centre_formation: "Fianarantsoa Madagascar",
          diplome_obtenu: "Licence en Informatique",
          description:
               "Dolore laboris sunt proident enim do. Irure voluptate occaecat sit ullamco laborum. Duis non ex culpa esse laboris aliqua exercitation irure laborum mollit.",
     },
     {
          date_formation: "2019-2021",
          centre_de_formationl: "CNTeMad",
          adresse_centre_formation: "Fianarantsoa Madagascar",
          diplome_obtenu: "Licence en Informatique",
          description:
               "Dolore laboris sunt proident enim do. Irure voluptate occaecat sit ullamco laborum. Duis non ex culpa esse laboris aliqua exercitation irure laborum mollit.",
     },
     {
          date_formation: "2019-2021",
          centre_de_formationl: "CNTeMad",
          adresse_centre_formation: "Fianarantsoa Madagascar",
          diplome_obtenu: "Licence en Informatique",
          description:
               "Dolore laboris sunt proident enim do. Irure voluptate occaecat sit ullamco laborum. Duis non ex culpa esse laboris aliqua exercitation irure laborum mollit.",
     },
     {
          date_formation: "2019-2021",
          centre_de_formationl: "CNTeMad",
          adresse_centre_formation: "Fianarantsoa Madagascar",
          diplome_obtenu: "Licence en Informatique",
          description:
               "Dolore laboris sunt proident enim do. Irure voluptate occaecat sit ullamco laborum. Duis non ex culpa esse laboris aliqua exercitation irure laborum mollit.",
     },
     {
          date_formation: "2019-2021",
          centre_de_formationl: "CNTeMad",
          adresse_centre_formation: "Fianarantsoa Madagascar",
          diplome_obtenu: "Licence en Informatique",
          description:
               "Dolore laboris sunt proident enim do. Irure voluptate occaecat sit ullamco laborum. Duis non ex culpa esse laboris aliqua exercitation irure laborum mollit.",
     },
     {
          date_formation: "2019-2021",
          centre_de_formationl: "CNTeMad",
          adresse_centre_formation: "Fianarantsoa Madagascar",
          diplome_obtenu: "Licence en Informatique",
          description:
               "Dolore laboris sunt proident enim do. Irure voluptate occaecat sit ullamco laborum. Duis non ex culpa esse laboris aliqua exercitation irure laborum mollit.",
     },
];

export const FormationListForm = (props) => {
     return (
          <Paper className="card">
               <div>
                    <div className="item_desc">
                         <SchoolIcon className="item_desc_icon" />
                         <Typography>{props.etablissement}</Typography>
                    </div>
                    <div className="item_desc">
                         <PlaceIcon className="item_desc_icon" />
                         <Typography>{props.location}</Typography>
                    </div>
                    <div className="item_desc">
                         <WorkspacePremiumIcon className="item_desc_icon" />
                         <Typography>{props.diplome}</Typography>
                    </div>
                    <div className="item_desc">
                         <TextsmsIcon className="item_desc_icon" />
                         <Typography align="justify">
                              {props.description}
                         </Typography>
                    </div>
               </div>
          </Paper>
     );
};

export default function Formation(props) {
     return (
          <div>
               <Typography variant="h4">Formation suivie :</Typography>
               <br />
               <Stepper orientation="vertical">
                    {FormationList.map((step, index) => (
                         <Step active={true} key={index}>
                              <StepLabel
                                   color="primary"
                                   icon={<SchoolIcon color="primary" />}
                              >
                                   <Typography variant="h6">
                                        - {step.date_formation}
                                   </Typography>
                              </StepLabel>
                              <StepContent>
                                   {
                                        <FormationListForm
                                             etablissement={
                                                  step.centre_de_formationl
                                             }
                                             location={
                                                  step.adresse_centre_formation
                                             }
                                             diplome={step.diplome_obtenu}
                                             description={step.description}
                                        />
                                   }
                              </StepContent>
                         </Step>
                    ))}
               </Stepper>
          </div>
     );
}

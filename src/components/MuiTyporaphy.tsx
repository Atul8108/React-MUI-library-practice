import { Typography } from "@mui/material";

const MuiTyporaphy = () => {
  return (
    <>
      {/* there are 13th typography  */}
      <Typography variant="h1">H1 heading</Typography>
      <Typography variant="h2">H1 heading</Typography>
      <Typography variant="h3">H1 heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        H4 heading
      </Typography>
      <Typography variant="h5">H1 heading</Typography>
      <Typography variant="h6">H1 heading</Typography>

      <Typography variant="subtitle1">H1 heading</Typography>
      <Typography variant="subtitle2">H1 heading</Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
        eaque provident dolor. Tenetur architecto exercitationem et possimus,
        ratione iure magnam commodi fuga. Odit adipisci incidunt molestiae quae
        officia necessitatibus corrupti.
      </Typography>

      <Typography variant="body2">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id error culpa
        neque eligendi eos minima officia debitis doloremque, odit,
        reprehenderit distinctio voluptas ex ducimus sit laudantium, ratione
        blanditiis illum quos.
      </Typography>
    </>
  );
};

export default MuiTyporaphy;

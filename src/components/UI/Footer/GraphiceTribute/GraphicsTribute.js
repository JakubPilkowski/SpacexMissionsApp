import { Button, Dialog } from "@material-ui/core";
import { Fragment, useState } from "react";
import MuiDialogContent from "@material-ui/core/DialogContent";
import { FlexWrapperColumnCenter } from "themes/Wrappers.css";
import { CenteredH2 } from "themes/Texts.css";

const GraphicsTribute = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Fragment>
      <Dialog maxWidth={"lg"} open={isOpen} onClose={() => setIsOpen(false)}>
        <MuiDialogContent>
          <FlexWrapperColumnCenter>
            <CenteredH2>Authors</CenteredH2>
            <div>
              Icons made by
              <a href="https://www.flaticon.com/authors/google" title="Google">
                Google
              </a>
              from
              <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </a>
            </div>
            <br />
            <div>
              Icons made by
              <a
                href="https://www.flaticon.com/authors/dave-gandy"
                title="Dave Gandy"
              >
                Dave Gandy
              </a>
              from
              <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </a>
            </div>
            <br />
            <div>
              Icons made by
              <a
                href="https://www.flaticon.com/authors/freepik"
                title="Freepik"
              >
                Freepik
              </a>
              from
              <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </a>
            </div>
            <br />
            <div>
              Icons made by
              <a
                href="https://www.flaticon.com/authors/vectors-market"
                title="Vectors Market"
              >
                Vectors Market
              </a>
              from
              <a href="https://www.flaticon.com/" title="Flaticon">
                www.flaticon.com
              </a>
            </div>
          </FlexWrapperColumnCenter>
        </MuiDialogContent>
      </Dialog>
      <Button
        variant="outlined"
        style={{ color: "white", fontWeight: "bold", textTransform: "none" }}
        onClick={() => setIsOpen(true)}
      >
        {window.width >= 500
          ? "Authors Graphics From Flaticon"
          : "Authors Graphics"}
      </Button>
    </Fragment>
  );
};

export default GraphicsTribute;

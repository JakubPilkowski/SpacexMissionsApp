import { CenteredSpacingSmH1, CenteredSpacingSmH2 } from "themes/Texts.css";
import { FlexContainer } from "../../../themes/Wrappers.css";
import { ErrorWrapper } from "./Error.css";

import PropTypes from "prop-types";

const Error = ({ response: { status, statusText, url } }) => (
  <ErrorWrapper>
    <FlexContainer>
      <CenteredSpacingSmH1>
        {status ? `Code: ${status}` : "No status code"}
      </CenteredSpacingSmH1>
      <CenteredSpacingSmH2>
        {statusText ? `Text: ${statusText}` : "No status text"}
      </CenteredSpacingSmH2>
      <CenteredSpacingSmH2>
        {url ? `Url: ${url}` : "No error text"}
      </CenteredSpacingSmH2>
    </FlexContainer>
  </ErrorWrapper>
);

Error.propTypes = {
  response: PropTypes.shape({
    status: PropTypes.number,
    statusText: PropTypes.string,
    url: PropTypes.string,
  }),
};

export default Error;

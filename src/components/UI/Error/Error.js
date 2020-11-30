import { CenteredSpacingSmH1, CenteredSpacingSmH2 } from "themes/Texts.css";
import { FlexContainer } from "../../../themes/Wrappers.css";
import { ErrorWrapper } from "./Error.css";

const Error = ({ response: { status, statusText, url } }) => (
  <ErrorWrapper>
    <FlexContainer>
      <CenteredSpacingSmH1>
        {status ? `Code: ${status}` : "No status"}
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

export default Error;

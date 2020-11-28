import { Link } from "react-router-dom";
import { Wrapper } from "./Navigation.css";

const Navigation = (props) => (
  <Wrapper>
    <div>Logo</div>
    <div>
      <Link to="/">Misje</Link>
      <Link to="/favourites">Ulubione</Link>
    </div>
  </Wrapper>
);

export default Navigation;

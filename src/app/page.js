
import Home from "./(home)/home";
import Wrapper from "./layout-wrapper/wrapper";

export const metadata = {
  title: "LongIsland Desis - Business Directory",
};

export default function MainRoot() {
  return (
    <Wrapper>
      <Home />
    </Wrapper>
  );
}

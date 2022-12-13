import { sidebarObj } from "../sidebarObj";
import { getTitle } from "../utils";

function Home() {
  const title = getTitle(window.location.pathname,sidebarObj);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>{title}</h1>
    </div>
  );
}

export default Home;

import { type NextPage } from "next";
import { Nav } from "~/components/Nav";
import { Footer } from "~/components/Footer";

const addRecipe: NextPage = () => {
  return (
    <>
      <Nav />
      <div>
        <p>This is the Add page</p>
      </div>
      <Footer />
    </>
  );
};

export default addRecipe;

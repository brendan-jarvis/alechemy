import { type NextPage } from "next";
import { Nav } from "~/components/Nav";
import { Footer } from "~/components/Footer";

const userProfileRecipes: NextPage = () => {
  return (
    <>
      <Nav />
      <div>
        <p>This is the profile</p>
      </div>
      <Footer />
    </>
  );
};

export default userProfileRecipes;

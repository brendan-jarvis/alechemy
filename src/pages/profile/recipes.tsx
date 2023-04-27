import { type NextPage } from "next";
import { Nav } from "~/components/Nav";
import { Footer } from "~/components/Footer";

const UserProfileRecipes: NextPage = () => {
  return (
    <>
      <Nav />
      <div>
        <p>This is the user profile recipes component.</p>
      </div>
      <Footer />
    </>
  );
};

export default UserProfileRecipes;

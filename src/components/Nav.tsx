import {
  SignedIn,
  SignedOut,
  SignInButton,
  useUser,
  useClerk,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export const Nav = () => {
  const { user } = useUser();

  const { signOut } = useClerk();

  return (
    <div className="navbar bg-neutral text-neutral-content">
      <div className="flex-1">
        <Link href="/" className="btn-ghost btn text-xl normal-case">
          Alechemy!
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/recipes">Recipes</Link>
          </li>
          <SignedIn>
            <>
              <li tabIndex={0}>
                <a>
                  <div className="avatar">
                    <div className="w-10 rounded-full">
                      <Image
                        width={40}
                        height={40}
                        src={
                          user?.profileImageUrl
                            ? user.profileImageUrl
                            : "/profile.png"
                        }
                        alt="Profile image"
                      />
                    </div>
                  </div>
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </a>
                <ul className="bg-accent p-2">
                  <li className="hover:bg-secondary">
                    <Link href="/profile/recipes">My Recipes</Link>
                  </li>
                  <li className="hover:bg-secondary">
                    <p
                      onClick={() => {
                        void signOut();
                      }}
                    >
                      Sign out
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <button className="btn-secondary rounded font-bold text-base-100 hover:btn-warning">
                  <Link href="/recipe/add">Add recipe</Link>
                </button>
              </li>{" "}
            </>
          </SignedIn>
          <SignedOut>
            <li>
              <SignInButton />
            </li>
          </SignedOut>
        </ul>
      </div>
    </div>
  );
};

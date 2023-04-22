import { SignOutButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export const Nav = () => {
  const { user } = useUser();

  return (
    <div className="navbar bg-neutral text-neutral-content">
      <div className="flex-1">
        <Link href="/" className="btn-ghost btn text-xl normal-case">
          Brew!
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>Item 1</a>
          </li>
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
                <a>Submenu 2</a>
              </li>
            </ul>
          </li>
          <li className="rounded bg-secondary px-4 py-2 font-bold text-base-100 hover:bg-warning">
            <SignOutButton />
          </li>
        </ul>
      </div>
    </div>
  );
};

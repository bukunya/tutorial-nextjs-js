import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  const isLoggedIn = false;
  const blmLogin = {
    gambar: "/foto.jpg",
    login: "#",
  };

  const sdhLogin = {
    gambar: "/foto1.jpg",
    dashboard: "/dashboard",
    profil: "/profil",
    logout: "#",
  };
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <Image
        src={isLoggedIn ? sdhLogin.gambar : blmLogin.gambar}
        width={400}
        height={400}
        alt="foto"
      />
      {isLoggedIn ? (
        <div>
          <Link href={sdhLogin.dashboard}>Dashboard</Link>
          <Link href={sdhLogin.profil}>Profil</Link>
          <Link href={sdhLogin.logout}>Logout</Link>
        </div>
      ) : (
        <Link href={blmLogin.login}>Login</Link>
      )}
    </div>
  );
};

export default page;

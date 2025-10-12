import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-violet-300">
      <Button>Hello World</Button>
      <p className="text-primary">
        Lorem ipsum <span className="text-secondary">dolor sit</span> amet
      </p>
      <Image src={"/foto.jpg"} alt="foto" width={400} height={400} />
      <Link href={"https://afif.dev"} className="text-white">
        Web Afif
      </Link>
    </div>
  );
};

export default page;

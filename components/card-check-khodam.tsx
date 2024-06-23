"use client"
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa6";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { ModeToggle } from "./mode-toggle";
import { FormInput } from "./form-input";
import Link from "next/link";
import { KHODAM } from "@/constant/khodam";
import { FlipWords } from "@/components/ui/flip-words";

const CardCheckKhodam: React.FC = () => {
  const [khodam, setKhodam] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [buttonText, setButtonText] = useState<string>("Cek Sekarang");

  const handleKhodamCheck = (name: string) => {
    if (buttonText === "Cek Sekarang") {
      const randomKhodam = KHODAM[Math.floor(Math.random() * KHODAM.length)].name;
      setKhodam(randomKhodam);
      setUsername(name);
      setButtonText("Coba Lagi");
    } else {
      setKhodam("");
      setUsername("");
      setButtonText("Cek Sekarang");
    }
  };

  return (
    <div className="px-5">
      <Card className="min-w-[350px]">
        <CardHeader>
          <CardTitle>Check Khodam kamu</CardTitle>
          <CardDescription>Langsung aja cek kalo lu kepo.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full border rounded-lg h-32 flex flex-col justify-center items-center">
            {username && <p className="text-xs mx-auto w-9/12 text-center mb-5"> <span className="text-yellow-500 font-bold mr-1"> {username} </span> khodam yang kamu miliki bernama</p>}
            {khodam && 
      <div className="text-2xl font-black mx-auto">
        <FlipWords words={[khodam]} auto={false} />
      </div>
              }
      
          </div>
          <FormInput onSubmit={handleKhodamCheck} buttonText={buttonText} />
        </CardContent>
        <CardFooter className="flex justify-center gap-3 items-center">
          <Link href="https://instagram.com/hai.opit">
            <FaInstagram size={20} />
          </Link>
          <FaFacebook size={20} />
          <FaGithub size={20} />
          <ModeToggle />
        </CardFooter>
      </Card>
      <footer className="ml-3 text-xs bg-yellow-600 rounded-bl-md rounded-br-md w-fit px-3 py-1 mx-auto">
        Made with ❤️ by <span className="font-bold">Taufik-H</span>
      </footer>
    </div>
  );
};

export default CardCheckKhodam;

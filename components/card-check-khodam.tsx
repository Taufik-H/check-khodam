"use client";
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
import { FlipWords } from "./ui/flip-words";

const CardCheckKhodam = () => {
  const [khodam, setKhodam] = useState("");
  const [username, setUsername] = useState<string>("");

  const handleKhodamCheck = (name: string) => {
    const randomKhodam = KHODAM[Math.floor(Math.random() * KHODAM.length)].name;
    setKhodam(randomKhodam);
    setUsername(name);
  };
  return (
    <div className="px-5">
      <Card className="min-w-[350px]">
        <CardHeader>
          <CardTitle>Check Khodam kamu</CardTitle>
          <CardDescription>Langsung aja cek kalo lu kepo.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full border rounded-lg h-32 flex py-5 flex-col justify-start items-center">
            {username && (
              <p className="text-xs w-9/12 text-center">
                <span className="font-bold text-yellow-500">{username}</span>{" "}
                nama khodam kamu :
              </p>
            )}
            <div className="text-2xl font-bold mt-4">
              {khodam ? <FlipWords words={[khodam]} /> : <p>Check khodam</p>}
            </div>
          </div>
          <FormInput onSubmit={handleKhodamCheck} />
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

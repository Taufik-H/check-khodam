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
import { FlipWords } from "@/components/ui/flip-words";
import { Vortex } from "./ui/vortex";
import { LoaderPinwheel } from "lucide-react";

const CardCheckKhodam: React.FC = () => {
  const [khodam, setKhodam] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleKhodamCheck = (name: string) => {
    setIsLoading(true);
    setTimeout(() => {
      const randomKhodam =
        KHODAM[Math.floor(Math.random() * KHODAM.length)].name;
      setKhodam(randomKhodam);
      setUsername(name);
      setIsLoading(false);
    }, 1500); // waktu tunggu selama 2 detik
  };

  const resetForm = () => {
    setKhodam("");
    setUsername("");
    setIsLoading(false);
  };

  const VortexWithFallback = () => (
    <Vortex
      backgroundColor="transparent"
      particleCount={500}
      className="flex flex-col justify-center items-center"
    >
      <>
        {username && !isLoading && (
          <p className="text-xs mx-auto w-9/12 text-center mb-5 mt-3">
            <span className="text-yellow-500 font-bold mr-1">{username}</span>{" "}
            khodam kamu
          </p>
        )}
        {khodam && !isLoading && (
          <div className="text-2xl font-black mx-auto">
            <FlipWords words={[khodam]} auto={false} />
          </div>
        )}
      </>
    </Vortex>
  );

  return (
    <div className="px-5">
      <Card className="min-w-[350px]">
        <CardHeader>
          <CardTitle>Check Khodam kamu</CardTitle>
          <CardDescription>Langsung aja cek kalo lu kepo.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full relative overflow-hidden border rounded-lg flex flex-col justify-center items-center h-32">
            {isLoading ? (
              <div className="text-2xl font-black mx-auto">
                <LoaderPinwheel className="animate-spin" />
              </div>
            ) : (
              khodam && username && <VortexWithFallback />
            )}
          </div>
          <FormInput
            onSubmit={handleKhodamCheck}
            buttonText="Cek Sekarang"
            isResult={khodam !== ""}
            onReset={resetForm}
          />
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

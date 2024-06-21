import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa6";
import React from "react";
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

const CardCheckKhodam = () => {
  return (
    <div className="px-5">
      <Card className="min-w-[350px]">
        <CardHeader>
          <CardTitle>Check Khodam kamu</CardTitle>
          <CardDescription>Langsung aja cek kalo lu kepo.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="w-full border rounded-lg h-32 flex justify-center items-center">
            halo
          </div>
          <FormInput />
        </CardContent>
        <CardFooter className="flex justify-center gap-3 items-center">
          <FaInstagram size={20} />
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

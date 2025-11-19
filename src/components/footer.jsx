import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Button from "./ui/button";

export default function Footer() {
  return (
    <footer className="min-h-[50vh] flex flex-col justify-center bg-white">
      <div className="flex flex-row justify-center gap-6">
        <Facebook className="w-10 h-10 text-black"></Facebook>
        <Instagram className="w-10 h-10 text-black"></Instagram>
        <Twitter className="w-10 h-10 text-black"></Twitter>
        <Linkedin className="w-10 h-10 text-black"></Linkedin>
      </div>
      <div className="flex justify-center pt-4 text-black">
        <h1 className="">Copyright ©2020 All rights reserved </h1>
      </div>
    </footer>
  );
}

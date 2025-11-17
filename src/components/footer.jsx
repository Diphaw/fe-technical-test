import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Button from "./ui/button";

export default function Footer() {
  return (
    <footer className="min-h-[50vh] flex flex-col justify-center">
      <div className="flex flex-row justify-center gap-6">
        <Facebook className="w-10 h-10 "></Facebook>
        <Instagram className="w-10 h-10 "></Instagram>
        <Twitter className="w-10 h-10 "></Twitter>
        <Linkedin className="w-10 h-10 "></Linkedin>
      </div>
      <div className="flex justify-center pt-4">
        <h1 className="">Copyright ©2020 All rights reserved </h1>
      </div>
    </footer>
  );
}

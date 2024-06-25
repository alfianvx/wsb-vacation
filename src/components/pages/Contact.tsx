import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

export default function Contact() {
  return (
    <div className="h-screen">
      <section className="relative z-10 w-11/12 py-10 mx-auto text-center max-w-max">
        <h1 className="max-w-2xl pb-3 mx-auto text-xl font-bold lg:text-4xl text-pretty dark:bg-gradient-to-b dark:from-white dark:to-black/80 dark:text-transparent bg-clip-text">
          Kontak Kami
        </h1>
        <p className="text-sm text-pretty">
          Jika Anda memiliki pertanyaan, kritik, atau saran, jangan ragu untuk
          menghubungi kami melalui form di bawah ini.
        </p>
        <div className="max-w-xl mx-auto py-20">
          <div className="flex flex-col items-start space-y-2 pb-4">
            <Label htmlFor="name">Nama</Label>
            <Input
              id="name"
              type="text"
              className="bg-stone-100 border-transparent focus:border-transparent focus:ring-0"
              placeholder="Joko Widodo"
            />
          </div>
          <div className="flex flex-col items-start space-y-2 pb-4">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="joko@gmail.com"
              className="bg-stone-100 border-transparent focus:border-transparent focus:ring-0"
            />
          </div>
          <div className="flex flex-col items-start space-y-2 pb-4">
            <Label htmlFor="message">Pesan</Label>
            <Textarea
              id="message"
              className="w-full h-32 p-2 bg-stone-100 border-transparent focus:border-transparent focus:ring-0"
              placeholder="Tulis pesan Anda di sini"
            ></Textarea>
          </div>
          <div>
            <Button className="w-full">Kirim</Button>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { LoginSchema } from "@/schema";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { login } from "@/actions/login";
import Link from "next/link";
import SideSection from "./sideSection";

export default function SignInForm() {
  const [success, setSuccess] = useState("");

  // Define your form
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    login(values).then((data) => {
      setSuccess(data.success);
    });
  };

  return (
    <div className="w-full flex ">
      <SideSection />
      <div className="w-[50%] min-h-screen flex justify-center items-center bg-slate-300">
        <Card className="w-[500px] h-[400px] shadow-xl shadow-slate-600">
          <CardHeader>
            <h2 className=" text-xl font-bold mb-6">
              Email Provider Authentication
            </h2>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sign in with your student email id</FormLabel>
                      <FormControl>
                        <Input
                          className="h-16 text-lg"
                          {...field}
                          placeholder="johndoe@mitsgwl.ac.in"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {success && (
                  <p className="bg-green-500/20 rounded-lg text-green-500 w-full p-2.5">
                    {success}
                  </p>
                )}
                <Button
                  type="submit"
                  className="w-full h-14 hover:bg-slate-600 transition-all duration-300"
                >
                  Continue with email
                </Button>
              </form>
            </Form>
            <Link href="/register">
              <p className="p-4 justify-end w-[100%] hover:text-blue-500 flex">
                Create an account?
              </p>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

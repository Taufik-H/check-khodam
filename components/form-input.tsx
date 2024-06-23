"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RotateCcw } from "lucide-react";

const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Masukin nama kamu dulu manies ☺️.",
  }),
});

interface FormInputProps {
  onSubmit: (name: string) => void;
  buttonText: string;
  isResult: boolean;
  onReset: () => void;
}

export const FormInput: React.FC<FormInputProps> = ({
  onSubmit,
  buttonText,
  isResult,
  onReset,
}) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
    },
  });

  const handleSubmit = (data: z.infer<typeof FormSchema>) => {
    onSubmit(data.name);
  };

  const handleReset = () => {
    form.reset();
    onReset();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="w-full space-y-6 mt-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className=""
                  placeholder="masukan nama kamu"
                  {...field}
                  disabled={isResult}
                />
              </FormControl>
              <FormMessage className="text-yellow-500" />
            </FormItem>
          )}
        />
        <div className="flex gap-3 justify-center items-center">
          <Button type="submit" className="w-full" disabled={isResult}>
            {buttonText}
          </Button>
          <Button
            size={"icon"}
            variant={"outline"}
            onClick={handleReset}
            disabled={!isResult}
          >
            <RotateCcw size={20} />
          </Button>
        </div>
      </form>
    </Form>
  );
};

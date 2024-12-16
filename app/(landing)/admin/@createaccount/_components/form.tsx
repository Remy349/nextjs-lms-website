"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoaderCircle } from "lucide-react";
import { useForm } from "react-hook-form";

const CreateForm = () => {
  const form = useForm();

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (formData) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-y-4">
        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            control={control}
            name="firstname"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="bg-background"
                    type="text"
                    autoComplete="off"
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="lastname"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <FormLabel>Apellido</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="bg-background"
                    type="text"
                    autoComplete="off"
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem className="space-y-1">
              <FormLabel>Correo</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="bg-background"
                  type="text"
                  autoComplete="off"
                  disabled={isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="password"
          render={({ field }) => (
            <FormItem className="space-y-1">
              <FormLabel>Contraseña</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="bg-background"
                  type="password"
                  autoComplete="off"
                  disabled={isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="font-medium" disabled={isSubmitting}>
          {isSubmitting ? (
            <LoaderCircle className="size-5 animate-spin" />
          ) : (
            "Crear cuenta"
          )}
        </Button>
      </form>
    </Form>
  );
};

export default CreateForm;

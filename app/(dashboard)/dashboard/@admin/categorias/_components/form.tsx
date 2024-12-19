"use client";

import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
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
import { zodResolver } from "@hookform/resolvers/zod";
import { createCategoryAction } from "@/actions/category.action";
import { toast } from "sonner";
import { CreateFormSchema, TCreateFormSchema } from "@/schemas/category.schema";

const CreateForm = () => {
  const form = useForm<TCreateFormSchema>({
    resolver: zodResolver(CreateFormSchema),
    defaultValues: { name: "" },
  });

  const {
    control,
    reset,
    handleSubmit,
    formState: { isSubmitting },
  } = form;

  const onSubmit = async (formData: TCreateFormSchema) => {
    const actionRes = await createCategoryAction(formData);

    if (actionRes) {
      if (actionRes.error) {
        toast.error(actionRes.error);
      } else if (actionRes.success) {
        toast.success("Categoria creada con exito");

        reset();
      }
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-y-4">
        <FormField
          control={control}
          name="name"
          render={({ field }) => (
            <FormItem className="space-y-1">
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="text"
                  autoComplete="off"
                  disabled={isSubmitting}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <DialogFooter>
          <Button type="submit" className="font-medium" disabled={isSubmitting}>
            {isSubmitting ? (
              <LoaderCircle className="size-5 animate-spin" />
            ) : (
              "Crear"
            )}
          </Button>
        </DialogFooter>
      </form>
    </Form>
  );
};

export default CreateForm;

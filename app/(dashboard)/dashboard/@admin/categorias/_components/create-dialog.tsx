import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CirclePlus } from "lucide-react";
import CreateForm from "./form";

const CreateDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="font-medium" size="sm">
          Crear categoria
          <CirclePlus className="size-4 ml-2" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Crear categoria</DialogTitle>
          <DialogDescription>
            Define y agrega nuevas categorías para organizar los cursos de
            manera clara y eficiente.
          </DialogDescription>
        </DialogHeader>
        <CreateForm />
      </DialogContent>
    </Dialog>
  );
};

export default CreateDialog;

import type { Metadata } from "next";
import CreateForm from "./_components/form";

export const metadata: Metadata = {
  title: "Crear cuenta",
};

export default function Page() {
  return (
    <>
      <h1 className="font-bold text-center text-2xl mb-2 md:text-3xl">
        Crea tu cuenta de Administrador
      </h1>
      <p className="text-center text-sm text-muted-foreground mb-8 md:max-w-lg md:mx-auto">
        Registra tu cuenta de administrador para gestionar cursos, usuarios y
        recursos educativos en la plataforma.
      </p>
      <div className="md:max-w-lg md:mx-auto">
        <CreateForm />
      </div>
    </>
  );
}

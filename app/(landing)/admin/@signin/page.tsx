import type { Metadata } from "next";
import SignInForm from "./_components/form";

export const metadata: Metadata = {
  title: "Iniciar sesión",
};

export default function Page() {
  return (
    <>
      <h1 className="font-bold text-center text-2xl mb-2 md:text-3xl">
        Accede a tu cuenta de Administrador
      </h1>
      <p className="text-center text-sm text-muted-foreground mb-8 md:max-w-lg md:mx-auto">
        Inicia sesión para gestionar cursos, usuarios y supervisar el
        aprendizaje en la plataforma.
      </p>
      <div className="md:max-w-lg md:mx-auto">
        <SignInForm />
      </div>
    </>
  );
}

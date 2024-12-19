const EmptyState = () => {
  return (
    <div className="border-dashed border rounded-md p-4 h-[10rem] flex items-center justify-center">
      <div className="flex flex-col items-center text-center">
        <h3 className="text-lg font-semibold tracking-tight">No hay datos</h3>
        <p className="text-sm text-muted-foreground">
          Aún no se encuentran datos registrados. Empieza agregando uno.
        </p>
      </div>
    </div>
  );
};

export default EmptyState;

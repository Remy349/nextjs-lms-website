import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DataTable } from "./_components/data-table";
import { columns } from "./_components/columns";
import EmptyState from "./_components/empty-state";
import CreateDialog from "./_components/create-dialog";
import { getCategoriesDataTable } from "@/services/db/category.db";
import CustomBreadcrumb from "./_components/custom-breadcrumb";

export default async function Page() {
  const categoriesDataTable = await getCategoriesDataTable();

  return (
    <div>
      <div className="mb-4">
        <CustomBreadcrumb />
      </div>
      <Card className="rounded-md shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="text-xl">Categorias</CardTitle>
          <CardDescription>
            Organiza y administra las categorías para clasificar los cursos de
            manera efectiva y facilitar la navegación de los usuarios.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <CreateDialog />
          </div>
          {categoriesDataTable.length === 0 ? (
            <EmptyState />
          ) : (
            <DataTable columns={columns} data={categoriesDataTable} />
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default async function PerfilUserPage({
  params,
}: {
  params: { user: string };
}) {
  return (
    <div>
      <h1>User: {params.user}</h1>
    </div>
  );
}

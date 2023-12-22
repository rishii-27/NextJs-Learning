import details from "../data";

const Page = ({ params }) => {
  const { id } = params;
  const detail = details.find((item) => item.id === parseInt(id));

  if (!detail) {
    return <div>Details not found</div>;
  }

  return (
    <div>
      <h1>{detail.name}</h1>
      <p>{detail.role}</p>
    </div>
  );
};

export default Page;

const Page = ({ params }) => {
  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },
    { id: 2, name: "Vaibhav", role: "Backend Developer" },
    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];

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

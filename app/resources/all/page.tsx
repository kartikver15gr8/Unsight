import ResourceCard from "../resourcecard";
export default function AllResources() {
  return (
    <div className=" px-4">
      <div className="">
        <ResourceCard
          id={1}
          title="Web Development"
          description="Learn full stack web development"
          resourceLink="https://app.100xdevs.com/"
          catagory="Web Development"
          userId=""
          upvotes={1}
        />
        <ResourceCard
          id={1}
          title="Web Development"
          description="Learn full stack web development"
          resourceLink="https://app.100xdevs.com/"
          catagory="Web Development"
          userId=""
          upvotes={1}
        />
      </div>
    </div>
  );
}

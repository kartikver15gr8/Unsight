import ResourceCard from "../resourcecard";
import { GetAllResources } from "./getall";
export default async function AllResources() {
  const resources = await GetAllResources();
  return (
    <div className="px-4">
      {resources.map((e, key) => {
        return (
          <ResourceCard
            title={e.title}
            description={e.description}
            categary={e.categary}
            resourceLink={e.resourceLink}
            id={e.id}
            userId={e.userId}
          />
        );
      })}
    </div>
  );
}

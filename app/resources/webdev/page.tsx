import ResourceCard from "../resourcecard";
import { GetWebDev } from "./getWebDev";

export default async function WebDev() {
  const WebDevResources = await GetWebDev();
  return (
    <div className="px-4">
      {WebDevResources.map((e, key) => {
        return (
          <ResourceCard
            title={e.title}
            description={e.description}
            categary={"webdev"}
            resourceLink={e.resourceLink}
            id={e.id}
            userId={e.userId}
          />
        );
      })}
    </div>
  );
}

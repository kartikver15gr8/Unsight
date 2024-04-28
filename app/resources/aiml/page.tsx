import ResourceCard from "../resourcecard";
import { GetAIML } from "./getAIML";

export default async function AIML() {
  const AIMLResources = await GetAIML();
  return (
    <div className="px-4">
      {AIMLResources.map((e) => {
        return (
          <ResourceCard
            id={e.id}
            title={e.title}
            description={e.description}
            categary={"aiml"}
            resourceLink={e.resourceLink}
            userId={e.userId}
          />
        );
      })}
    </div>
  );
}

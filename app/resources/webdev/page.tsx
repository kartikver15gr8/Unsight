import Reveal from "@/components/reveal";
import ResourceCard from "../resourcecard";
import { GetWebDev } from "./getWebDev";

export default async function WebDev() {
  const WebDevResources = await GetWebDev();
  return (
    <div className="px-4 overflow-auto overflow-y-scroll h-[88vh] scrollbar-hide">
      {WebDevResources.map((e, key) => {
        return (
          <Reveal>
            <ResourceCard
              key={key}
              title={e.title}
              description={e.description}
              categary={"webdev"}
              resourceLink={e.resourceLink}
              id={e.id}
              userId={e.userId}
            />
          </Reveal>
        );
      })}
    </div>
  );
}

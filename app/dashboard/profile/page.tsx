import Landing from "@/components/landing";
import ProfilePage from "@/components/user/profile";
import UserPosts from "./userposts";
import { Posts } from "../feed/posts";
import Reveal from "@/components/reveal";

export default async function Profile() {
  const posts = await UserPosts();
  return (
    <div className="w-[50%] p-2 overflow-auto overflow-y-scroll h-[95vh] scrollbar-hide">
      <ProfilePage profileImg="" id="" bannerImg="" name="" />
      <div>
        <div className="">
          {posts.map((e, key) => {
            return (
              <Reveal key={key}>
                <div className="">
                  <Posts
                    key={key}
                    id={e.id}
                    description={e.description}
                    imgUrl={e.imgUrl}
                    likes={e.like}
                    userId={e.userId}
                  ></Posts>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}

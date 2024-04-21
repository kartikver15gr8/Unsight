import { signOut } from "@/auth";
import { Button } from "@/components/ui/button";

const SignoutButton = () => {
  return (
    <div>
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <Button>Sign Out</Button>
      </form>
    </div>
  );
};

export default SignoutButton;

import { auth, signOut } from "@/auth";
import SignoutButton from "@/components/auth/signoutBtn";
import { redirect } from "next/navigation";
import Landing from "@/components/landing";
import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";
import Explorebar from "@/components/explorebar";

const DashboardPage = async () => {
  const session = await auth();

  return <Landing />;
};

export default DashboardPage;

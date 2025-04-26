import Layout from "~/components/layout";
import IpponInput from "~/components/ippon-input";
import InputHistory from "~/components/input-history";

export default function AddIpponPage() {
  return (
    <Layout>
      <div className="min-h-screen w-full bg-gradient-to-b from-blue-900 to-violet-400">
        <IpponInput />
        <InputHistory />
      </div>
    </Layout>
  );
}

import Layout from "~/components/layout";
import IpponInput from "~/components/ippon-input";
import InputHistory from "~/components/input-history";

export default function AddIpponPage() {
  return (
    <Layout>
      <div className="flex min-h-screen w-full flex-col items-center justify-center gap-5 bg-gradient-to-b from-blue-900 to-violet-400">
        <h1 className="rounded-md border bg-neutral-300 px-2 py-1 text-3xl font-bold shadow-xl">
          Add an Ippon
        </h1>
        <IpponInput />
        <InputHistory />
      </div>
    </Layout>
  );
}

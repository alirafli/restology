import type { NextPage } from "next";
import { Meta, Button, Text } from "@components/elements";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col w-4/5">
      <Meta subTitle="Homepage" />
      <h1>Home</h1>
      <Button>Sign Up</Button>
      <Button variant="secondary">Sign In</Button>
      <Button variant="tertiary" fullWidth>
        Hubungi melalui email
      </Button>
      <Text color="black">Kelamaan nunggu?</Text>
      <Text variant="jumboSubTitle">
        Pesan meja dan makanan lebih cepat dan praktis
      </Text>
      <Text variant="title">
        Koleksi di <span className="font-bold">Jakarta</span>
      </Text>
      <Text variant="subTitle">
        Temukan restoran, bar, cafe terbaik di lokasimu
      </Text>
    </div>
  );
};

export default Home;

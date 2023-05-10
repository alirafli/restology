import type { NextPage } from "next";
import { Meta, Button, Text } from "@components/elements";
import { useAppSelector, useAppDispatch } from "@hooks/useRedux";
import { login } from "@features/user";

const Component: NextPage = () => {
  const user = useAppSelector((state) => state.user.value);
  const dispatch = useAppDispatch();

  const handleUser = () => {
    dispatch(login({ name: "Raihan", age: 12, email: "Raihan@gmail.com" }));
  };

  return (
    <div className="flex flex-col w-4/5">
      <Meta subTitle="Component" />

      <section about="button component">
        <Button>Sign Up</Button>
        <div className="bg-slate-400 w-fit">
          <Button variant="secondary">Sign In</Button>
        </div>
        <Button variant="tertiary" fullWidth>
          Hubungi melalui email
        </Button>
      </section>

      <section about="text component">
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
      </section>

      <section about="redux implementation">
        <Text variant="subTitle">{user.name}</Text>
        <Text variant="subTitle">{user.age}</Text>
        <Text variant="subTitle">{user.email}</Text>
        <Button onClick={handleUser}>Sign Up</Button>
      </section>
    </div>
  );
};

export default Component;

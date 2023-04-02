import { tRPC } from "../../../services";
import { Wrapper } from "./styles";

const HomePage = () => {
  const { useQuery: useGetHelloWorldText } = tRPC.helloWorld.getHelloWorldText;

  const { data, error, isFetching } = useGetHelloWorldText(undefined, {
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });

  return (
    <Wrapper>
      {isFetching ? "Is Loading..." : error ? error.message : data}
    </Wrapper>
  );
};

export default HomePage;

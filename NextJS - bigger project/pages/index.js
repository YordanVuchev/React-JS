import MeetupList from "../components/meetups/MeetupList";
const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "KTM 2 stroke",
    image:
      "https://wiseco.com/media/magefan_blog/Wiseco/New_Products/KTM_TPI_pistons/286009_300_EXC_TPI_2020.jpg",
    address: "Some address 5,2312",
    description: "This is an enduro bike",
  },
  {
    id: "m2",
    title: "second KTM 2 stroke",
    image:
      "https://wiseco.com/media/magefan_blog/Wiseco/New_Products/KTM_TPI_pistons/286009_300_EXC_TPI_2020.jpg",
    address: "Some address 5,2312",
    description: "This is an enduro bike",
  },
  {
    id: "m3",
    title: "third KTM 2 stroke",
    image:
      "https://wiseco.com/media/magefan_blog/Wiseco/New_Products/KTM_TPI_pistons/286009_300_EXC_TPI_2020.jpg",
    address: "Some address 5,2312",
    description: "This is an enduro bike",
  },
];

const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;

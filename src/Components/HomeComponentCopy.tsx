// import { IconGasStation, IconGauge, IconManualGearbox, IconUsers } from '@tabler/icons-react';
import { Badge, Button, Card, Center, Group, Image, Text } from "@mantine/core";
import classes from "./styles/home.module.css";
import { useGetQuipmentsQuery } from "../redux/slice/slice";
import { Equipments } from "../types/types";
import tractorImg from "../assets/login.jpg";
import { useNavigate } from "react-router-dom";
import "./styles/home.module.css";

const mockdata = [
  { label: "4 passengers" },
  { label: "100 km/h in 4 seconds" },
  { label: "Automatic gearbox" },
  { label: "Electric" },
];

const HomeComponentCopy = () => {
  const features = mockdata.map((feature) => (
    <Center key={feature.label}>
      {/* <feature.icon size={16} className={classes.icon} stroke={1.5} /> */}
      <Text size="xs">{feature.label}</Text>
    </Center>
  ));

  const { data, isLoading, error } = useGetQuipmentsQuery();
  console.log("data: ", data);
  const navigate = useNavigate();

  return (
    <>
      <div className="container">
        {mockdata?.map((item, index) => (
          <div className="card">
            <img alt="img" className="img"></img>
            <text>Tesla</text>
          </div>
        ))}
      </div>
    </>
  );
};

export default HomeComponentCopy;

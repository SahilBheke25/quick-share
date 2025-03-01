// import { IconGasStation, IconGauge, IconManualGearbox, IconUsers } from '@tabler/icons-react';
import { Badge, Button, Card, Center, Group, Image, Text } from "@mantine/core";
import classes from "./styles/home.module.css";
import { useGetQuipmentsQuery } from "../redux/slice/slice";
import { Equipments } from "../types/types";
import tractorImg from "../assets/login.jpg";
import { useNavigate } from "react-router-dom";

const mockdata = [
  { label: "4 passengers" },
  { label: "100 km/h in 4 seconds" },
  { label: "Automatic gearbox" },
  { label: "Electric" },
];

const HomeComponent = () => {
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
      {/* {error && alert("invalid credentials")}
    {isLoading && <h1>"Is loading"</h1>} */}
      <div className={classes.cards}>
        {/* {data?.map((item, index) => ( */}
        {mockdata?.map((item, index) => (
          <Card withBorder radius="md" className={classes.card} key={index}>
            <Card.Section className={classes.imageSection}>
              <Image src={tractorImg} alt="Tesla Model S" />
            </Card.Section>
            {/* <div>
              <img src={tractorImg} alt="" />
            </div> */}

            <Group justify="space-between" mt="md">
              <div>
                {/* <Text fw={500}>{item.equipment_name}</Text> */}
                <Text fw={500}>Tesla S</Text>
                {/* <Text fz="xs" c="dimmed">
            {item.description}
          </Text> */}
              </div>
              <Badge variant="outline">25% off</Badge>
            </Group>

            <Card.Section className={classes.section} mt="md">
              <Text fz="sm" c="dimmed" className={classes.label}>
                {/* {item.description} */}
                {item.label}
              </Text>

              {/* <Group gap={8} mb={-8}>
          {features}
        </Group> */}
            </Card.Section>

            <Card.Section className={classes.section}>
              <Group gap={30}>
                <div>
                  <Text fz="xl" fw={700} style={{ lineHeight: 1 }}>
                    {/* Rs.{item.rent_per_day} */}
                    Rs. 1000
                  </Text>
                  <Text
                    fz="sm"
                    c="dimmed"
                    fw={500}
                    style={{ lineHeight: 1 }}
                    mt={3}
                  >
                    per day
                  </Text>
                </div>

                <Button
                  radius="xl"
                  style={{ flex: 1 }}
                  onClick={() => navigate(`/equipment/${34}`)}
                >
                  View More
                </Button>
              </Group>
            </Card.Section>
          </Card>
        ))}
      </div>
    </>
  );
};

export default HomeComponent;

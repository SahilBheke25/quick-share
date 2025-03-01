import { Card, Image, Text, Button, Group } from "@mantine/core";
import EquiImg from "../assets/login.jpg";
import "./styles/equipmentComponent.css";

const EquipmentDetails = () => {
  return (
    <div className="p-6">
      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-8 w-full max-w-6xl">
          <div>
            <Image src={EquiImg} alt="Tractor" className="img" />
          </div>
          <div>
            <div className="flex justify-between items-center"></div>

            <Text size="xl" className="mt-4">
              ₹6,17,000 <text color="red">/day</text>
            </Text>
            {/* <Text size="sm" color="gray">
              /day
            </Text> */}
            <Text size="sm" className="mt-2">
              Quantity: 50
            </Text>

            <Group className="mt-134">
              <Button color="green">Rent</Button>
            </Group>
            <Text size="md" className="mt-6">
              Summary
            </Text>
            <Text size="sm" className="mt-2">
              You'll be in control of being more connected to your tractor with
              JDLink. Being connected gives property owners more time to play or
              work with their tractor; the convenience of having all the
              information they need to run their tractor when they want, and the
              confidence that if a problem arises, they’ll know what to do.
              Dairy and livestock producers gain more time to work on their farm
              and with their animals, as well as tools to manage their business
              and make data-driven decisions.
            </Text>

            <Text size="md" className="mt-6">
              Listing Agent
            </Text>
            <Card shadow="sm" padding="lg" className="mt-2">
              <Group>
                <div>
                  <Text>Rajesh Patil</Text>
                  <Text size="sm" color="gray">
                    Pune, Maharashtra
                  </Text>
                  <Text size="sm">rajeshpatil14@gmail.com</Text>
                  <Text size="sm">+91 5678923102</Text>
                </div>
              </Group>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EquipmentDetails;

import {
  Card,
  Image,
  Text,
  Button,
  Badge,
  Group,
  Input,
  ActionIcon,
} from "@mantine/core";
import EquiImg from "../assets/login.jpg";
import { IconSearch, IconHeart, IconShare } from "@tabler/icons-react";
import "./styles/equipmentComponent.css";

const EquipmentDetails = () => {
  return (
    <div className="p-6">
      {/* Search Bar */}
      {/* <div className="flex justify-between items-center mb-6"> */}
      {/* <Text size="xl" weight={700}> */}
      {/* <Text size="xl">Quick Farm</Text> */}
      {/* <div className="flex items-center gap-2"> */}
      {/* <Input */}
      {/* // icon={<IconSearch size={16} />}
            // placeholder="Search"
            // className="w-64" */}
      {/* //   /> */}
      {/* <Text>Rent</Text> */}
      {/* <Text>Lend</Text> */}
      {/* <Button variant="default">Login</Button> */}
      {/* <Button color="dark">Signup</Button> */}
      {/* </div> */}
      {/* </div>  */}

      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-8 w-full max-w-6xl">
          {/* Left Side - Images */}
          <div>
            <Image
              src={EquiImg} // Replace with actual image source
              alt="Tractor"
              className="img"
            />
            {/* <div className="flex gap-2 mt-4">
              {[1, 2, 3, 4].map((i) => (
                <Image
                  key={i}
                  src={`/path-to-thumbnail-${i}.jpg`} // Replace with actual thumbnails
                  alt={`Thumbnail ${i}`}
                  className="w-1/4 rounded-lg cursor-pointer"
                />
              ))}
            </div> */}
          </div>

          {/* Right Side - Details */}
          <div>
            <div className="flex justify-between items-center">
              {/* <Badge color="green" size="lg">
                FOR SALE
              </Badge>
              <div className="flex gap-2">
                <ActionIcon variant="subtle">
                  <IconShare size={18} />
                </ActionIcon>
                <ActionIcon variant="subtle">
                  <IconHeart size={18} />
                </ActionIcon>
              </div> */}
            </div>

            {/* <Text size="lg" weight={700} className="mt-2"> */}
            {/* <Text size="lg" className="mt-2">
              Pune, Maharashtra, India
            </Text> */}
            {/* <Text size="xl" weight={900} className="mt-4"> */}
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
              {/* <Button variant="outline">Schedule Tour</Button> */}
              <Button color="green">Rent</Button>
            </Group>
            {/* <Button variant="default" className="mt-4">
              Rent
            </Button> */}

            {/* <Text size="md" weight={600} className="mt-6"> */}
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

            {/* <Text size="md" weight={600} className="mt-6"> */}
            <Text size="md" className="mt-6">
              Listing Agent
            </Text>
            <Card shadow="sm" padding="lg" className="mt-2">
              <Group>
                {/* <Image
                  src="/path-to-agent-image.jpg" // Replace with actual agent image
                  alt="Rajesh Patil"
                  className="w-12 h-12 rounded-full"
                /> */}
                <div>
                  {/* <Text weight={600}>Rajesh Patil</Text> */}
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

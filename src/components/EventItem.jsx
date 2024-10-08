import { ViewIcon } from "@chakra-ui/icons";
import {
  Box,
  Card,
  Button,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  HStack,
  Text,
  Divider,
  Spacer,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { formatDate } from "../utils/date";

const EventItem = ({
  eventData: { _id, title, organizer, description, eventDate },
}) => {
  return (
    <Card borderTop="8px" borderColor="purple.400">
      <CardHeader>
        <Box>
          <Heading as="h3" size="small">
            {title}
          </Heading>
          <HStack>
            <Text fontSize="12px">{organizer}</Text>
          </HStack>
        </Box>
      </CardHeader>

      <CardBody>
        <Text mb="1rem">{description}</Text>
        <Text fontSize="14px" color="purple.600">
          {formatDate(eventDate)}
        </Text>
      </CardBody>
      <Divider borderColor="gray.200" />
      <CardFooter>
        <HStack>
          <Button
            as={Link}
            to={`participants/${_id}/${title}`}
            variant="ghost"
            leftIcon={<ViewIcon />}
          >
            Watch
          </Button>
          <Spacer />
          <Button as={Link} to={`register/${_id}`} variant="ghost">
            Register
          </Button>
        </HStack>
      </CardFooter>
    </Card>
  );
};

export default EventItem;

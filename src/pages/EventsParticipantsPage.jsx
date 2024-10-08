import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchParticipants } from "../non-redux-api/participants";
import Section from "../components/common/Section/Section";
import PageContainer from "../components/common/Container/Container";
import PageTitle from "../components/common/PageTitle";
import ParticipantsList from "../components/ParticipantsList";
import { Text, Flex, Center } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import ErrorText from "../components/common/ErrorText";

const EventsParticipantsPage = () => {
  const [participants, setParticipants] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { eventId, title } = useParams();

  useEffect(() => {
    const getParticipants = () => {
      setLoading(true);
      fetchParticipants(eventId)
        .then((res) => {
          setParticipants(res.data.participants);
        })
        .catch((error) => {
          setError(error.message);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    getParticipants();
  }, [eventId]);

  return (
    <Section>
      <PageContainer>
        <PageTitle>
          Participants of <Text color="purple.400">{title}</Text>{" "}
        </PageTitle>
        {loading && (
          <Center>
            <Flex direction="row" alignItems="center" gap="1rem">
              <Text color="purple.400" textAlign="center" fontSize="24px">
                Loading participants. Please, wait.
              </Text>
              <Spinner color="purple.400" />
            </Flex>
          </Center>
        )}
        {participants.length > 0 && !loading && (
          <ParticipantsList participants={participants} />
        )}
        {!participants.length && !loading && !error && (
          <Text color="purple.600" textAlign="center" fontSize="24px">
            No participants yet!
          </Text>
        )}
        {error && <ErrorText />}
      </PageContainer>
    </Section>
  );
};

export default EventsParticipantsPage;

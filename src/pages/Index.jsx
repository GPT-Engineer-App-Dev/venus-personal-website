// Personal website for Venus Williams
import { Box, Flex, Heading, Text, Image, Link, VStack, HStack, Button } from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaFacebookF, FaYoutube } from "react-icons/fa";

const Index = () => {
  return (
    <VStack spacing={8} p={5}>
      <Box>
        <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1622699423623-c0f1bfdbd253?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxWZW51cyUyMFdpbGxpYW1zfGVufDB8fHx8MTcxNDM5OTYzMXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Venus Williams" />
      </Box>
      <Heading as="h1" size="xl">
        Venus Williams
      </Heading>
      <Text fontSize="lg">Professional Tennis Player | Entrepreneur | Advocate for Gender Equality</Text>
      <HStack spacing={4}>
        <Link href="https://instagram.com/venuswilliams" isExternal>
          <Button leftIcon={<FaInstagram />} colorScheme="pink">
            Instagram
          </Button>
        </Link>
        <Link href="https://twitter.com/Venuseswilliams" isExternal>
          <Button leftIcon={<FaTwitter />} colorScheme="twitter">
            Twitter
          </Button>
        </Link>
        <Link href="https://facebook.com/VenusWilliams" isExternal>
          <Button leftIcon={<FaFacebookF />} colorScheme="facebook">
            Facebook
          </Button>
        </Link>
        <Link href="https://youtube.com/user/VenusWilliams" isExternal>
          <Button leftIcon={<FaYoutube />} colorScheme="red">
            YouTube
          </Button>
        </Link>
      </HStack>
      <Flex direction="column" align="center" maxW="2xl" textAlign="center">
        <Heading as="h2" size="lg" mb={3}>
          About Venus
        </Heading>
        <Text fontSize="md">Venus Ebony Starr Williams is an American professional tennis player who is currently ranked world No. 38 in the WTA singles rankings. She is generally regarded as one of the all-time greats of women's tennis and, along with her younger sister Serena Williams, was credited with ushering in a new era of power and athleticism on the women's professional tennis tour.</Text>
      </Flex>
      <Flex direction="column" align="center" maxW="2xl" textAlign="center">
        <Heading as="h2" size="lg" mb={3}>
          Career Highlights
        </Heading>
        <Text fontSize="md">Venus has won seven Grand Slam singles titles, including five at Wimbledon. She has also won fourteen Grand Slam Women's doubles titles, all with Serena; the pair are unbeaten in Grand Slam doubles finals. Venus also has two Mixed Doubles titles. Her five Wimbledon singles titles ties her with two other women for eighth place on the all-time list.</Text>
      </Flex>
    </VStack>
  );
};

export default Index;

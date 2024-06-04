import { Container, Text, VStack, Heading, Box, Image, Link, Button } from "@chakra-ui/react";
import { useState } from "react";

const Index = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "First Post",
      content: "This is the content of the first post.",
      image: "/images/blog-image.jpg",
    },
    // Add more posts as needed
  ]);

  const handleDelete = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="2xl">Welcome to My Personal Blog</Heading>
        {posts.map(post => (
          <Box key={post.id} width="100%" p={4} borderWidth="1px" borderRadius="md">
            <Heading as="h2" size="lg">{post.title}</Heading>
            <Image src={post.image} alt={post.title} borderRadius="md" my={4} />
            <Text>{post.content}</Text>
            <Button colorScheme="red" mt={4} onClick={() => handleDelete(post.id)}>Delete</Button>
          </Box>
        ))}
        <Link href="/add-post" color="teal.500" fontSize="lg">Add a new post</Link>
      </VStack>
    </Container>
  );
};

export default Index;
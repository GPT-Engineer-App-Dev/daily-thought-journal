import { useState } from "react";
import { Container, VStack, Heading, Input, Textarea, Button, Image, Box } from "@chakra-ui/react";

const AddPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle post submission logic here
    console.log({ title, content, image });
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">Add New Post</Heading>
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={10}
        />
        <Input type="file" accept="image/*" onChange={handleImageChange} />
        {preview && (
          <Box boxSize="sm">
            <Image src={preview} alt="Image Preview" borderRadius="md" />
          </Box>
        )}
        <Button colorScheme="teal" onClick={handleSubmit}>Submit</Button>
      </VStack>
    </Container>
  );
};

export default AddPost;
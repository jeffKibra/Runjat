import { useEffect } from "react";
import {
  Flex,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  FormHelperText,
  FormErrorMessage,
  Grid,
  GridItem,
  Button,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = Yup.object().shape({
  comment: Yup.string().required("*Required!"),
  firstName: Yup.string().required("*Required!"),
  lastName: Yup.string().required("*Required!"),
});

function CommentForm(props) {
  const { loading, handleFormSubmit, isSubmitted } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      comment: "",
      firstName: "",
      lastName: "",
    },
  });

  useEffect(() => {
    if (isSubmitted) {
      reset();
    }
  }, [isSubmitted, reset]);

  return (
    <VStack mt={4} bg="white" shadow="md" borderRadius="md" p={4} w="full">
      <Flex w="full" justify="flex-start">
        <Heading size="sm">Tell us what you think about this article</Heading>
      </Flex>
      <form style={{ width: "100%" }} onSubmit={handleSubmit(handleFormSubmit)}>
        <Grid columnGap={4} rowGap={2} templateColumns="repeat(12, 1fr)">
          <GridItem colSpan={12}>
            <FormControl
              isRequired
              isDisabled={loading}
              isInvalid={!!errors.comment?.message}
            >
              <FormLabel htmlFor="comment">Leave us a comment</FormLabel>
              <Textarea id="comment" {...register("comment")} />
              <FormErrorMessage>{errors.comment?.message}</FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={[12, null, 6]}>
            <FormControl
              isRequired
              isDisabled={loading}
              isInvalid={!!errors.comment?.firstName}
            >
              <FormLabel htmlFor="firstName">First Name</FormLabel>
              <Input {...register("firstName")} />
              <FormErrorMessage>{errors.firstName?.message}</FormErrorMessage>
            </FormControl>
          </GridItem>
          <GridItem colSpan={[12, null, 6]}>
            <FormControl
              isRequired
              isDisabled={loading}
              isInvalid={!!errors.comment?.lastName}
            >
              <FormLabel htmlFor="lastName">Last Name</FormLabel>
              <Input {...register("lastName")} />
              <FormErrorMessage>{errors.lastName?.message}</FormErrorMessage>
            </FormControl>
          </GridItem>
        </Grid>

        <Flex w="full" mt="4">
          <Button
            isLoading={loading}
            type="submit"
            colorScheme="cyan"
            variant="outline"
          >
            SUBMIT FOR REVIEW
          </Button>
        </Flex>
      </form>
    </VStack>
  );
}

CommentForm.propTypes = {
  loading: PropTypes.bool.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
  isSubmitted: PropTypes.bool.isRequired,
};

export default CommentForm;

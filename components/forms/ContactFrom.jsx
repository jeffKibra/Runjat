import { useEffect } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Textarea,
  Input,
  Button,
  VStack,
  Box,
  Text,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import PropTypes from "prop-types";

import { CardContent } from "../ui/Card";

const schema = Yup.object()
  .shape({
    name: Yup.string().required("Name is Required!"),
    email: Yup.string()
      .email("Email not valid!")
      .required("Email is Required!"),
    subject: Yup.string().required("Subject is Required!"),
    message: Yup.string().required("Message is Required!"),
  })
  .required("All Fields are Required!");

function ContactForm(props) {
  const { loading, isSent, handleFormSubmit } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (isSent) {
      reset();
    }
  }, [isSent, reset]);

  return (
    <Box color="white" border="1px solid grey">
      <CardContent>
        <Text>Leave us a Message and well get back to you immediately!</Text>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <VStack spacing={2}>
            <FormControl
              isDisabled={loading}
              isRequired
              isInvalid={errors?.name}
            >
              <FormLabel>Name</FormLabel>
              <Input {...register("name")} />
              <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
            </FormControl>

            <FormControl
              isDisabled={loading}
              isRequired
              isInvalid={errors?.email}
            >
              <FormLabel>Email</FormLabel>
              <Input {...register("email")} />
              <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>

            <FormControl
              isDisabled={loading}
              isRequired
              isInvalid={errors?.subject}
            >
              <FormLabel>Subject</FormLabel>
              <Input {...register("subject")} />
              <FormErrorMessage>{errors.subject?.message}</FormErrorMessage>
            </FormControl>

            <FormControl
              isDisabled={loading}
              isRequired
              isInvalid={errors?.message}
            >
              <FormLabel>Message</FormLabel>
              <Textarea {...register("message")} noOfLines={4} />
              <FormErrorMessage>{errors.message?.message}</FormErrorMessage>
            </FormControl>

            <Button isLoading={loading} type="submit" colorScheme="cyan">
              submit
            </Button>
          </VStack>
        </form>
      </CardContent>
    </Box>
  );
}

ContactForm.propTypes = {
  loading: PropTypes.bool.isRequired,
  isSent: PropTypes.bool.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
};

export default ContactForm;

import { useEffect } from "react";
import { useToast } from "@chakra-ui/react";
import { connect } from "react-redux";

import { SEND_EMAIL } from "../store/actions/contact";
import { reset } from "../store/slices/contactSlice";

import ContactForm from "../components/forms/ContactFrom";

function SendEmail(props) {
  const { loading, isSent, error, send, resetForm } = props;

  const toast = useToast();

  useEffect(() => {
    if (isSent) {
      toast({
        isClosable: true,
        duration: 5000,
        position: "top",
        status: "success",
        variant: "subtle",
        description: "Message successfully sent!",
      });
      resetForm();
    }
  }, [isSent, toast, resetForm]);

  useEffect(() => {
    if (error) {
      toast({
        description: "Error when sending message. Please try Again Later!",
        duration: 5000,
        isClosable: true,
        position: "top",
        status: "error",
        variant: "subtle",
      });
    }
  }, [error, toast]);

  return (
    <ContactForm handleFormSubmit={send} isSent={isSent} loading={loading} />
  );
}

function mapStateToProps(state) {
  const { loading, isSent, error } = state.contactReducer;

  return {
    loading,
    isSent,
    error,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    send: (data) => dispatch({ type: SEND_EMAIL, data }),
    resetForm: () => dispatch(reset()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SendEmail);
